angular.module('lsi').controller('fortinentrealcalibrationCtrl', function($scope, fortinetService, $interval, $timeout) {

    $scope.calibTableChart = false;
    $scope.realtimePanel = false;
    $scope.forAccessPoints = false;
    $scope.realtimeData = [];
    $scope.realtimeV;
    $scope.fixedEquipment;
    $scope.pageOptions = [10,20,30];
    $scope.viewby = 10;
    $scope.branches = [],
    $scope.childBranches = [],
    $scope.stores = [];
    $scope.cntVisitors = 0;
    $scope.cntEmployee = 0;
    $scope.mapLoaded = false;
    $scope.obsEmpEquChart = false;
    $scope.sortType     = 'RSSI'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order     
    $scope.currentPage = 1;
    $scope.itemsPerPage = $scope.viewby;
    $scope.maxSize = 3;
    $scope.play = true;
    $scope.pause = false;
    var pull;

    $scope.setItemsPerPage = function(num) {
        $scope.itemsPerPage = num;
        $scope.currentPage = 1; //reset to first page
    }

    // rssi slider options
    $scope.slider = {
        value: -70,
        options: {
            id: 'slider-id',
            floor: -100,
            ceil: 0,
            step: 1,
            onEnd: function(id, value) { // triggers when value changed in the slider
                $scope.realtimeData =$scope.setRSSI($scope.realtimeV, value);
                if($scope.type == 'AccessPoint'){
                    $scope.drawRSSICircles(value);
                }
            },
            translate: function (value) {
                return value +'db';
            }
        }
    };

    // function to load tree with respect to the account
    $scope.loadTree = function() {
        fortinetService.getFortinentTree(function(response) {
            $scope.storeInst = $scope.getObject(response);
            $scope.getSelectedId($scope.storeInst[0].id, 'Store', $scope.storeInst[0]);
            if (response.status != "failure") {
                $scope.treeList = response.data;
                $scope.dynamicBranches = $scope.treeList.branchs;
            }
        });

        // service to get employee and fixed equipment details
        fortinetService.getEmpFixedEqu(function(response) {
            $scope.fixedEquData = response;
            $scope.fixedEquipment = {};
            angular.forEach($scope.fixedEquData.rows, function (val) { 
                $scope.fixedEquipment[val["Mac"]] = "";
            });
        });
        
    };

    $scope.branchStatus = [], $scope.storeStatus = [], $scope.floorStatus = [], $scope.accessPtStatus = [];
    $scope.captureRateData = {}, $scope.type = '';

    $scope.loadTree();

    // function to get tree selected id, name and it's data 
    $scope.getSelectedId = function(selectedId, selectedName, fullData) {
        $scope.type = selectedName;

        switch (selectedName) {
            case 'Branch':
                {
                    $scope.branchStatus = [];
                    $scope.branchStatus.push(selectedId);
                    $scope.storeStatus = [];
                    $scope.floorStatus = [];
                    $scope.accessPtStatus = [];
                    $scope.forAccessPoints = false;
                    $scope.realtimePanel = true;
                    $scope.obsEmpEquChart = true;
                    $scope.play = true;
                    $scope.pause = false;
                    $interval.cancel(pull);
                    $scope.branchStoreId = fullData.stores[0].id;
                    fortinetService.getAccessPointStore($scope.branchStoreId, function(response) {
                        $scope.loadGoogleMap(response);
                    });
                    $scope.playPauseBtn('play');
                    break;
                }
            case 'Floor':
                {
                    $scope.floorStatus = [];
                    $scope.floorStatus.push(selectedId);
                    $scope.branchStatus = [];
                    $scope.storeStatus = [];
                    $scope.accessPtStatus = [];
                    $scope.forAccessPoints = false;
                    $scope.realtimePanel = true;
                    $scope.obsEmpEquChart = true;
                    $scope.play = true;
                    $scope.pause = false;
                    $interval.cancel(pull);
                    fortinetService.getAccessPointFloor(selectedId, function(response) {
                        $scope.loadGoogleMap(response);
                    });
                    $scope.playPauseBtn('play');
                    break;
                }
            case 'Store':
                {
                    $scope.storeStatus = [];
                    $scope.storeStatus.push(selectedId);
                    $scope.branchStatus = [];
                    $scope.floorStatus = [];
                    $scope.accessPtStatus = [];
                    $scope.forAccessPoints = false;
                    $scope.realtimePanel = true;
                    $scope.obsEmpEquChart = true;
                    $scope.play = true;
                    $scope.pause = false;
                    $interval.cancel(pull);
                    fortinetService.getAccessPointStore(selectedId, function(response) {
                        $scope.loadGoogleMap(response);
                    });
                    $scope.playPauseBtn('play');
                    break;
                }
            case 'AccessPoint':
                {
                    $scope.accessPtStatus = [];
                    $scope.accessPtStatus.push(selectedId);
                    $scope.branchStatus = [];
                    $scope.storeStatus = [];
                    $scope.floorStatus = [];
                    $scope.forAccessPoints = true;
                    $scope.realtimePanel = true;
                    $scope.obsEmpEqu = false;
                    $scope.obsEmpEquChart = false;
                    $scope.play = true;
                    $scope.pause = false;
                    $scope.dataForAP = {};
                    $interval.cancel(pull);
                    $scope.loadGoogleMap([fullData]);
                    $scope.rssiValueAP(selectedId);
                    
                    $scope.drawRSSICircles($scope.slider.value);
                    fortinetService.getStdDevAvgRssi(selectedId, function(response) {                              
                        $scope.avgRSSIvsCount = response;
                        $scope.obsEmpEquChart = true;
                        if($scope.isAllZeros($scope.avgRSSIvsCount[0]["data"]) == false) {
                            $scope.obsEmpEqu = true;
                            dataEquipment = $scope.groupVals (2, $scope.avgRSSIvsCount[0]["data"])                            
                            var rec_val = $scope.recommendRSSI(dataEquipment)                            
                            var chartObject = $scope.makeChartAP(2, dataEquipment, rec_val);
                            $scope.personCalibrationAPChart = chartObject;
                        }                                          
                    });
                    $scope.playPauseBtn('play');
                    $scope.setNewRSSI = function (rssi){
                        $scope.dataForAP = {"id":selectedId,"name":fullData.name,"rssiThreshold":rssi,"serialNumber":fullData.serialNumber,"baseMac":fullData.baseMac,"ssid":fullData.ssid,"lat":fullData.lat,"lng":fullData.lng,"useForLocalization":fullData.useForLocalization,"central":fullData.central,"writePermission":true};
                        fortinetService.updateRSSIAP($scope.dataForAP, function(response) { 
                            console.log('rssi updated in db');
                        });
                    }                    
                    break;
                }
            default:
                {
                    $scope.accessPtStatus = [];
                    $scope.branchStatus = [];
                    $scope.storeStatus = [];
                    $scope.floorStatus = [];
                }

        }
    };


    //////////////////////////////

    // get rssiThreshold value for AP
    $scope.rssiValueAP = function (selectedId){
        fortinetService.getAccessPointDetails(function(response) {
            $scope.accessPointData = response.push;
            for(var i=0; i<$scope.accessPointData.length;i++){  
            if ($scope.accessPointData[i].id == selectedId) {
                    $scope.slider.value = $scope.accessPointData[i].rssiThreshold;
                }
            }
        });
    }

    //$scope.realtimeMacs = [{"mac":"00:0c:e6:1c:2d:ad"},{"mac":"00:0c:e6:32:75:f0"},{"mac":"00:0c:e6:32:75:56"},{"mac":"00:0c:e6:32:75:fe"},{"mac":"00:0c:e6:32:75:a8"},{"mac":"00:0c:e6:30:1d:68"},{"mac":"00:0c:e6:30:1d:32"},{"mac":"00:0c:e6:20:25:af"},{"mac":"00:0c:e6:20:25:01"}]
    $scope.realtimeMacs = [{"mac":"08:5b:0e:f1:ac:8d"},{"mac":"08:5b:0e:f1:ac:85"},{"mac":"90:6c:ac:20:1f:4a"},{"mac":"90:6c:ac:20:21:66"},{"mac":"90:6c:ac:20:20:1c"},{"mac":"90:6c:ac:20:2b:5c"},{"mac":"08:5b:0e:e5:fc:bf"},{"mac":"08:5b:0e:e5:fc:b7"}];
    // Observations from employees and equipment
    // for access point AP Mid Canopy = 
    // $scope.realtimeMacs = [{"mac":"08:5b:0e:f1:ac:8d"},{"mac":"08:5b:0e:f1:ac:85"}];

    // function to call realtime API and to display table and chart for it
    $scope.realtimeValue = function (){ 
        $scope.calibTableChart = false;        
        fortinetService.getRealTime($scope.realtimeMacs, function(response) {
            $scope.realtimeV = response.rows;  
            var defaultRSSI = $scope.slider.value;
            $scope.realtimeData = $scope.setRSSI($scope.realtimeV, defaultRSSI);              
            $scope.chartCleintCount();               
        });
    }

    
    // function to call realtime API in time intervals
    // toggle play pause button function
    $scope.playPauseBtn = function(button) {
        if (button === 'play') {
            $scope.play = true;
            $scope.pause = false;
            console.log('pressed play');
            $scope.realtimeValue();
            $scope.callAtTimeout = function(){
                console.log('time interval');
                $scope.realtimeValue();
            }
            pull = $interval(function(){ $scope.callAtTimeout(); }, 60000);
            $timeout(function () {console.log("interval cleared");$interval.cancel(pull);}, 300000);
        } else if (button === 'pause') {
            $scope.play = false;
            $scope.pause = true;
            console.log('pressed pause');
            $interval.cancel(pull);
        }
    };

    // kill the $interval when user left the current state or controller
    $scope.$on('$destroy', function(){
         $interval.cancel(pull);
    });
    
    
    // function to pass RSSI value and to get filterd values
    $scope.setRSSI = function(obj, rssi){
        var arrayObj =[]; 
        var deviceType;
        $scope.cntVisitors = 0;
        $scope.cntEmployee = 0;
        for(var i=0; i<obj.length;i++){           

            if(rssi <= obj[i].RSSI){
                if (obj[i]['Visitor MAC'] in $scope.fixedEquipment) {
                    deviceType = "fixedEquipment";
                    $scope.cntEmployee++;
                } else {
                    deviceType = "visitor";
                    $scope.cntVisitors++;
                }
                var cStart = obj[i]['Connection Start']; 
                var cEnd = obj[i]['Connection End']; 
                arrayObj.push({                    
                    'birthday': obj[i].birthday,
                    'email': obj[i].email,
                    'name': obj[i].name,
                    'phone': obj[i].phoneNumber,
                    'ap_serial': obj[i]['AP serial'],
                    'ap_mac': obj[i]['Access Point MAC'],
                    'visitor_mac': obj[i]['Visitor MAC'],
                    'c_start': moment.utc(cStart, 'x').format("YYYY-MM-DD HH:mm:ss"),
                    'c_end': moment.utc(cEnd, 'x').format("YYYY-MM-DD HH:mm:ss"),
                    'RSSI': obj[i].RSSI,
                    'deviceType':deviceType,
                });
            }            
        }

        $scope.totalItems = arrayObj.length;
        return arrayObj;
    }

    // function to group the response values 
    $scope.groupVals = function (scale, response) {
        res_data = [];
        for (var i = 0; i < response.length; i+=scale) {
            res_data.push(response[i]);
        };
        return res_data;
    }
     // function to find all value are zreo or not 
    $scope.isAllZeros = function (response) {
        var allZeros = true;
        for (var i = 0, len = response.length; i < len; i++) {
            if (response[i][1] != 0) {
                allZeros = false;
                break;
            }
        }
        return allZeros;
    } 

    // function to display column chart for the clients grouped by RSSI values
    $scope.chartCleintCount = function() {
        $scope.calibTableChart = true;
        $scope.personCalibrationChart = {
            chart: {
                type: 'column',
                zoomType : 'x'
            },
            title: {
                text: ''
            },
            yAxis : {
                title : {
                    text : 'Number of clients'
                }
            },
            xAxis : {
                title : {
                    text : 'Average RSSI[db]'
                },
                startOnTick : true,
                step : 5,
                startOnTick : true,
                endOnTick : true,
                tickInterval : 5
            },
            plotOptions : {
                column : {
                    stacking : 'normal',
                    pointPadding : 0,
                    borderWidth : 1,
                    groupPadding : 0,
                    pointPlacement : -0.5
                }
            },
            tooltip : {
                formatter : function() {
                    return 'RSSI = ' + Highcharts.numberFormat(this.x, 0) + '<br/>' + 'Number of clients  = ' + Highcharts.numberFormat(this.y, 0);
                }
            },            
            series : [ {
                name : 'Visitors',
                data : $scope.sortData($scope.finalvalues($scope.dataForChart(5, $scope.realtimeData)[0])),
                pointRange : 5
            }, {
                name : 'Employee & Fixed Equipment',
                data : $scope.sortData($scope.finalvalues($scope.dataForChart(5, $scope.realtimeData)[1])),
                pointRange : 5
            } ]

        }
    };

    // function to display column chart for Observations from employees and equipment
    $scope.makeChartAP = function(step, data_resp, rval) {
        var chartingOptions = {
            chart : {
                type : 'column',
                zoomType : 'x',
                renderTo : 'distrstddev'
            },
            plotOptions : {
                column : {
                    stacking : 'normal',
                    pointPadding : 0,
                    borderWidth : 1,
                    groupPadding : 0,
                    pointPlacement : -0.5
                }
            },
            legend: {
                enabled: false
            },
            tooltip : {
                formatter : function() {
                    return 'RSSI = ' + Highcharts.numberFormat(this.x, 0) + '<br/>'
                            + 'Number of observations  = '
                            + Highcharts.numberFormat(this.y, 0);
                }
            },
            title : {
                text: ''
            },
            yAxis : {
                title : {
                    text : 'Number of observations'
                }
            },
            xAxis : {
                title : {
                    text : 'RSSI[db]'
                },
                startOnTick : true,
                step : step,
                startOnTick : true,
                endOnTick : true,
                tickInterval : step,
                min: -100,
                max: 0
            },
            series : [ {
                name : 'Employee & Fixed Equipment',
                data : data_resp,
                pointRange : step
            } ]
        }
        if (typeof(rval) == "number"){
            chartingOptions["xAxis"]["plotLines"] = [{
                value: rval,
                color: 'green',
                dashStyle: 'shortdash',
                width: 1,
                label: {
                    text: 'Recommended value'
                }
            }]
        }

        return chartingOptions;
    }


    $scope.dataForChart = function(step, data) {
        var resRssi = [], resFixedEquip = [];
        var rssi = [];
        var fixedEquipRssi = [];

        for (var j = 0; j < data.length; j++) {

            if ($scope.fixedEquipment != null && data[j].visitor_mac in $scope.fixedEquipment) {
                fixedEquipRssi.push(parseInt(data[j].RSSI));
            } else {
                rssi.push(parseInt(data[j].RSSI));
            }
            
        }

        /* --- create array of final data ------- */

        var resultRssi = $scope.buildData(rssi, -100, 0, step);
        var resultFixedEquip = $scope.buildData(fixedEquipRssi, -100, 0, step);

        for (var i = 0; i < resultRssi[0].length; i++) {
            resRssi.push({
                x : resultRssi[0][i],
                y : resultRssi[1][i]
            });
        }
        for (var i = 0; i < resultFixedEquip[0].length; i++) {
            resFixedEquip.push({
                x : resultFixedEquip[0][i],
                y : resultFixedEquip[1][i]
            });
        }
        return [ resRssi, resFixedEquip ];
    };

    // function to get final values to to display chart
    $scope.finalvalues = function(data) {
        var finalRes = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i]['y'] != 0) {
                finalRes.push(data[i]);
            }
        }
        return finalRes;
    };

    // function sort chart series data in x axis
    $scope.sortData = function(a) {
        var swapped;
        do {
            swapped = false;
            for (var i = 0; i < a.length - 1; i++) {
                if (a[i].x > a[i + 1].x) {
                    var temp = a[i].x;
                    a[i].x = a[i + 1].x;
                    a[i + 1].x = temp;
                    swapped = true;
                }
            }
        } while (swapped);
        return a;
    };

    // function get final data for the fixed equipments 
    $scope.buildData = function (arrayObjects, min, max, step) {
        var ranges = [];
        for (var i = min; i <= max; i += step) {
            ranges.push(i);
        };
        counter = new Array(ranges.length + 1).join('0').split('').map(parseFloat);
        for (var i = 0; i < arrayObjects.length; i++) {
            for (var j = 0; j < ranges.length; j++) {
                if (j != (ranges.length - 1)) {
                    k = j + 1;
                    if ((arrayObjects[i] > ranges[j])
                            && (arrayObjects[i] <= ranges[k])) {
                        counter[k]++;
                    };
                };
            };
        };
        return [ ranges, counter ];
    }

    
    // function to get Recommended rssi value in the chart
    $scope.recommendRSSI = function(data) {
        var recommended_rssi;
        var intervals = [];
        var up_bool = false, down_bool = false;
        var peak_cnt = 0;
        for (var i = data.length - 1; i > 0; i--) {
            var j = i - 1;
            if (down_bool && (data[j][1] > data[i][1])) {
                up_bool = true, down_bool = false;
                peak_cnt = peak_cnt + 1;
                intervals[peak_cnt] = [];
                intervals[peak_cnt].push(data[j]);
            }
            else if (data[j][1] > data[i][1]) {
                up_bool = true;
                if (up_bool && (intervals[peak_cnt] == undefined)) {intervals[peak_cnt] = []};
                intervals[peak_cnt].push(data[j]);
            };
            if (data[j][1] < data[i][1]) {
                intervals[peak_cnt].push(data[j]);
                down_bool = true;
            };
        };

        res = []
        for (var i = 0, len = intervals.length; i < len; i++) {
            var peak = intervals[i][0];
            for (var j = 0; j < intervals[i].length; j++) {
                if (intervals[i][j][1] > peak[1]) {peak = intervals[i][j]};
            };
            var left = intervals[i][0], right = intervals[i][intervals[i].length - 1];
            var up_count_obs;
            if(i == 0) {
                up_count_obs = 0
                } else {
                up_count_obs = (peak[1] - intervals[i-1][intervals[i-1].length - 1][1])/(intervals[i-1][intervals[i-1].length - 1][1]);
            };
            
            res.push({"left": left, "right": right, "length": right[0] - left[0], "peak": peak, "up_length": peak[0] - left[0] + 2, "down_length": right[0] - peak[0], "up_to_prev": up_count_obs});
        };

        if (res.length > 1) {

            var s;
            var up3 = false, down3 = false;
            for (var i = res.length - 1; i >= 0; i--) {
                if (res[i]["up_length"] >= 4) {up3=true};
                if (res[i]["down_length"] >= 4) {down3=true};
                if (up3 == true && down3 == true) {
                    s = i;
                    break;
                };
            }
            if (up3 && down3) {
                if (s != 0) {
                
                min = res[s-1];
                recommended_rssi = min["right"][0];} else {
                    min = res[s];
                    recommended_rssi = min["right"][0];
                    
                }
                
            } else {
                recommended_rssi = "-";
            };
            
        } else {
            recommended_rssi = "-";
            console.log("Cannot recommend rssi");
        };
        return recommended_rssi;
    }

    


    //function to load maps with accesspoints
    $scope.loadGoogleMap = function(data) {
        $scope.accessPointValues = data;
        $scope.mapLoaded = true;
        $scope.markers = [];
        $scope.RSSICircles = [];

        $scope.bounds = new google.maps.LatLngBounds();

        $scope.map = new google.maps.Map(document.getElementById('map-canvas'), {
            zoom: 8,
            mapTypeId: 'roadmap'
        });

        for (var i = 0; i < $scope.accessPointValues.length; i++) {
            var infoWindow = new google.maps.InfoWindow({
                content: "<b>" + (($scope.type == "AccessPoint") ? ($scope.accessPointValues[i]["name"]) : ($scope.accessPointValues[i]["accessPointName"])) + "</b>" +
                    "<hr /><b>Mac adress: </b>" + $scope.accessPointValues[i]["baseMac"] +
                    "<br /><b>Lat: </b>" + $scope.accessPointValues[i]["lat"] +
                    "<br /><b>Lng: </b>" + $scope.accessPointValues[i]["lng"] +
                    "<hr /><b>RSSI: </b>" + $scope.accessPointValues[i]["rssiThreshold"] +
                    " db"
            });
            marker = new google.maps.Marker({
                position: new google.maps.LatLng($scope.accessPointValues[i]["lat"],
                    $scope.accessPointValues[i]["lng"]),
                map: $scope.map,
                infowindow: infoWindow,
                icon: "images/wifi_access_marker.png",
                title: $scope.accessPointValues[i]["accessPointName"]
            });
            $scope.markers.push(marker);

            google.maps.event.addListener(marker, 'click', function() {
                this.infowindow.open($scope.map, this);
            });

            $scope.bounds.extend(marker.getPosition());
        }

        $scope.map.fitBounds($scope.bounds);

        $scope.drawRSSICircles = function(threshold) {
            for (var i = 0; i < $scope.RSSICircles.length; i++) {
                $scope.RSSICircles[i].setMap(null);
            }

            $scope.RSSICircles = [];
            for (var i = 0; i >= threshold; i = i - 5) {
                var radius = (Math.pow(10, ((-(i) - 48 - 20 * 3.389) / (30))) * 1000) / 2;
                var circle = new google.maps.Circle({
                    strokeColor: "#a8b5f7",
                    strokeOpacity: 0.4,
                    strokeWeight: 2,
                    fillColor: "#0000FF",
                    fillOpacity: 0.1,
                    map: $scope.map,
                    center: new google.maps.LatLng($scope.accessPointValues[0]["lat"], $scope.accessPointValues[0]["lng"]),
                    radius: radius
                });
                $scope.RSSICircles.push(circle);
            }
        }

    }

});
