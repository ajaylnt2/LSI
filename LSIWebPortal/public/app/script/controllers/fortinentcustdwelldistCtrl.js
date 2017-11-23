/*
This controller uses fortinetService to manage customer dwell time distribution from the view
*/
angular.module('lsi').controller('fortinentcustdwelldistCtrl', function($scope, fortinetService) {

    /*set default date to datepicker starts*/
    $scope.fortinetDTDDates = {
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
    $scope.loadTree = function() {
        fortinetService.getFortinentTree().then(function(response) {
                if (response.data) {
                    response = response.data;
                    $scope.storeInst = $scope.getObject(response);
                    $scope.getSelectedId($scope.storeInst[0].id, 'Store');
                    $scope.getDwellTimeDistribution();
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

    $scope.selectedButtonValue = 'minute'; // ser default selected button
    $scope.selectedButton = function(status) {
        $scope.selectedButtonValue = status;
    }


    /*Dwell Time Distribution*/
    $scope.getDwellTimeDistribution = function(response) {

        $scope.treeSelectedStatus = false;
        $scope.loader = true;

        // time in miliseconds
        var startDate = moment($scope.fortinetDTDDates.startDate).utc().startOf('day').format('x');
        var endDate = moment($scope.fortinetDTDDates.endDate).utc().endOf('day').format('x');

        startDate = parseInt(startDate) + 1000; // time starts from 00:00:01
        endDate = parseInt(endDate) - 999; // time ends at 23:59:59

        if (startDate == NaN || endDate == NaN) return;


        var dellTimeEmp = ($scope.fDwellTimeEmp) * 3600000;
        var enagedTime = ($scope.fEngagedTime) * 60000;
        var vitedTime = ($scope.fVisitedTime) * 60000;
        var timeTomerge = ($scope.fTimeMerge) * 60000;

        if ($scope.unique($scope.areaStatus).length > 0) {
            $scope.areasId = [{
                "id": $scope.unique($scope.areaStatus)[0]
            }];
        } else {
            $scope.areasId = []
        }

        var dwellTimeDistData = {
            "branchs": $scope.unique($scope.branchStatus),
            "stores": $scope.unique($scope.storeStatus),
            "accessPoints": $scope.unique($scope.accessPtStatus),
            "flors": $scope.unique($scope.floorStatus),
            "conf": {
                "resolution": "DAY",
                "visitedTimeInMsec": 0,
                "engagedTimeInMsec": 0,
                "timeToMergeInMsec": timeTomerge,
                "accessPoints": [],
                "areas": $scope.areasId,
                "startTimeInMsec": parseInt(startDate),
                "endTimeInMsec": parseInt(endDate),
                "filterRandomMacs": $scope.fRandomMacs,
                "filterDeviceOUIs": $scope.fDeviceOUIs,
                "filterFixEquipment": $scope.fFixedEquipment,
                "filterEmployees": $scope.fEmp,
                "dwellTimeOfEmployee": dellTimeEmp,
                "minValOfObsFixEquipment": $scope.fMinCountObs.toString(),
                "tableName": $scope.ffLocalAlg,
                "distanceInMeters": $scope.fSTDDEVofPosMeters.toString(),
                "filterSubSumpling": $scope.fUseSampling,
                "subSamplingNumber": $scope.fSamplingFactor.toString()
            }
        };

        $scope.tableTimeValue = $scope.selectedButtonValue + "s";

        if (($scope.branchStatus.length == 0) && ($scope.storeStatus.length == 0) && ($scope.floorStatus.length == 0) && ($scope.areaStatus.length == 0) && ($scope.accessPtStatus.length == 0)) {
            $scope.errorCapt = true;
            $scope.loader = false;
            $scope.errorMsgCapt = "Please select branch or store or floor or area or accesspoint and click on submit button";
        } else {

            fortinetService.getDwellTimeDist(dwellTimeDistData, $scope.selectedButtonValue, $scope.fDellTimeValue).then(function(response) {
                    if (response.data) {
                        $scope.dwellTimeDistValues = response.data;
                        $scope.graphVisible = true;
                        $scope.loader = false;
                        $scope.errorCapt = false;
                        $scope.tableVisible = true;

                        var persons = [],
                            dwellTime = [];
                        angular.forEach($scope.dwellTimeDistValues, function(val, key) {
                            persons.push(val.persons);
                            dwellTime.push(val.dwellTime);
                        });

                        $scope.fortinentcustdwelldistChart = {
                            chart: {
                                type: 'column',
                                marginTop: 40
                            },
                            title: {
                                text: 'Dwell Time Distribution'
                            },
                            yAxis: {
                                title: {
                                    text: 'Number of Persons'
                                }
                            },
                            xAxis: {
                                categories: dwellTime
                            },
                            series: [{
                                name: 'Dwell time [' + $scope.selectedButtonValue + ']',
                                data: persons
                            }],
                            tooltip: {
                                formatter: function() {
                                    return '' + this.y + ' observations had a Dwell Time of <strong>' + this.x + ' ' + $scope.selectedButtonValue + '</strong>';
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