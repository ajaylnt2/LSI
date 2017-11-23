angular.module('lsi').controller('fortinentrealtimetrackCtrl', function ($scope, fortinetService, $interval, $timeout) {

    $scope.realtimeInfo = true;
    $scope.accessPoints = [];
    $scope.play = true;
    $scope.pause = false;
    $scope.locationMap = true;
    $scope.densityHeatmap = false;
    $scope.visitors = true;
    $scope.empEquip = false;
    $scope.tableView = false;    
    $scope.fixedEquipment;
    $scope.maploader = false;
    var googleMap;
    var pull;
    var legend;
    var countHiddenChar;

    // function to load tree with respect to the account
    $scope.loadTree = function () {
        fortinetService.getFortinentTree(function (response) {
            $scope.storeInst = $scope.getObject(response);
            $scope.getSelectedId($scope.storeInst[0].id, 'Store', $scope.storeInst[0]);
            if (response.status != "failure") {
                $scope.treeList = response.data;
                $scope.dynamicBranches = $scope.treeList.branchs;
            }
        });

        // service to get employee and fixed equipment details  
        fortinetService.getEmpFixedEqu(function (response) {
            $scope.fixedEquData = response;
            $scope.fixedEquipment = [];
            angular.forEach($scope.fixedEquData.rows, function (val) {
                $scope.fixedEquipment.push(val["Mac"])
            });
        });

        // service to get Access Point details of the project
        fortinetService.getAccessPointDetails(function (response) {
            if (response.infrastructure.length > 0) {
                $scope.accessPointPullPush = response.infrastructure;
            } else if (response.push.length > 0) {
                $scope.accessPointPullPush = response.push;
            } else if (response.pull.length > 0) {
                $scope.accessPointPullPush = response.pull;
            }
        });
        // service to get Access Point rivacy hide details
        fortinetService.getPrivacyHide(function (response) {
            countHiddenChar = response[0].countHide;
        });

    };
    $scope.loadTree();


    $scope.branchStatus = [], $scope.storeStatus = [], $scope.floorStatus = [];
    $scope.type = '';


    // function to get tree selected id, name and it's data 
    $scope.getSelectedId = function (selectedId, selectedName, fullData) {
        $scope.type = selectedName;

        switch (selectedName) {
            case 'Branch':
                {
                    $scope.realtimeInfo = true;
                    break;
                }
            case 'Floor':
                {
                    $scope.floorStatus = [];
                    $scope.floorStatus.push(selectedId);
                    $scope.branchStatus = [];
                    $scope.storeStatus = [];
                    $scope.accessPtStatus = [];
                    $scope.accessPoints = [];
                    $scope.realtimeInfo = false;
                    $scope.maploader = true;
                    $scope.play = true;
                    $scope.pause = false;
                    $scope.realtimeTrack(selectedId, selectedName, fullData);
                    break;
                }
            case 'Store':
                {
                    $scope.storeStatus = [];
                    $scope.storeStatus.push(selectedId);
                    $scope.branchStatus = [];
                    $scope.floorStatus = [];
                    $scope.accessPoints = [];
                    $scope.realtimeInfo = false;
                    $scope.maploader = true;
                    $scope.play = true;
                    $scope.pause = false;
                    $scope.realtimeTrack(selectedId, selectedName, fullData);
                    break;
                }
            default:
                {
                    $scope.realtimeInfo = true;
                }

        }
    };

    // function to get all real time tracking values
    $scope.realtimeTrack = function(selectedId, selectedName, fullData) {
        $scope.searchMacValue = function (val) {
            $scope.searchMac = val;
            $scope.retriveAPData(selectedId, selectedName, fullData);
        }

        $scope.$watch('locationMap + visitors + empEquip + showDevInside + exclRandomMacs + showAreas', function (val) {
            $scope.playPauseFunc('play', selectedId, selectedName, fullData);
        });
    }


    // function to call realtime API in time intervals
    // toggle play pause button function
    $scope.playPauseFunc = function (button, selectedId, selectedName, fullData) {
        $interval.cancel(pull);
        $scope.playPauseBtn = function (button) {
            if (button === 'play') {
                $scope.play = true;
                $scope.pause = false;
                $scope.retriveAPData(selectedId, selectedName, fullData);
                $scope.callAtTimeout = function () {
                    $scope.retriveAPData(selectedId, selectedName, fullData);
                }
                pull = $interval(function () {
                    $scope.callAtTimeout();
                }, 60000);
                $timeout(function () {
                    $interval.cancel(pull);
                }, 300000);
            } else if (button === 'pause') {
                $scope.play = false;
                $scope.pause = true;
                $interval.cancel(pull);
            }
        };
        $scope.playPauseBtn(button);
    }

    // function to load location Map or density Heatmap w.r.t button selection 
    $scope.toggleMapBtn = function (button) {
        if (button === 'locationMap') {
            $scope.locationMap = true;
            $scope.densityHeatmap = false;
        } else if (button === 'densityHeatmap') {
            $scope.locationMap = false;
            $scope.densityHeatmap = true;
        }
    };

    // kill the $interval when user left the current state or controller
    $scope.$on('$destroy', function () {
        $interval.cancel(pull);
    });


    // function to retrive AP Data of the selected node of the tree
    $scope.retriveAPData = function (selectedId, selectedName, fullData) {
        if (selectedName == 'Store') {
            var floorplanImage = "indoorMap";
            fortinetService.getAccessPointStore(selectedId, function (response) {
                googleMap = new initGoogleMap(response, selectedName, fullData, "map-canvas");

                fortinetService.getRTPositions('store', selectedId, function (response) {
                    $scope.initData(response);
                });
            });
            // $scope.getFloorplan(selectedId, 'STORE', floorplanImage);
        } else if (selectedName == 'Floor') {
            var floorplanImage = "floorMap";
            fortinetService.getAccessPointFloor(selectedId, function (response) {
                googleMap = new initGoogleMap(response, selectedName, fullData, "map-canvas");

                fortinetService.getRTPositions('floor', selectedId, function (response) {
                    $scope.initData(response);
                });
            });
            // $scope.getFloorplan(selectedId, 'FLOOR', floorplanImage);
        }

    }

    $scope.getFloorplan = function (selectedId, type, floorplanImage) {
        fortinetService.getHeatmapFloorplan(type, selectedId, function (response) {
            $scope.floorplan = response;
            if (response.latitudeLowerLeftCorner == null || response.latitudeUpperRightCorner == null || response.longitudeLowerLeftCorner == null || response.longitudeUpperRightCorner == null) {
                $scope.floorImage = '';
                $scope.floorplanOverlay($scope.floorplan, $scope.floorImage);
            } else {
                fortinetService.getFloorplanImage(floorplanImage, selectedId, function (response) {
                    $scope.floorImage = "data:image/png;base64," + response;
                    $scope.floorplanOverlay($scope.floorplan, $scope.floorImage);
                });
            }

        });
    }


    //////////////////////////// Localization status table ///////////////////////////////
    function AP_Client_map(data) {
        var result = {
            "1": [0, 0, 0],
            "2": [0, 0, 0],
            "3": [0, 0, 0],
            "4": [0, 0, 0],
            "5": [0, 0, 0],
            "6": [0, 0, 0]
        }
        for (var i = 0; i < data.length; i++) {
            if (data[i].numberOfAccessPoints <= 6) {
                result[data[i].numberOfAccessPoints][0] += 1;

                if ((+new Date) - data[i]["startObservationTimeInUTC"] <= 10000) {
                    result[data[i].numberOfAccessPoints][1] += 1;
                } else {
                    result[data[i].numberOfAccessPoints][2] += 1;
                }
            } else {
                result[6][0] += 1;
                if ((+new Date) - data[i]["startObservationTimeInUTC"] <= 10000) {
                    result[6][1] += 1;
                } else {
                    result[6][2] += 1;
                }
            }

        }
        result["6+"] = result["6"];
        delete result["6"];


        return result;
    }

    function dataToGUI(data) {
        var possible, available;
        $scope.selected;
        if ($scope.algorithm == 'WA') {
            $scope.selected = "Weighted Averages";
        } else if ($scope.algorithm == 'proximity') {
            $scope.selected = "Proximity";
        }

        $scope.tableResult = "";
        for (var i = 0; i < (Object.keys(data)).length; i++) {
            if ((Object.keys(data))[i] == 1) {
                possible = "Proximity";
            } else if ((Object.keys(data))[i] == 2) {
                possible = "Weighted Averages,Proximity";
            } else if ((Object.keys(data))[i] >= 3) {
                possible = "Weighted Averages,Proximity";
            }

            if (((possible.split(',')).indexOf($scope.selected)) > -1) {
                available = "possible";
            } else {
                available = "";
            }

            $scope.tableResult += "<tr>";
            $scope.tableResult += "<td class='text-right'>" + (Object.keys(data))[i] + "</td>" + "<td class='text-right'>" + data[(Object.keys(data))[i]][0] + "</td>" + "<td>" + possible + "</td><td>" + available + "</td>" + "<td class='text-right'>" + data[(Object.keys(data))[i]][2] + "</td>" + "<td class='text-right'>" + data[(Object.keys(data))[i]][1] + "</td>";
            $scope.tableResult += "</tr>"
        }
    }

    /////////////////////////////  Filters start here ////////////////////////////////////
    function filterConvexHull(data) {
        var res_data = [];
        if ($scope.showDevInside == false) {
            res_data = data;
        } else {
            for (var i = 0; i < data.length; i++) {
                if (data[i]["outsideConvexHull"] == false) {
                    res_data.push(data[i]);
                }
            }
        }
        return res_data;
    }

    function filterRandomMacs(data) {
        var res_data = [];
        if ($scope.exclRandomMacs == false) {
            res_data = data;
        } else {
            for (var i = 0; i < data.length; i++) {
                if (data[i]["randomMac"] == false) {
                    res_data.push(data[i]);
                }
            }
        }
        return res_data;
    }

    function filterFixedEquip(data) {

        var res_data = [];

        if ($scope.visitors == true) {
            for (var i = 0; i < data.length; i++) {
                var isFounded = false;
                for (var j = 0; j < $scope.fixedEquipment.length; j++) {
                    if (data[i]["clientMac"] == $scope.fixedEquipment[j]) {
                        isFounded = true;
                    }
                }
                if (!isFounded) {
                    res_data.push(data[i]);
                }
            }
        }
        if ($scope.empEquip == true) {
            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < $scope.fixedEquipment.length; j++) {
                    if (data[i]["clientMac"] == $scope.fixedEquipment[j]) {
                        res_data.push(data[i]);
                    }
                }
            }
        }
        if ($scope.visitors == true && $scope.empEquip == true) {
            res_data = data;
        }
        return res_data;
    }

    function filterByMAC(data, pattern) {
        var filteredData = [];
        var reg = new RegExp(pattern, "g");

        for (var i = 0; i < data.length; i++) {
            if (reg.test(data[i]["clientMac"])) {
                filteredData.push(data[i]);
            }
        }
        return filteredData;
    }

    function HideClainMac(macAdr) {
        var count = countHiddenChar;
        if (count != 0) {
            var mac = macAdr.replace(/[:]/gi, ''); //just example 
            var res = mac.slice(0, -count);
            for (var i = 0; i < count; i++) {
                res += "*";
            }
            res = res.insert(2, ":");
            res = res.insert(5, ":");
            res = res.insert(8, ":");
            res = res.insert(11, ":");
            res = res.insert(14, ":");
            return res;
        } else {
            return macAdr;
        }
    }


    /////////////////////////////  Filters end here ///////////////////////////////////////

    $scope.initData = function (data) {
        /////////////// Filters calls ////////////////
        data = filterRandomMacs(data);
        data = filterConvexHull(data);
        data = filterFixedEquip(data);
        data = filterByMAC(data, $scope.searchMac);
        //////////////// Filters end /////////////////
        dataToGUI(AP_Client_map(data));
        $scope.tableView = true;

        googleMap.devicesData = data;
        var devicesMarkers = [];

        //////// Removing overlays before refresh////////
        if (googleMap.devicesMarkers != undefined) {
            for (var i in googleMap.devicesMarkers) {
                googleMap.devicesMarkers[i].setMap(null);
            }
        }
        if (googleMap.heatmap != undefined) {
            googleMap.heatmap.setMap(null);
        }
        ///////////////// Removing ends /////////////////        
        if ($scope.locationMap == true) { // Devices View selected

            for (var i = 0; i < googleMap.devicesData.length; i++) {
                // Short info about device : clientMac
                var shortInfoWindow = new google.maps.InfoWindow({
                    content: HideClainMac(googleMap.devicesData[i]["clientMac"])
                });
                // Detailed info about device : full sowifi data
                var detailedInfoWindow = new google.maps.InfoWindow({
                    content: "<div style='margin:3px;'><img src='images/preloader.gif' width='12'></div>"
                });

                // Device's marker
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(
                        googleMap.devicesData[i][$scope.algorithm == "proximity" ? "closestLat" : "lat"],
                        googleMap.devicesData[i][$scope.algorithm == "proximity" ? "closestLng" : "lng"]),
                    map: googleMap.map,
                    id: googleMap.devicesData[i]["clientMac"],
                    icon: 'images/red_circle.png',
                    shortinfowindow: shortInfoWindow,
                    detailedinfowindow: detailedInfoWindow,
                    cntAPs: googleMap.devicesData[i]["numberOfAccessPoints"]
                });
                devicesMarkers.push(marker);

                // Events
                google.maps.event.addListener(marker, 'click', function () {
                    this.shortinfowindow.close();
                    this.detailedinfowindow.open(this.map, this);
                    if (data[0] != undefined) {
                        var name = (data[0].name != null) ? data[0].name : "-";
                        var profileUrl = (data[0].profileUrl != null) ? "<a href=" + data[0].profileUrl + " target='_blank'>facebook</a>" : "-";
                        var email = (data[0].email != null) ? data[0].email : "-";
                        var phoneNumber = (data[0].phoneNumber != null) ? data[0].phoneNumber : "-";
                    } else {
                        var name = "-";
                        var profileUrl = "-";
                        var email = "-";
                        var phoneNumber = "-";
                    }
                    var possible_algorithms = [];
                    if (this.cntAPs >= 1) {
                        possible_algorithms.push('Proximity');
                    }
                    if (this.cntAPs >= 2) {
                        possible_algorithms.push('WA');
                    }

                    this.detailedinfowindow.setContent(
                        "<b>Mac adress:</b> " + HideClainMac(this.id) +
                        "<hr /><b>Name:</b> " + name +
                        "<br /><b>Profile:</b> " + profileUrl +
                        "<br /><b>E-mail:</b> " + email +
                        "<br /><b>Phone number:</b> " + phoneNumber +
                        "<hr /><b>Number of APs seeing this Device: </b>" + this.cntAPs +
                        "<br><b>Possible algorithms: </b>" + possible_algorithms.join(', ')
                    );
                });

                google.maps.event.addListener(marker, 'mouseover', function () {
                    this.shortinfowindow.open(this.map, this);
                });

                google.maps.event.addListener(marker, 'mouseout', function () {
                    this.shortinfowindow.close();
                });

            };

        } else if ($scope.densityHeatmap == true) { // Density Heatmap View selected
            var points = [];
            for (var i = 0; i < googleMap.devicesData.length; i++) {
                points.push(new google.maps.LatLng(
                    googleMap.devicesData[i][$scope.algorithm == "proximity" ? "closestLat" : "lat"],
                    googleMap.devicesData[i][$scope.algorithm == "proximity" ? "closestLng" : "lng"]));
            }

            googleMap.heatmap = new google.maps.visualization.HeatmapLayer({
                data: points,
                map: googleMap.map
            });

            googleMap.heatmap.set('radius', $scope.radiusSlider);
            googleMap.heatmap.set('opacity', $scope.opacitySlider);
        }

        googleMap.devicesMarkers = devicesMarkers;
        legend.innerHTML = '<div class="gmaps_controls"> Devices visible: ' + googleMap.devicesData.length + '</div>';

    };

    // toggle map markers function
    $scope.toggleMarkers = function (mapMarkers) {
        var i;
        if (mapMarkers == false) {
            for (i = 0, n = googleMap.APMarkers.length; i < n; ++i) {
                googleMap.APMarkers[i].setVisible(false);
            }
        } else {
            for (i = 0, n = googleMap.APMarkers.length; i < n; ++i) {
                googleMap.APMarkers[i].setVisible(true);
            }
        }
    }

    function initGoogleMap(data, type, fullData, containerID) {
        this.APdata = data;
        this.APMarkers = [];

        this.map = new google.maps.Map(document.getElementById('map-canvas'), {
            zoom: 13,
            mapTypeId: 'roadmap'
        });

        this.bounds = new google.maps.LatLngBounds();

        this.trackdata = {};

        for (var i = 0; i < this.APdata.length; i++) {
            if ((typeof this.APdata[i]["lat"] == 'number') && (typeof this.APdata[i]["lng"] == 'number')) {
                var infoWindow = new google.maps.InfoWindow({
                    content: "<b>" + this.APdata[i]["accessPointName"] + "</b>" +
                        "<hr /><b>Mac adress: </b>" + this.APdata[i]["baseMac"] +
                        "<br /><b>Lat: </b>" + this.APdata[i]["lat"] +
                        "<br /><b>Lng: </b>" + this.APdata[i]["lng"] +
                        "<hr /><b>RSSI: </b>" + this.APdata[i]["rssiThreshold"] +
                        " db"
                });

                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(this.APdata[i]["lat"],
                        this.APdata[i]["lng"]),
                    map: this.map,
                    infowindow: infoWindow,
                    icon: "images/wifi_access_marker.png",
                    title: this.APdata[i]["accessPointName"]
                });

                this.APMarkers.push(marker);

                google.maps.event.addListener(marker, 'click', function () {
                    this.infowindow.open(this.map, this);
                });

                this.bounds.extend(marker.getPosition());
            }

        }
        if ($scope.locationMarkers == false) {
            for (var i = 0; i < this.APMarkers.length; i++) {
                this.APMarkers[i].setVisible(false);
            }
        }

        this.map.fitBounds(this.bounds);

        legend = document.createElement('div');
        legend.index = 1;
        legend.innerHTML = '<div class="gmaps_controls"><img src="images/preloader.gif" width="14"></div>'
        this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(legend);

    }

    $scope.changeOpacity = function (opacitySlider) {
        googleMap.heatmap.set('opacity', opacitySlider);
    }

    $scope.changeRadius = function (radiusSlider) {
        googleMap.heatmap.set('radius', radiusSlider);
    }

});