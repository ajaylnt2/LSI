/*
This controller uses fortinetService to manage fortinent popularity hot spot maps details
*/
angular.module('lsi').controller('fortinentpmappophotspotCtrl', function($scope, fortinetService) {

    $scope.maploader = false;
    $scope.maploaderRow = true;
    $scope.accePointData = [];
    $scope.accessPointPullPush = [];
    $scope.displayMessage = 'Please select a store or floor and a date to determine Popularity Hotspots.';
    $scope.selectedDate = '';
    $scope.dateFormat = 'yyyy-MM-dd, EEEE';
    $scope.changes = {
        "dwelltime": {
            "total": [],
            "average": [],
            "entropy": [],
            "perPerson": []
        },
        "persons": {
            "total": [],
            "average": [],
            "entropy": []
        },
        "traffic": {
            "total": [],
            "average": [],
            "entropy": [],
            "perPerson": []
        }
    };

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

    $scope.loadTree = function() {
        fortinetService.getFortinentTree().then(function(response) {
                if (response.data) {
                    response = response.data;
                    $scope.storeInst = $scope.getObject(response);
                    $scope.getSelectedId($scope.storeInst[0].id, 'Store');
                    if (response.status != "failure") {
                        $scope.treeList = response.data;
                        $scope.dynamicBranches = $scope.treeList.branchs;
                    }

                    fortinetService.getAccessPointDetails().then(function(response) {
                            if (response.data) {
                                response = response.data;
                                if (response.infrastructure.length > 0) {
                                    $scope.accessPointPullPush = response.infrastructure;
                                } else if (response.push.length > 0) {
                                    $scope.accessPointPullPush = response.push;
                                } else if (response.pull.length > 0) {
                                    $scope.accessPointPullPush = response.pull;
                                }
                            }
                        },
                        function(error) {
                            alert("Error retrieving API data, " + error.statusText);
                        });
                }
            },
            function(error) {
                alert("Error retrieving API data, " + error.statusText);
            });
    };
    $scope.loadTree();

    $scope.branchStatus = [], $scope.storeStatus = [], $scope.floorStatus = [];
    $scope.captureRateData = {}, $scope.type = '';

    // function to get selected id 
    $scope.getSelectedId = function(selectedId, selectedName) {
        $scope.type = selectedName.toUpperCase();
        switch (selectedName) {
            case 'Branch':
                {
                    $scope.branchStatus = [];
                    $scope.branchStatus.push(selectedId);
                    $scope.storeStatus = [];
                    $scope.floorStatus = [];
                    $scope.onlyArea = false;
                    $scope.displayMessage = 'Please select a store or floor and a date to determine Popularity Hotspots.';
                    break;
                }
            case 'Floor':
                {
                    $scope.$watch('selectedDate', function() {
                        if ($scope.selectedDate == '' || $scope.selectedDate == null) {
                            $scope.displayMessage = 'Please select a store or floor and a date to determine Popularity Hotspots.';
                        } else {
                            $scope.floorStatus = [];
                            $scope.floorStatus.push(selectedId);
                            $scope.branchStatus = [];
                            $scope.storeStatus = [];
                            $scope.onlyArea = false;
                            $scope.accePointData = [];
                            $scope.displayMessage = 'Fetching Observations. Please wait.';
                            $scope.maploader = true;
                            $scope.maploaderRow = true;
                            $scope.sDate = moment($scope.selectedDate).format('YYYY-MM-DD');
                            $scope.sDay = moment($scope.selectedDate).format('dddd') + 's';
                            $scope.selDate = (moment.utc($scope.sDate, 'YYYY-MM-DD').startOf('day').format('x')) * 1000; // date in milliseconds

                            $scope.resPullPush = $scope.accessPointPullPush;

                            var accePointDataPullPush = [];

                            for (var i = 0; i < $scope.resPullPush.length; i++) {
                                if ($scope.resPullPush[i].floor != null && $scope.resPullPush[i].floor.id == selectedId) {
                                    accePointDataPullPush.push($scope.resPullPush[i]);
                                }
                            }
                            angular.forEach(accePointDataPullPush, function(val) {
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
                            $scope.kpiChangeValue();
                        }
                    });

                    break;
                }
            case 'Store':
                {
                    $scope.$watch('selectedDate', function() {
                        if ($scope.selectedDate == '' || $scope.selectedDate == null) {
                            $scope.displayMessage = 'Please select a store or floor and a date to determine Popularity Hotspots.';
                        } else {
                            $scope.storeStatus = [];
                            $scope.storeStatus.push(selectedId);
                            $scope.branchStatus = [];
                            $scope.floorStatus = [];
                            $scope.onlyArea = false;
                            $scope.accePointData = [];
                            $scope.displayMessage = 'Fetching Observations. Please wait.';
                            $scope.maploader = true;
                            $scope.maploaderRow = true;
                            $scope.sDate = moment($scope.selectedDate).format('YYYY-MM-DD');
                            $scope.sDay = moment($scope.selectedDate).format('dddd') + 's';
                            $scope.selDate = (moment.utc($scope.sDate, 'YYYY-MM-DD').startOf('day').format('x')) * 1000; // date in milliseconds

                            $scope.resPullPush = $scope.accessPointPullPush;
                            var accePointDataPullPush = [];

                            for (var i = 0; i < $scope.resPullPush.length; i++) {
                                if ($scope.resPullPush[i].store != null && $scope.resPullPush[i].store.id == selectedId) {
                                    accePointDataPullPush.push($scope.resPullPush[i]);
                                }
                            }
                            angular.forEach(accePointDataPullPush, function(val) {
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
                            $scope.kpiChangeValue();
                        }
                    });

                    break;
                }
            default:
                {
                    $scope.displayMessage = 'Please select a store or floor and a date to determine Popularity Hotspots.';
                }
        }
    };

    //function to formate the time 
    function getFormattedTime(timestampInMicroseconds) {
        if (timestampInMicroseconds == null)
            return "";

        var dateString = parseFloat(timestampInMicroseconds);
        var date = new Date(dateString);

        var timeInMinutes = date / 1000 / 1000 / 60;
        var timeInHours = timeInMinutes / 60;
        var timeInDays = timeInHours / 24;

        timeInMinutes = Math.floor(timeInMinutes) % 60;
        timeInHours = Math.floor(timeInHours) % 24;
        timeInDays = Math.floor(timeInDays);

        var totalTimeString = "";

        if (timeInDays != 0)
            totalTimeString += timeInDays + " d ";

        if (timeInHours != 0)
            totalTimeString += timeInHours + " h ";

        if (timeInDays == 0) {
            totalTimeString += timeInMinutes + " min ";
        }

        return totalTimeString;
    }

    //function to round of the decimal points
    function round(float, digits) {
        return Math.round(float * Math.pow(10, digits)) / (Math.pow(10, digits));
    }

    //function to get average sume of last 3 weeks data
    function getSumAverageOfArray(array) {
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }
        var length = (array.length != 0) ? array.length : 1;
        return sum / length;
    }

    //function to calculate change
    function getPercentualChange(oldValue, newValue) {
        var safeDivision = (oldValue != 0) ? oldValue : 100;
        return 100 * (newValue - oldValue) / safeDivision;
    }

    //function to styles for percentage change
    function stylePercentualChange(value) {
        var arrowIncreasing = "<span> &#8599;</span>";
        var arrowNeutral = "<span> &rarr;</span>";
        var arrowDecreasing = "<span> &#8600;</span>";

        if (value > 0)
            return "<span class='per-increasing'><b>" + arrowIncreasing + " +" + round(value, 1) + " % </b>* </span>";

        if (value == 0)
            return "<span class='per-neutral'><b>" + arrowNeutral + " +/-" + round(value, 1) + " % </b>* </span>";
        else
            return "<span class='per-decreasing'><b>" + arrowDecreasing + " " + round(value, 1) + " % </b>* </span>";

    }

    // function to get change value for tast 3 weeks
    $scope.kpiChangeValue = function() {

        var microsecondsPerDay = (24 * 60 * 60 * 1000 * 1000);

        var dateForWeek1 = $scope.selDate - (7 * microsecondsPerDay);
        var dateForWeek2 = $scope.selDate - (14 * microsecondsPerDay);
        var dateForWeek3 = $scope.selDate - (21 * microsecondsPerDay);

        var lastWeeksDate = [dateForWeek1, dateForWeek2, dateForWeek3];

        angular.forEach($scope.changes, function(kindOfMap, key) {
            angular.forEach(kindOfMap, function(array, kpi) {
                $scope.changes[key][kpi] = [];
            });
        });

        for (var i = 0; i < lastWeeksDate.length; i++) {
            var lwd = lastWeeksDate[i]
            fortinetService.getPopularityHotspotKPI($scope.accePointData, lwd).then(function(response) {
                    if (response.data) {
                        response = response.data;
                        $scope.lastWeeksDateValues = response;
                        var totalDwelltime = 0;
                        var totalPersons = 0;
                        var totalTraffic = 0;
                        var dwelltimePerLocation;
                        var personsPerLocation;
                        var trafficPerLocation;
                        var dwelltimePerPerson;
                        var trafficPerPerson;
                        var dwelltimeEntropy = 0;
                        var personsEntropy = 0;
                        var trafficEntropy = 0;

                        if ($scope.lastWeeksDateValues.dwelltime.length > 0) {
                            angular.forEach($scope.lastWeeksDateValues.dwelltime, function(value) {
                                var dwellTimePerLocation = value.weight;

                                if (dwellTimePerLocation > 0) {
                                    totalDwelltime += dwellTimePerLocation;
                                }
                            });

                            dwelltimePerLocation = totalDwelltime / $scope.lastWeeksDateValues.dwelltime.length;

                            if (dwelltimePerLocation == undefined || dwelltimePerLocation == null ){
                                dwelltimePerLocation = 0;
                            }
                            angular.forEach($scope.lastWeeksDateValues.dwelltime, function(value) {
                                var dwellTimePerLocation = value.weight;
                                var pDwelltime = dwellTimePerLocation / totalDwelltime;
                                dwelltimeEntropy += (pDwelltime * -(Math.log(pDwelltime) / Math
                                    .log(2)));
                            });

                            $scope.changes.dwelltime.total.push(totalDwelltime);
                            $scope.changes.dwelltime.average.push(dwelltimePerLocation);
                            $scope.changes.dwelltime.entropy.push(dwelltimeEntropy);
                        }

                        if (($scope.lastWeeksDateValues.persons.length > 0) && ($scope.lastWeeksDateValues.additionalKpi.length > 0)) {

                            angular.forEach($scope.lastWeeksDateValues.persons, function(value) {
                                var personsForThisLocation = value.weight;

                                totalPersons += personsForThisLocation;
                            });

                            personsPerLocation = totalPersons / $scope.lastWeeksDateValues.persons.length;
                            if (personsPerLocation == null || personsPerLocation == undefined ){
                                personsPerLocation = 0;
                            }
                            angular.forEach($scope.lastWeeksDateValues.persons, function(value) {
                                var personsPerLocation = value.weight;
                                if (personsPerLocation == null || personsPerLocation == undefined ){
                                    personsPerLocation = 0;
                                }
                                var pPersons = personsPerLocation / totalPersons;
                                personsEntropy += (pPersons * -(Math.log(pPersons) / Math
                                    .log(2)));
                            });

                            dwelltimePerPerson = totalDwelltime / totalPersons;

                            $scope.changes.persons.total.push(totalPersons);
                            $scope.changes.persons.average.push(personsPerLocation);
                            $scope.changes.persons.entropy.push(personsEntropy);
                            $scope.changes.dwelltime.perPerson.push(dwelltimePerPerson);
                        }

                        if ($scope.lastWeeksDateValues.traffic.length > 0) {

                            angular.forEach($scope.lastWeeksDateValues.traffic, function(value) {
                                var trafficPerLocation = value.weight;                                

                                if (trafficPerLocation > 0) {
                                    totalTraffic += trafficPerLocation;
                                }
                            });

                            trafficPerLocation = totalTraffic / $scope.lastWeeksDateValues.traffic.length;

                            angular.forEach($scope.lastWeeksDateValues.traffic, function(value) {
                                var trafficPerLocation = value.weight;
                                var pTraffic = trafficPerLocation / totalTraffic;
                                trafficEntropy += (pTraffic * -(Math.log(pTraffic) / Math
                                    .log(2)));
                            });

                            trafficPerPerson = totalTraffic / totalPersons;

                            $scope.changes.traffic.total.push(totalTraffic);
                            $scope.changes.traffic.average.push(trafficPerLocation);
                            $scope.changes.traffic.entropy.push(trafficEntropy);
                            $scope.changes.traffic.perPerson.push(trafficPerPerson);
                        }
                    }
                },
                function(error) {
                    alert("Error retrieving API data, " + error.statusText);
                });
        }
        setTimeout(function() {
            $scope.popularityHotspotKPI();
        }, 3000);

    }


    $scope.popularityHotspotKPI = function() {
        var totalDwelltime = 0;
        var totalPersons = 0;
        var totalTraffic = 0;
        var dwelltimePerLocation;
        var personsPerLocation;
        var trafficPerLocation;
        var dwelltimePerPerson;
        var trafficPerPerson;
        var dwelltimeEntropy = 0;
        var personsEntropy = 0;
        var trafficEntropy = 0;


        fortinetService.getPopularityHotspotKPI($scope.accePointData, $scope.selDate).then(function(response) {
                if (response.data) {
                    response = response.data;
                    $scope.popularityHotspotValues = response;
                    $scope.maploader = false;
                    $scope.maploaderRow = false;

                    if ($scope.storeStatus.length == 0 && $scope.floorStatus.length == 0) {
                        $scope.displayMessage = 'Please select a store or floor and a date to determine Popularity Hotspots.';
                    } else {
                        $scope.displayMessage = '';
                    }


                    if ($scope.popularityHotspotValues.dwelltime.length > 0) {

                        angular.forEach($scope.popularityHotspotValues.dwelltime, function(value) {
                            var dwellTimePerLocation = value.weight;

                            if (dwellTimePerLocation > 0) {
                                totalDwelltime += dwellTimePerLocation;
                            }

                            dwelltimePerLocation = totalDwelltime / $scope.popularityHotspotValues.dwelltime.length;
                        });

                        angular.forEach($scope.popularityHotspotValues.dwelltime, function(value) {
                            var dwellTimePerLocation = value.weight;
                            var pDwelltime = dwellTimePerLocation / totalDwelltime;
                            dwelltimeEntropy += (pDwelltime * -(Math.log(pDwelltime) / Math.log(2)));
                        });

                    }

                    $scope.totalDwelltime = getFormattedTime(totalDwelltime);
                    $scope.totalDwelltimeValue = totalDwelltime;
                    if(dwelltimePerLocation == undefined || dwelltimePerLocation == null){
                        dwelltimePerLocation =0;
                    }
                    $scope.dwelltimePerLocation = getFormattedTime(dwelltimePerLocation);
                    
                    $scope.averageDwelltimeValue = dwelltimePerLocation;
                    $scope.dwelltimeEntropy = round(dwelltimeEntropy, 2);


                    if (($scope.popularityHotspotValues.persons.length > 0) && ($scope.popularityHotspotValues.additionalKpi.length > 0)) {

                        angular.forEach($scope.popularityHotspotValues.persons, function(value) {
                            var personsForThisLocation = value.weight;

                            totalPersons += personsForThisLocation;
                        });

                        personsPerLocation = totalPersons / $scope.popularityHotspotValues.persons.length;
                        
                        angular.forEach($scope.popularityHotspotValues.persons, function(value) {
                            var personsPerLocation = value.weight;
                            var pPersons = personsPerLocation / totalPersons;
                            personsEntropy += (pPersons * -(Math.log(pPersons) / Math.log(2)));
                        });


                        dwelltimePerPerson = totalDwelltime / totalPersons;
                    }
                    if (personsPerLocation == null || personsPerLocation == undefined ){
                        personsPerLocation = 0;
                    }
                    if (dwelltimePerPerson == null || dwelltimePerPerson == undefined ){
                        dwelltimePerPerson = 0;
                    }

                    $scope.dwelltimePerPerson = getFormattedTime(dwelltimePerPerson);
                    $scope.dwelltimePerPersonValue = dwelltimePerPerson;
                    $scope.totalPersons = totalPersons;
                    $scope.personsPerLocation = round(personsPerLocation, 1);
                    $scope.personsEntropy = round(personsEntropy, 2);


                    if ($scope.popularityHotspotValues.traffic.length > 0) {

                        angular.forEach($scope.popularityHotspotValues.traffic, function(value) {
                            var trafficPerLocation = value.weight;

                            if (trafficPerLocation > 0) {
                                totalTraffic += trafficPerLocation;
                            }
                        });

                        trafficPerLocation = totalTraffic / $scope.popularityHotspotValues.traffic.length;

                        angular.forEach($scope.popularityHotspotValues.traffic, function(value) {
                            var trafficPerLocation = value.weight;
                            var pTraffic = trafficPerLocation / totalTraffic;
                            trafficEntropy += (pTraffic * -(Math.log(pTraffic) / Math
                                .log(2)));
                        });

                        trafficPerPerson = totalTraffic / totalPersons;
                    }
                    if (trafficPerLocation == null || trafficPerLocation == undefined ){
                        trafficPerLocation = 0;
                    }
                    if (trafficPerPerson == null || trafficPerPerson == undefined ){
                        trafficPerPerson = 0;
                    }

                    $scope.totalTraffic = totalTraffic;
                    $scope.trafficPerLocation = round(trafficPerLocation, 1);
                    $scope.trafficPerPerson = round(trafficPerPerson, 1);
                    $scope.trafficEntropy = round(trafficEntropy, 2);

                    var totalDwelltimeChangeValue = round(getPercentualChange(getSumAverageOfArray($scope.changes.dwelltime.total), $scope.totalDwelltimeValue), 1);
                    var totalPersonsChangeValue = round(getPercentualChange(getSumAverageOfArray($scope.changes.persons.total), $scope.totalPersons), 1);
                    var totalTrafficChangeValue = round(getPercentualChange(getSumAverageOfArray($scope.changes.traffic.total), $scope.totalTraffic), 1);

                    var averageDwelltimeChangeValue = round(getPercentualChange(getSumAverageOfArray($scope.changes.dwelltime.average), $scope.averageDwelltimeValue), 1);
                    var averagePersonsChangeValue = round(getPercentualChange(getSumAverageOfArray($scope.changes.persons.average), $scope.personsPerLocation), 1);
                    var averageTrafficChangeValue = round(getPercentualChange(getSumAverageOfArray($scope.changes.traffic.average), $scope.trafficPerLocation), 1);

                    var personDwelltimeChangeValue = round(getPercentualChange(getSumAverageOfArray($scope.changes.dwelltime.perPerson), $scope.dwelltimePerPersonValue), 1);
                    var personTrafficChangeValue = round(getPercentualChange(getSumAverageOfArray($scope.changes.traffic.perPerson), $scope.trafficPerPerson), 1);

                    var entropyDwelltimeChangeValue = round(getPercentualChange(getSumAverageOfArray($scope.changes.dwelltime.entropy), $scope.dwelltimeEntropy), 1);
                    var entropyPersonsChangeValue = round(getPercentualChange(getSumAverageOfArray($scope.changes.persons.entropy), $scope.personsEntropy), 1);
                    var entropyTrafficChangeValue = round(getPercentualChange(getSumAverageOfArray($scope.changes.traffic.entropy), $scope.trafficEntropy), 1);

                    $scope.totalDwelltimeChange = stylePercentualChange(totalDwelltimeChangeValue);
                    $scope.totalPersonsChange = stylePercentualChange(totalPersonsChangeValue);
                    $scope.totalTrafficChange = stylePercentualChange(totalTrafficChangeValue);

                    $scope.averageDwelltimeChange = stylePercentualChange(averageDwelltimeChangeValue);
                    $scope.averagePersonsChange = stylePercentualChange(averagePersonsChangeValue);
                    $scope.averageTrafficChange = stylePercentualChange(averageTrafficChangeValue);

                    $scope.personDwelltimeChange = stylePercentualChange(personDwelltimeChangeValue);
                    $scope.personTrafficChange = stylePercentualChange(personTrafficChangeValue);

                    $scope.entropyDwelltimeChange = stylePercentualChange(entropyDwelltimeChangeValue);
                    $scope.entropyPersonsChange = stylePercentualChange(entropyPersonsChangeValue);
                    $scope.entropyTrafficChange = stylePercentualChange(entropyTrafficChangeValue);
                }
            },
            function(error) {
                alert("Error retrieving API data, " + error.statusText);
            });

    }

});