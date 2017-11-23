angular.module('lsi').controller('fortinentpmapctrafficCtrl', function ($scope, fortinetService) {

    $scope.maploader = false;
    $scope.rangeSlider = true;
    $scope.accePointData = [];
    $scope.displayMessage = 'Please select a store or floor and a date to fetch all observations.';
    $scope.visitorCount = '';
    $scope.selectedDate = '';

    $scope.availableDateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        maxDate: new Date()           
    };
    $scope.availableDatePopup = {
        opened: false
    };

    $scope.OpenAvailableDate = function() {
        $scope.availableDatePopup.opened = !$scope.availableDatePopup.opened;
    };
    

    $scope.loadTree = function () {
        fortinetService.getFortinentTree(function (response) {
            $scope.storeInst = $scope.getObject(response);
            $scope.getSelectedId($scope.storeInst[0].id, 'Store');
            if(response.status != "failure") {
                $scope.treeList = response.data;
                $scope.dynamicBranches = $scope.treeList.branchs;
            }

            // intialize map on load
            fortinetService.getDensityHeatmap($scope.treeList.id, function (response) {
                $scope.densityHeatmapValues = response;
                $scope.loadGoogleMap();
            });
            
            fortinetService.getAccessPointDetails(function (response) {               
                if(response.infrastructure.length > 0){
                    $scope.accessPointPullPush = response.infrastructure;
                }else if (response.push.length > 0) {
                    $scope.accessPointPullPush = response.push;
                }else if (response.pull.length > 0){
                    $scope.accessPointPullPush = response.pull;
                }
            });

        });

    };
    $scope.loadTree();

    function getObjects(obj, key, val) {
        var objects = [];
        for (var i in obj) {
            if (!obj.hasOwnProperty(i)) continue;
            if (typeof obj[i] == 'object') {
                objects = objects.concat(getObjects(obj[i], key, val));
            } else if (i == key && obj[key] == val) {
                objects.push(obj);
            }
        }
        return objects;
    }


    $scope.branchStatus = [], $scope.storeStatus = [], $scope.floorStatus = [];
    $scope.captureRateData = {}, $scope.type = '';

    $scope.getSelectedId = function (selectedId, selectedName) {
        $scope.type = selectedName.toUpperCase();
        switch (selectedName) {
            case 'Branch':
                {
                    $scope.branchStatus = [];
                    $scope.branchStatus.push(selectedId);
                    $scope.storeStatus = []; $scope.floorStatus = [];
                    $scope.onlyArea = false;
                    $scope.displayMessage = 'Please select a store or floor and a date to fetch all observations.';
                    $scope.visitorCount = '';
                    break;
                }
            case 'Floor':
                {
                    $scope.$watch('selectedDate', function() {                  
                        if($scope.selectedDate == '' || $scope.selectedDate == null){
                            $scope.displayMessage = 'Please select a store or floor and a date to fetch all observations.';
                        }else {
                            $scope.floorStatus = [];
                            $scope.floorStatus.push(selectedId);
                            $scope.branchStatus = []; $scope.storeStatus = [];
                            $scope.onlyArea = false;                    
                            $scope.accePointData = [];
                            $scope.visitorCount = '';
                            var floorplanImage = "floorMap";
                            $scope.displayMessage = 'Fetching Observations. Please wait.';
                            $scope.maploader = true;
                            $scope.sDate = moment($scope.selectedDate).format('YYYY-MM-DD');                            
                            var selDate = (moment.utc($scope.sDate,'YYYY-MM-DD').startOf('day').format('x'))*1000; // date in milliseconds
                            
                            $scope.resPullPush = $scope.accessPointPullPush;
                            var accePointDataPullPush = [];                            

                            for (i = 0; i < $scope.resPullPush.length; i++){ 
                                if($scope.resPullPush[i].floor != null){                              
                                    if($scope.resPullPush[i].floor.id == selectedId){
                                        accePointDataPullPush.push($scope.resPullPush[i]);
                                    } 
                                }                    
                            }  

                            angular.forEach(accePointDataPullPush, function (val, key) {                                      
                                $scope.accePointData.push({
                                    "id": val.id,
                                    "ssid": val.ssid,
                                    "lng": val.lng,
                                    "lat": val.lat,
                                    "name": val.accessPointName,
                                    "rssiThreshold": val.rssiThreshold,
                                    "baseMac": val.baseMac,
                                    "lastImportTimestamp": val.lastSuccessfulImport,
                                    "serialNumber": val.serialNumber,
                                    "active": val.active,
                                    "useForLocalization": val.useForLocalization,
                                    "staLocate": val.staLocate,
                                    "connected": val.connected,
                                    "central": val.central,
                                    "writePermission": val.writePermission
                                  });    
                            });

                            fortinetService.getCumulativeVisitor ( $scope.accePointData, selDate, function (response) {
                                $scope.heatmapAccessPoints = response;                        
                                fortinetService.getHeatmapFloorplan($scope.type, selectedId, function (response) {
                                     $scope.floorplan = response;
                                    if (response.latitudeLowerLeftCorner == null || response.latitudeUpperRightCorner == null || response.longitudeLowerLeftCorner == null || response.longitudeUpperRightCorner == null) {
                                        $scope.floorImage = '';
                                        $scope.displayFloorplanOverlay();
                                    }
                                    else {
                                        fortinetService.getFloorplanImage(floorplanImage, selectedId, function (response) {                                                                            
                                            $scope.floorImage = "data:image/png;base64," + response;   
                                            $scope.displayFloorplanOverlay();                                 
                                        });
                                    }                            

                                });
                                
                            });
                            
                        }
                    });
                   
                    break;
                }
            case 'Store':
                {                  
                    $scope.$watch('selectedDate', function() {
                        if($scope.selectedDate == '' || $scope.selectedDate == null){
                        $scope.displayMessage = 'Please select a store or floor and a date to fetch all observations.';
                        }else {
                            $scope.storeStatus = [];
                            $scope.storeStatus.push(selectedId);
                            $scope.branchStatus = []; $scope.floorStatus = [];
                            $scope.onlyArea = false;                    
                            $scope.accePointData = [];
                            $scope.visitorCount = '';
                            var floorplanImage = "indoorMap";
                            $scope.displayMessage = 'Fetching Observations. Please wait.';
                            $scope.maploader = true;
                            $scope.sDate = moment($scope.selectedDate).format('YYYY-MM-DD');                            
                            var selDate = (moment.utc($scope.sDate,'YYYY-MM-DD').startOf('day').format('x'))*1000; // date in milliseconds
                            
                            $scope.resPullPush = $scope.accessPointPullPush;
                            var accePointDataPullPush = [];                            

                            for (i = 0; i < $scope.resPullPush.length; i++){ 
                                if($scope.resPullPush[i].store != null){                              
                                    if($scope.resPullPush[i].store.id == selectedId){
                                        accePointDataPullPush.push($scope.resPullPush[i]);
                                    } 
                                }                    
                            } 
                            angular.forEach(accePointDataPullPush, function (val, key) {                                      
                                $scope.accePointData.push({
                                    "id": val.id,
                                    "ssid": val.ssid,
                                    "lng": val.lng,
                                    "lat": val.lat,
                                    "name": val.accessPointName,
                                    "rssiThreshold": val.rssiThreshold,
                                    "baseMac": val.baseMac,
                                    "lastImportTimestamp": val.lastSuccessfulImport,
                                    "serialNumber": val.serialNumber,
                                    "active": val.active,
                                    "useForLocalization": val.useForLocalization,
                                    "staLocate": val.staLocate,
                                    "connected": val.connected,
                                    "central": val.central,
                                    "writePermission": val.writePermission
                                  });    
                            });                            

                            fortinetService.getCumulativeVisitor ( $scope.accePointData, selDate, function (response) {
                                $scope.heatmapAccessPoints = response;                        
                                fortinetService.getHeatmapFloorplan($scope.type, selectedId, function (response) {
                                    $scope.floorplan = response;
                                    if (response.latitudeLowerLeftCorner == null || response.latitudeUpperRightCorner == null || response.longitudeLowerLeftCorner == null || response.longitudeUpperRightCorner == null) {
                                        $scope.floorImage = '';
                                        $scope.displayFloorplanOverlay();
                                    }
                                    else {
                                        fortinetService.getFloorplanImage(floorplanImage, selectedId, function (response) {                                                                            
                                            $scope.floorImage = "data:image/png;base64," + response;   
                                            $scope.displayFloorplanOverlay();                                 
                                        });
                                    }
                                    
                                });
                                
                            });
                        }
                    });

                    break;
                }
        }
    };


    $scope.loadGoogleMap = function () {

        var map, pointarray, heatmap;
        var markers = [];

        var locations = [];
        angular.forEach($scope.densityHeatmapValues, function (val, key) {
            if (val.lat == null || val.lng == null) { } else {
                locations.push([val.name, val.lat, val.lng, 'redMarker']);
            }
        });

        $scope.initMap = function () {
            var map = new google.maps.Map(document.getElementById('map-canvas'), {
                zoom: 11,
                mapTypeId: 'roadmap'
            });            

            // map Custom marker
            var infowindow = new google.maps.InfoWindow();

            var iconBase = 'images/';
            var icons = {
                redMarker: {
                    icon: iconBase + 'wifi_access_marker.png'
                },
                blueMarker: {
                    icon: iconBase + 'ltblue-dot.png'
                }
            };

            var iconBase = 'wifi_access_marker.png';
            var marker, i;

            for (i = 0; i < locations.length; i++) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    icon: icons[locations[i][3]].icon,
                    map: map,                   
                });

                markers.push(marker);

                google.maps.event.addListener(marker, 'click', (function (marker, i) {
                    return function () {
                        infowindow.setContent(locations[i][0]);
                        infowindow.open(map, marker);
                    };
                })(marker, i));
            }

            
            // auto center
            $scope.AutoCenter = function () {
                var bounds = new google.maps.LatLngBounds();
                $.each(markers, function (index, marker) {
                    bounds.extend(marker.position);
                });
                map.fitBounds(bounds);
            }
            $scope.AutoCenter();

            // toggle map markers function
            $scope.toggleMarkers = function (mapMarkers) {
                if (mapMarkers == false) {
                    for (var i = 0, n = markers.length; i < n; ++i) {
                        markers[i].setMap(null);
                    }
                }
                else {
                    for (var i = 0, n = markers.length; i < n; ++i) {
                        markers[i].setMap(map);
                    }
                }
            }
            
            
        }

        $scope.initMap();
    }

    $scope.displayFloorplanOverlay = function () {
        $scope.maploader = false;     

        var map, pointarray, heatmap;
        var markers = [];
        var taxiData = [];

        var wifiLocations = [];
        angular.forEach($scope.accePointData, function (val, key) {
            if (val.lat == null || val.lng == null) { } else {                
                wifiLocations.push([val.name, val.lat, val.lng, 'redMarker', '']);                
            }
        });

        var userLocations = [];
        var totalVisitorCount = 0;        
        
        if ($scope.heatmapAccessPoints.length == 0) {
            var locations = wifiLocations; 
            taxiData.push({ location: new google.maps.LatLng(null, null), weight: null });            
        }else {
            $scope.rangeSlider = false;
            angular.forEach($scope.heatmapAccessPoints, function (val, key) {
                if (val.lat == null || val.lng == null) { } else { 
                    var vName = (val.displayName == "") ? "Visitors:" : (val.displayName);                                  
                    userLocations.push([vName, val.lat, val.lng, 'blueMarker', val.weight]);                
                    taxiData.push({ location: new google.maps.LatLng(val.lat, val.lng), weight: val.weight });
                    if (val.weight > 0) {totalVisitorCount += val.weight;}
                }    
            });
            var locations = wifiLocations.concat(userLocations);                         
        }
        if($scope.storeStatus.length==0 && $scope.floorStatus.length==0){
            $scope.displayMessage = 'Please select a store or floor and a date to fetch all observations.';
        }
        else{
            $scope.visitorCount = totalVisitorCount;
            $scope.displayMessage = 'Cumulative traffic in store:';
        }
        
        $scope.initMap = function () {
            var map = new google.maps.Map(document.getElementById('map-canvas'), {
                zoom: 13,
                mapTypeId: 'roadmap'
            });

            var pointArray = new google.maps.MVCArray(taxiData);

            heatmap = new google.maps.visualization.HeatmapLayer({
                data: pointArray,
                map: map,
                "opacity": $scope.opacitySlider,
                "maxOpacity": 1,
                "radius": $scope.radiusSlider,
                "scaleRadius": true
            });

            // overlay image latlag values
            var swBound = new google.maps.LatLng(
                $scope.floorplan.latitudeLowerLeftCorner,
                $scope.floorplan.longitudeLowerLeftCorner);
            var neBound = new google.maps.LatLng(
                $scope.floorplan.latitudeUpperRightCorner,
                $scope.floorplan.longitudeUpperRightCorner);
            var bounds = new google.maps.LatLngBounds(swBound, neBound);

            // overlay image
            var srcImage = $scope.floorImage;
           
            
            // The custom USGSOverlay object contains the USGS image,
            // the bounds of the image, and a reference to the map.
            overlay = new USGSOverlay(bounds, srcImage, map);

            // map Custom marker
            var infowindow = new google.maps.InfoWindow();

            var iconBase = 'images/';
            var icons = {
                redMarker: {
                    icon: iconBase + 'wifi_access_marker.png'
                },
                blueMarker: {
                    icon: iconBase + 'ltblue-dot.png'
                }
            };

            var iconBase = 'wifi_access_marker.png';
            var marker, i;

            for (i = 0; i < locations.length; i++) {
                if ($scope.heatmapAccessPoints.length == 0) {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        icon: icons[locations[i][3]].icon,
                        map: map                   
                    });
                }else{
                    var marker = new MarkerWithLabel({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        icon: icons[locations[i][3]].icon,
                        map: map,
                        labelContent: locations[i][4],
                        labelAnchor: new google.maps.Point(22, 0),
                        labelClass: "map_marker_labels", // the CSS class for the label
                        labelStyle: { opacity: 0.75 }                    
                    });                    
                }
                markers.push(marker);

                google.maps.event.addListener(marker, 'click', (function (marker, i) {
                    return function () {
                        infowindow.setContent(locations[i][0]);
                        infowindow.open(map, marker);
                    };
                })(marker, i));
            }
            // auto center
            $scope.AutoCenter = function () {
                var bounds = new google.maps.LatLngBounds();
                $.each(markers, function (index, marker) {
                    bounds.extend(marker.position);
                });
                map.fitBounds(bounds);
            }
            $scope.AutoCenter();

            // map markers set to diable onload
            $scope.locationMarkers = false;
            for (var i = 0, n = markers.length; i < n; ++i) {
                markers[i].setMap(null);
            }
        
            // toggle map markers function
            $scope.toggleMarkers = function (mapMarkers) {
                if (mapMarkers == false) {                    
                    for (var i = 0, n = markers.length; i < n; ++i) {
                        markers[i].setMap(null);
                    }
                }
                else {
                    for (var i = 0, n = markers.length; i < n; ++i) {
                        markers[i].setMap(map);
                    }
                }
            }
        }
       

        $scope.radiusSlider = 40;
        $scope.opacitySlider = 0.9;

        // heat map opacity change
        $scope.changeRadius = function () {
            heatmap.set('radius', $scope.radiusSlider);
        }

        // heat map opacity change
        $scope.changeOpacity = function () {
            heatmap.set('opacity', $scope.opacitySlider);
        }

        // This example creates a custom overlay called USGSOverlay, containing
        // a U.S. Geological Survey (USGS) image of the relevant area on the map.

        // Set the custom overlay object's prototype to a new instance
        // of OverlayView. In effect, this will subclass the overlay class therefore
        // it's simpler to load the API synchronously, using
        // google.maps.event.addDomListener().
        // Note that we set the prototype to an instance, rather than the
        // parent class itself, because we do not wish to modify the parent class.

        var overlay;
        USGSOverlay.prototype = new google.maps.OverlayView();


        /** @constructor */
        function USGSOverlay(bounds, image, map) {

            // Initialize all properties.
            this.bounds_ = bounds;
            this.image_ = image;
            this.map_ = map;

            // Define a property to hold the image's div. We'll
            // actually create this div upon receipt of the onAdd()
            // method so we'll leave it null for now.
            this.div_ = null;
            this.rotation = $scope.floorplan.rotationDegrees;
            // Explicitly call setMap on this overlay.
            this.setMap(map);
        }

        /**
         * onAdd is called when the map's panes are ready and the overlay has been
         * added to the map.
         */
        USGSOverlay.prototype.onAdd = function () {

            var div = document.createElement('div');
            div.style.borderStyle = 'none';
            div.style.borderWidth = '0px';
            div.style.position = 'absolute';

            // Create the img element and attach it to the div.
            var img = document.createElement('img');
            img.src = this.image_;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.position = 'absolute';
            div.appendChild(img);

            this.div_ = div;

            // Add the element to the "overlayLayer" pane.
            var panes = this.getPanes();
            panes.overlayLayer.appendChild(div);
            this.rotate(this.rotation);
        };

        USGSOverlay.prototype.draw = function () {

            // We use the south-west and north-east
            // coordinates of the overlay to peg it to the correct position and size.
            // To do this, we need to retrieve the projection from the overlay.
            var overlayProjection = this.getProjection();

            // Retrieve the south-west and north-east coordinates of this overlay
            // in LatLngs and convert them to pixel coordinates.
            // We'll use these coordinates to resize the div.
            var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
            var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

            // Resize the image's div to fit the indicated dimensions.
            var div = this.div_;
            div.style.left = sw.x + 'px';
            div.style.top = ne.y + 'px';
            div.style.width = (ne.x - sw.x) + 'px';
            div.style.height = (sw.y - ne.y) + 'px';
        };

        // The onRemove() method will be called automatically from the API if
        // we ever set the overlay's map property to 'null'.
        USGSOverlay.prototype.onRemove = function () {
            this.div_.parentNode.removeChild(this.div_);
            this.div_ = null;
        };



        USGSOverlay.prototype.rotate = function (degrees) {
            var div = this.div_;
            div.style.msTransform = 'rotate(' + degrees + 'deg)'; // IE
            div.style.webkitTransform = 'rotate(' + degrees + 'deg)'; // Chrome/Safari
            div.style.MozTransform = 'rotate(' + degrees + 'deg)'; // Firefox
            div.style.OTransform = 'rotate(' + degrees + 'deg)'; // Opera
            div.style.transform = 'rotate(' + degrees + 'deg)';
            div.style["transform-origin"] = "50% 50%";  //Rotation im Mittelpunkt
            this.rotation = degrees;
        };
        $scope.initMap();

    }

});