angular.module('lsi').controller('fortinentfreqdistCtrl', function ($scope, fortinetService) {

    /*set default date to datepicker starts*/
    $scope.fortinetFDDates = {
        startDate: moment().subtract(7, 'day'),
        endDate: moment()
    };


    $scope.graphVisible = false;
    $scope.tableVisible = false;
    $scope.treeSelectedStatus = true;
    $scope.treeSelectedStatusFreq = true;


    $scope.branches = [],
        $scope.childBranches = [],
        $scope.stores = [];
    $scope.loadTree = function () {
        fortinetService.getFortinentTree(function (response) {
            $scope.storeInst = $scope.getObject(response);
            $scope.getSelectedId($scope.storeInst[0].id, 'Store');
            $scope.getFrequencyDistribution();
            if(response.status != "failure") {
                $scope.treeList = response.data;
                $scope.dynamicBranches = $scope.treeList.branchs;
            }
        });
    };
    $scope.branchStatus = [], $scope.storeStatus = [], $scope.floorStatus = [], $scope.accessPtStatus = [], $scope.areaStatus = [];
    $scope.captureRateData = {}, $scope.type = '';

    $scope.loadTree();

    $scope.getSelectedId = function (selectedId, selectedName) {
        $scope.type = selectedName;
        switch (selectedName) {
            case 'Branch':
                {
                    $scope.branchStatus = [];
                    $scope.branchStatus.push(selectedId);
                    $scope.storeStatus = [];$scope.floorStatus = [];$scope.accessPtStatus = [];$scope.areaStatus = [];
                    $scope.onlyArea = false;
                    break;
                }
            case 'Floor':
                {
                    $scope.floorStatus = [];
                    $scope.floorStatus.push(selectedId);
                    $scope.branchStatus = [];$scope.storeStatus = [];$scope.accessPtStatus = [];$scope.areaStatus = [];
                    $scope.onlyArea = false;
                    break;
                }
            case 'Store':
                {
                    $scope.storeStatus = [];
                    $scope.storeStatus.push(selectedId);
                    $scope.branchStatus = [];$scope.floorStatus = [];$scope.accessPtStatus = [];$scope.areaStatus = [];
                    $scope.onlyArea = false;
                    break;
                }
            case 'AccessPoint':
                {
                    $scope.accessPtStatus = [];
                    $scope.accessPtStatus.push(selectedId);
                    $scope.branchStatus = [];$scope.storeStatus = [];$scope.floorStatus = [];$scope.areaStatus = [];
                    $scope.onlyArea = false;
                    break;
                }
            case 'Area':
                {
                    $scope.areaStatus = [];
                    $scope.areaStatus.push(selectedId);
                    $scope.branchStatus = [];$scope.storeStatus = [];$scope.floorStatus = [];$scope.accessPtStatus = [];
                    $scope.onlyArea = true;
                    break;
                }

        }
    };

    $scope.selectedButtonValue = 'day'; // ser default selected button

    $scope.selectedButton = function (status) {
        $scope.selectedButtonValue = status;
    }

    /*Frequency Distribution*/
    $scope.getFrequencyDistribution = function (response) {

        // time in miliseconds
            var startDate = moment($scope.fortinetFDDates.startDate).utc().startOf('day').format('x');
            var endDate = moment($scope.fortinetFDDates.endDate).utc().endOf('day').format('x');

            startDate = parseInt(startDate) + 1000; // time starts from 00:00:01
            endDate = parseInt(endDate) - 999; // time ends at 23:59:59
            if (startDate == NaN || endDate == NaN) return;

            var dellTimeEmp = ($scope.fDwellTimeEmp) * 3600000;
            var enagedTime = ($scope.fEngagedTime) * 60000;
            var vitedTime = ($scope.fVisitedTime) * 60000;
            $scope.timeTomerge = ($scope.fTimeMerge) * 60000;

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

        if ($scope.unique($scope.areaStatus).length > 0) {
            $scope.areasId = [{
                "id": $scope.unique($scope.areaStatus)[0]
            }];
            $scope.treeSelectedStatus = false;
            $scope.loader = true;

            var feqDistAreaData = {
                "resolution": $scope.selectedButtonValue.toUpperCase(),
                "visitedTimeInMsec": vitedTime,
                "engagedTimeInMsec": enagedTime,
                "timeToMergeInMsec": $scope.timeTomerge,
                "accessPoints": [],
                "areas": $scope.areasId,
                "startTimeInMsec": startDate,
                "endTimeInMsec": endDate,
                "filterRandomMacs": $scope.fRandomMacs,
                "filterDeviceOUIs": true,
                "filterFixEquipment": $scope.fFixedEquipment,
                "filterEmployees": $scope.fEmp,
                "dwellTimeOfEmployee": dellTimeEmp,
                "minValOfObsFixEquipment": $scope.fMinCountObs.toString(),
                "tableName": $scope.ffLocalAlg,
                "distanceInMeters": $scope.fSTDDEVofPosMeters.toString(),
                "filterSubSumpling": false,
                "subSamplingNumber": $scope.fSamplingFactor.toString(),
                "dwellValues": $scope.dTNames
            }           
            //start letter table Time Value
            $scope.tableTimeValue = $scope.selectedButtonValue.charAt(0);
            $scope.tableTimeValueLetter = $scope.tableTimeValue.toLowerCase();

            if (($scope.branchStatus.length == 0) && ($scope.storeStatus.length == 0) && ($scope.floorStatus.length == 0) && ($scope.areaStatus.length == 0) && ($scope.accessPtStatus.length == 0)) {
                $scope.errorCapt = true;
                $scope.loader = false;
                $scope.errorMsgCapt = "Please select branch or store or floor or area or accesspoint and click on submit button";
            } else {                
                fortinetService.getFrequencyPerArea(feqDistAreaData, $scope.ffRecValue, function (response) {
                    $scope.capturedValues = response;
                    $scope.graphVisible = true;
                    $scope.loader = false;
                    $scope.errorCapt = false;
                    $scope.tableVisible = true;

                    $scope.tableValues = $scope.capturedValues[0];
                    $scope.graphValues = $scope.capturedValues[1];

                    var getDay = [], getCount = [];
                    angular.forEach($scope.graphValues, function (val, key) {
                        getDay.push(val.recency);
                        getCount.push(val.count);

                    });

                    $scope.fortinentcustfreqdistChart = {
                        chart: {
                            type: 'column',
                            marginTop: 40
                        },
                        title: {
                            text: 'Distribution of Frequency'
                        },
                        yAxis: {
                            title: {
                                text: 'Number of Devices'
                            }
                        },
                        xAxis: {
                            categories: getDay
                        },
                        series: [{
                            name: 'Average Recency per Device [' + $scope.selectedButtonValue + ']',
                            data: getCount
                        }],
                        tooltip: {
                            formatter: function () {
                                return '' + this.y + ' devices had a Frequency of <strong>' + this.x + ' ' + $scope.selectedButtonValue + '</strong>';
                            }
                        }
                    }
                });
            }
        } else {
            $scope.areasId = []
            $scope.treeSelectedStatus = false;
            $scope.loader = true;

             var recFrequencyData = {
                "branchs": $scope.unique($scope.branchStatus),
                "stores": $scope.unique($scope.storeStatus),
                "accessPoints": $scope.unique($scope.accessPtStatus),
                "flors": $scope.unique($scope.floorStatus),
                "conf": {
                    "resolution": $scope.selectedButtonValue.toUpperCase(),
                    "visitedTimeInMsec": vitedTime,
                    "engagedTimeInMsec": enagedTime,
                    "timeToMergeInMsec": $scope.timeTomerge,
                    "accessPoints": [],
                    "areas": [],
                    "startTimeInMsec": startDate,
                    "endTimeInMsec": endDate,
                    "filterRandomMacs": $scope.fRandomMacs,
                    "filterDeviceOUIs": true,
                    "filterFixEquipment": $scope.fFixedEquipment,
                    "filterEmployees": $scope.fEmp,
                    "dwellTimeOfEmployee": dellTimeEmp,
                    "minValOfObsFixEquipment": $scope.fMinCountObs.toString(),
                    "tableName": "mostRecentPositionWeightedAverage",
                    "distanceInMeters": $scope.fSTDDEVofPosMeters.toString(),
                    "filterSubSumpling": false,
                    "subSamplingNumber": $scope.fSamplingFactor.toString(),
                    "dwellValues": $scope.dTNames
                }
            }
            //start letter table Time Value
            $scope.tableTimeValue = $scope.selectedButtonValue.charAt(0);
            $scope.tableTimeValueLetter = $scope.tableTimeValue.toLowerCase();

            if (($scope.branchStatus.length == 0) && ($scope.storeStatus.length == 0) && ($scope.floorStatus.length == 0) && ($scope.areaStatus.length == 0) && ($scope.accessPtStatus.length == 0)) {
                $scope.errorCapt = true;
                $scope.loader = false;
                $scope.errorMsgCapt = "Please select branch or store or floor or area or accesspoint and click on submit button";
            } else {
                fortinetService.getFrequencyDist(recFrequencyData, $scope.ffRecValue, function (response) {
                    $scope.capturedValues = response;
                    $scope.graphVisible = true;
                    $scope.loader = false;
                    $scope.errorCapt = false;
                    $scope.tableVisible = true;

                    $scope.tableValues = $scope.capturedValues[0];
                    $scope.graphValues = $scope.capturedValues[1];

                    var getDay = [], getCount = [];
                    angular.forEach($scope.graphValues, function (val, key) {
                        getDay.push(val.recency);
                        getCount.push(val.count);

                    });

                    $scope.fortinentcustfreqdistChart = {
                        chart: {
                            type: 'column',
                            marginTop: 40
                        },
                        title: {
                            text: 'Distribution of Frequency'
                        },
                        yAxis: {
                            title: {
                                text: 'Number of Devices'
                            }
                        },
                        xAxis: {
                            categories: getDay
                        },
                        series: [{
                            name: 'Average Recency per Device [' + $scope.selectedButtonValue + ']',
                            data: getCount
                        }],
                        tooltip: {
                            formatter: function () {
                                return '' + this.y + ' devices had a Frequency of <strong>' + this.x + ' ' + $scope.selectedButtonValue + '</strong>';
                            }
                        }
                    }
                });
            }
        }


    };

    $scope.unique = function (origArr) {
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