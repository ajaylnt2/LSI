/*
This controller uses fortinetService to manage forninet home page to show capture rate and frequency
*/
angular.module('lsi').controller('fortinenthomeCtrl', function($scope, fortinetService) {

    /*datepicker starts*/
    $scope.fortinetCRDates = {
        startDate: moment().subtract(7, 'day'),
        endDate: moment()
    };
    $scope.fortinetFrqDates = {
        startDate: moment().subtract(90, 'day'),
        endDate: moment()
    };
    /*datepicker ends*/

    $scope.graphVisible = false;
    $scope.tableVisible = false;
    $scope.treeSelectedStatus = true;
    $scope.treeSelectedStatusFreq = true;


    $scope.branches = [], $scope.childBranches = [], $scope.stores = [];
    $scope.loadTree = function() {
        fortinetService.getFortinentTree().then(function(response) {
                if (response.data) {
                    response = response.data;
                    $scope.storeInst = $scope.getObject(response);
                    $scope.getSelectedId($scope.storeInst[0].id, 'Store');
                    $scope.getCaptureRateDetails();
                    $scope.getFrequencyDetails();

                    if (response.status != "failure") {
                        $scope.treeList = response.data;
                        $scope.dynamicBranches = $scope.treeList.branchs;
                    }
                }
            },
            function(error) {
                alert("Error retrieving API data, " + error.statusText);
            });
    };

    $scope.branchStatus = [], $scope.storeStatus = [], $scope.floorStatus = [], $scope.accessPtStatus = [], $scope.areaStatus = [];
    $scope.captureRateData = {}, $scope.type = '';

    $scope.loadTree();


    $scope.getSelectedId = function(selectedId, selectedName) {
        $scope.type = selectedName;

        switch (selectedName) {
            case 'Branch':
                {
                    $scope.branchStatus = [];
                    $scope.branchStatus.push(selectedId);
                    $scope.storeStatus = [];$scope.floorStatus = [];$scope.accessPtStatus = [];$scope.areaStatus = [];
                    break;
                }
            case 'Floor':
                {
                    $scope.floorStatus = [];
                    $scope.floorStatus.push(selectedId);
                    $scope.branchStatus = [];$scope.storeStatus = [];$scope.accessPtStatus = [];$scope.areaStatus = [];
                    break;
                }
            case 'Store':
                {
                    $scope.storeStatus = [];
                    $scope.storeStatus.push(selectedId);
                    $scope.branchStatus = [];$scope.floorStatus = [];$scope.accessPtStatus = [];$scope.areaStatus = [];
                    break;
                }
            case 'AccessPoint':
                {
                    $scope.accessPtStatus = [];
                    $scope.accessPtStatus.push(selectedId);
                    $scope.branchStatus = [];$scope.storeStatus = [];$scope.floorStatus = [];$scope.areaStatus = [];
                    break;
                }
            case 'Area':
                {
                    $scope.areaStatus = [];
                    $scope.areaStatus.push(selectedId);
                    $scope.branchStatus = [];$scope.storeStatus = [];$scope.floorStatus = [];$scope.accessPtStatus = [];
                    break;
                }

        }
    };

    $scope.getCaptureRateDetails = function() {
        $scope.treeSelectedStatus = false;
        $scope.loader = true;

        // time in miliseconds
        var startDate = moment($scope.fortinetCRDates.startDate).utc().startOf('day').format('x');
        var endDate = moment($scope.fortinetCRDates.endDate).utc().endOf('day').format('x');

        startDate = parseInt(startDate) + 1000; // time starts from 00:00:01
        endDate = parseInt(endDate) - 999; // time ends at 23:59:59

        if (startDate == NaN || endDate == NaN) return;


        var dte = ($scope.fDwellTimeEmp) * 3600000;
        var enagedtime = ($scope.fEngagedTime) * 60000;
        var vitedtime = ($scope.fVisitedTime) * 60000;
        var timetomerge = ($scope.fTimeMerge) * 60000;

        var captureData = {
            "branchs": $scope.unique($scope.branchStatus),
            "stores": $scope.unique($scope.storeStatus),
            "flors": $scope.unique($scope.floorStatus),
            "accessPoints": $scope.unique($scope.accessPtStatus),
            "conf": {
                "resolution": "DAY",
                "visitedTimeInMsec": vitedtime,
                "engagedTimeInMsec": enagedtime,
                "timeToMergeInMsec": timetomerge,
                "accessPoints": [],
                "areas": [],
                "startTimeInMsec": parseInt(startDate),
                "endTimeInMsec": parseInt(endDate),
                "filterRandomMacs": $scope.fRandomMacs,
                "filterDeviceOUIs": $scope.fDeviceOUIs,
                "filterFixEquipment": $scope.fFixedEquipment,
                "filterEmployees": $scope.fEmp,
                "dwellTimeOfEmployee": dte,
                "minValOfObsFixEquipment": $scope.fMinCountObs.toString(),
                "distanceInMeters": $scope.fSTDDEVofPosMeters.toString(),
                "filterSubSumpling": $scope.fUseSampling,
                "subSamplingNumber": $scope.fSamplingFactor.toString()
            }
        };


        if (($scope.branchStatus.length == 0) && ($scope.storeStatus.length == 0) && ($scope.floorStatus.length == 0) && ($scope.accessPtStatus.length == 0)) {
            $scope.errorCapt = true;
            $scope.loader = false;
            $scope.errorMsgCapt = "Please select branch or store or floor or accesspoint and click on submit button";
        } else {
            fortinetService.getCaptureRate(captureData).then(function(response) {
                    if (response.data) {
                        response = response.data;
                        $scope.capturedValues = response;
                        $scope.graphVisible = true;
                        $scope.errorCapt = false;
                        $scope.loader = false;
                        var getDates = [],
                            percentIn = [],
                            percentPer = [];
                        angular.forEach($scope.capturedValues, function(val, key) {

                            getDates.push(val.date);
                            percentIn.push(Math.round(val.percentageOfin * 100) / 100);
                            percentPer.push(Math.round(val.percentageOfinPers * 100) / 100);
                        });
                        $scope.fortinenthomeChart = {
                            chart: {
                                type: 'line',
                                marginTop: 40
                            },
                            title: {
                                text: ''
                            },
                            yAxis: {
                                title: {
                                    text: 'Capture Rate [%]'
                                }
                            },
                            xAxis: {
                                categories: getDates,
                                type: 'datetime',
                                labels: {
                                    formatter: function() {
                                        return Highcharts.dateFormat('%d. %b %a', this.value);
                                    }
                                }
                            },
                            series: [{
                                name: 'Observations',
                                data: percentIn
                            }, {
                                name: 'Persons',
                                data: percentPer
                            }],

                            tooltip: {
                                shared: true,
                                formatter: function() {
                                    var tooltipText = '<span style="font-size:smaller;">' + Highcharts.dateFormat(
                                        '%A, %b %e, %Y', this.x) + '</span><br/>';
                                    $.each(this.points, function(i, series) {
                                        tooltipText += '<span style="color:' + this.series.color + '">' + "" + this.series.name

                                            +
                                            '</span>: <b>' + this.y + '%</b><br/>';
                                    });
                                    return tooltipText;
                                }
                            }

                        }
                    }
                },
                function(error) {
                    alert("Error retrieving API data, " + error.statusText);
                });
        }
    };
    $scope.getFrequencyDetails = function() {
        $scope.treeSelectedStatusFreq = false;
        $scope.errorStatus = false;
        $scope.Freqloader = true;

        // time in miliseconds
        var startDate = moment($scope.fortinetCRDates.startDate).utc().startOf('day').format('x');
        var endDate = moment($scope.fortinetCRDates.endDate).utc().endOf('day').format('x');

        startDate = parseInt(startDate) + 1000; // time starts from 00:00:01
        endDate = parseInt(endDate) - 999; // time ends at 23:59:59

        if (startDate == NaN || endDate == NaN) return;


        var fdte = ($scope.ffDwellTimeEmp) * 3600000;
        var fenagedtime = ($scope.ffEngagedTime) * 60000;
        var fvitedtime = ($scope.ffVisitedTime) * 60000;

        $scope.dTNames = [];
        if ($scope.ffPassthru == true) {
            $scope.dTNames.push("Passthru");
        }
        if ($scope.ffVisit == true) {
            $scope.dTNames.push("Visit");
        }
        if ($scope.ffEngaged == true) {
            $scope.dTNames.push("Engaged");
        }

        var frequencyData = {
            "branchs": $scope.unique($scope.branchStatus),
            "stores": $scope.unique($scope.storeStatus),
            "accessPoints": $scope.unique($scope.accessPtStatus),
            "flors": $scope.unique($scope.floorStatus),
            "conf": {
                "resolution": "DAY",
                "visitedTimeInMsec": 180000,
                "engagedTimeInMsec": 1200000,
                "timeToMergeInMsec": 300000,
                "accessPoints": [],
                "areas": [],
                "startTimeInMsec": parseInt(startDate),
                "endTimeInMsec": parseInt(endDate),
                "filterRandomMacs": $scope.ffRandomMacs,
                "filterDeviceOUIs": true,
                "filterFixEquipment": $scope.ffFixedEquipment,
                "filterEmployees": $scope.ffEmp,
                "dwellTimeOfEmployee": fdte,
                "minValOfObsFixEquipment": $scope.ffMinCountObs.toString(),
                "tableName": "mostRecentPositionWeightedAverage",
                "distanceInMeters": $scope.ffSTDDEVofPosMeters.toString(),
                "filterSubSumpling": false,
                "subSamplingNumber": 1,
                "dwellValues": $scope.dTNames
            }
        }

        fortinetService.getFrequency(frequencyData, $scope.ffRecValue).then(function(response) {
                if (response.data) {
                    response = response.data;
                    $scope.Freqloader = false;
                    $scope.tableVisible = true;
                    if (response.length == 0) {
                        $scope.errorStatus = true;
                        $scope.Freqloader = false;
                        $scope.errorMsg = "Please select branch or store or floor or accesspoint and click on submit button";
                    }
                    $scope.frequencyValues = response;
                }
            },
            function(error) {
                alert("Error retrieving API data, " + error.statusText);
            });
    };


    $scope.unique = function(origArr) {
        var newArr = [],
            origLen = origArr.length,
            found, x, y;

        for (x = 0; x < origLen; x++) {
            found = undefined;
            for (y = 0; y < newArr.length; y++) {
                if (origArr[x] === newArr[y]) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                newArr.push(origArr[x]);
            }
        }
        return newArr;
    }


});