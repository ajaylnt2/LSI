/*
This controller uses fortinetService to manage fortinent person top hours from the view
*/
angular.module('lsi').controller('fortinentpersontophoursCtrl', function($scope, fortinetService) {

    $scope.loader = false;
    $scope.treeSelectedStatus = true;
    $scope.nodataMsg = false;
    $scope.graphVisible = false;

    /*set default date to datepicker starts*/
    $scope.fortinetPVDates = {
        startDate: moment().subtract(7, 'day'),
        endDate: moment()
    };

    $scope.branches = [],
        $scope.childBranches = [],
        $scope.stores = [];

    // function to load tree with respect to the account
    $scope.loadTree = function() {
        fortinetService.getFortinentTree().then(function(response) {
                if (response.data) {
                    response = response.data;
                    $scope.storeInst = $scope.getObject(response);
                    $scope.getSelectedId($scope.storeInst[0].id, 'Store');
                    $scope.getPersonTopHours();
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

    // function to get tree selected id, name and it's data 
    $scope.getSelectedId = function(selectedId, selectedName) {
        $scope.type = selectedName;
        switch (selectedName) {
            case 'Branch':
                {
                    $scope.branchStatus = [];
                    $scope.branchStatus.push(selectedId);
                    $scope.storeStatus = [];
                    $scope.floorStatus = [];
                    $scope.accessPtStatus = [];
                    $scope.areaStatus = [];
                    $scope.onlyArea = false;
                    break;
                }
            case 'Floor':
                {
                    $scope.floorStatus = [];
                    $scope.floorStatus.push(selectedId);
                    $scope.branchStatus = [];
                    $scope.storeStatus = [];
                    $scope.accessPtStatus = [];
                    $scope.areaStatus = [];
                    $scope.onlyArea = false;
                    break;
                }
            case 'Store':
                {
                    $scope.storeStatus = [];
                    $scope.storeStatus.push(selectedId);
                    $scope.branchStatus = [];
                    $scope.floorStatus = [];
                    $scope.accessPtStatus = [];
                    $scope.areaStatus = [];
                    $scope.onlyArea = false;
                    break;
                }
            case 'AccessPoint':
                {
                    $scope.accessPtStatus = [];
                    $scope.accessPtStatus.push(selectedId);
                    $scope.branchStatus = [];
                    $scope.storeStatus = [];
                    $scope.floorStatus = [];
                    $scope.areaStatus = [];
                    $scope.onlyArea = false;
                    break;
                }
            case 'Area':
                {
                    $scope.areaStatus = [];
                    $scope.areaStatus.push(selectedId);
                    $scope.branchStatus = [];
                    $scope.storeStatus = [];
                    $scope.floorStatus = [];
                    $scope.accessPtStatus = [];
                    $scope.onlyArea = true;
                    break;
                }
            default:
                {
                    $scope.areaStatus = [];
                    $scope.branchStatus = [];
                    $scope.storeStatus = [];
                    $scope.floorStatus = [];
                    $scope.accessPtStatus = [];
                }

        }
    };

    $scope.selectedButtonValue = 'HOUR'; // set default selected button    

    /*function get details for Person visible*/
    $scope.getPersonTopHours = function() {

        $scope.treeSelectedStatus = false;
        $scope.loader = true;
        $scope.graphVisible = false;
        $scope.nodataMsg = false;

        // time in miliseconds
        var startDate = moment($scope.fortinetPVDates.startDate).utc().startOf('day').format('x');
        var endDate = moment($scope.fortinetPVDates.endDate).utc().endOf('day').format('x');

        startDate = parseInt(startDate) + 1000; // time starts from 00:00:01
        endDate = parseInt(endDate) - 999; // time ends at 23:59:59

        var a = NaN;
        if (startDate == a || endDate == a)
            return;

        var dte = ($scope.fDwellTimeEmp) * 3600000;
        var enagedtime = ($scope.fEngagedTime) * 60000;
        var vitedtime = ($scope.fVisitedTime) * 60000;
        var timetomerge = ($scope.fTimeMerge) * 60000;

        if ($scope.unique($scope.areaStatus).length > 0) {
            $scope.areasId = [{
                "id": $scope.unique($scope.areaStatus)[0]
            }];
        } else {
            $scope.areasId = []
        }

        var captureData = {
            "branchs": $scope.unique($scope.branchStatus),
            "stores": $scope.unique($scope.storeStatus),
            "flors": $scope.unique($scope.floorStatus),
            "accessPoints": $scope.unique($scope.accessPtStatus),
            "conf": {
                "accessPoints": [],
                "areas": $scope.areasId,
                "distanceInMeters": $scope.fSTDDEVofPosMeters.toString(),
                "dwellTimeOfEmployee": dte,
                "endTimeInMsec": parseInt(endDate),
                "engagedTimeInMsec": enagedtime,
                "filterDeviceOUIs": $scope.fDeviceOUIs,
                "filterEmployees": $scope.fEmp,
                "filterFixEquipment": $scope.fFixedEquipment,
                "filterRandomMacs": $scope.fRandomMacs,
                "filterSubSumpling": $scope.fUseSampling,
                "minValOfObsFixEquipment": $scope.fMinCountObs.toString(),
                "resolution": $scope.selectedButtonValue,
                "startTimeInMsec": parseInt(startDate),
                "subSamplingNumber": $scope.fSamplingFactor.toString(),
                "tableName": "mostRecentPositionWeightedAverage",
                "timeToMergeInMsec": timetomerge,
                "visitedTimeInMsec": vitedtime
            }
        };

        if (($scope.branchStatus.length == 0) && ($scope.storeStatus.length == 0) && ($scope.floorStatus.length == 0) && ($scope.areaStatus.length == 0) && ($scope.accessPtStatus.length == 0)) {
            $scope.treeSelectedStatus = true;
            $scope.loader = false;
        } else {
            /*function get details for Person visible and display chart*/
            $scope.getPersonTopHoursCharts = function() {

                fortinetService.getDwellTime(captureData).then(function(response) {
                        if (response.data) {
                            response = response.data;
                            $scope.capturedValues = response;
                            $scope.loader = false;

                            if ($scope.capturedValues.length != 0) {
                                $scope.nodataMsg = false;
                                $scope.graphVisible = true;

                                var dataArrayPassthru = [];
                                var dataArrayVisit = [];
                                var dataArrayEngaged = [];
                                var dataArrayPassby = [];
                                var dataArrayTotal = [];
                                var xAxis = [];
                                var maxWertPassthru = 0;
                                var maxWertPassby = 0;
                                var maxWertVisit = 0;
                                var maxWertEngaged = 0;
                                var maxWertTotal = 0;
                                var xAxisTickPositions = [];
                                var arrayForLength = [];
                                var dayOrMonth;
                                var dateWithoutHours;
                                var xAxisPosition;

                                for (var i = 0; i < $scope.capturedValues.length; i++) {
                                    dateWithoutHours = ((new Date($scope.capturedValues[i]["date"]).toISOString().replace(/T/, ' ').replace(/\..+/, '')).slice(0, 10));
                                    if (!isExist(dateWithoutHours, arrayForLength)) {
                                        arrayForLength.push(dateWithoutHours);
                                    }
                                }

                                for (var i = 0; i < $scope.capturedValues.length; i++) {
                                    dateWithoutHours = ((new Date($scope.capturedValues[i]["date"]).toISOString().replace(/T/, ' ').replace(/\..+/, '')).slice(0, 10));
                                    var dateWithHours = (new Date($scope.capturedValues[i]["date"]).toISOString().replace(/T/, ' ').replace(/\..+/, ''));
                                    var hour = parseInt(moment.utc(dateWithHours, "YYYY-MM-DD HH:mm:ss").format('HH'));
                                    var day = parseInt(moment.utc(dateWithHours, "YYYY-MM-DD HH:mm:ss").format('DD'));
                                    if ($scope.capturedValues[i]["passthruPers"] > maxWertPassthru) {
                                        maxWertPassthru = $scope.capturedValues[i]["passthruPers"];
                                    }
                                    if ($scope.capturedValues[i]["passbyPers"] > maxWertPassby) {
                                        maxWertPassby = $scope.capturedValues[i]["passbyPers"];
                                    }
                                    if ($scope.capturedValues[i]["visitPers"] > maxWertVisit) {
                                        maxWertVisit = $scope.capturedValues[i]["visitPers"];
                                    }
                                    if ($scope.capturedValues[i]["engagedPers"] > maxWertEngaged) {
                                        maxWertEngaged = $scope.capturedValues[i]["engagedPers"];
                                    }

                                    dataArrayPassthru.push([dateWithoutHours, hour, $scope.capturedValues[i]["passthruPers"]]);
                                    dataArrayVisit.push([dateWithoutHours, hour, $scope.capturedValues[i]["visitPers"]]);
                                    dataArrayEngaged.push([dateWithoutHours, hour, $scope.capturedValues[i]["engagedPers"]]);
                                    dataArrayPassby.push([dateWithoutHours, hour, $scope.capturedValues[i]["passbyPers"]]);
                                    var passthru = parseInt($scope.capturedValues[i]["passthruPers"]);
                                    var visit = parseInt($scope.capturedValues[i]["visitPers"]);
                                    var engaged = parseInt($scope.capturedValues[i]["engagedPers"]);
                                    var passby = parseInt($scope.capturedValues[i]["passbyPers"]);
                                    var total = (passthru + visit + engaged + passby);
                                    if (total > maxWertTotal) {
                                        maxWertTotal = total;
                                    }
                                    dataArrayTotal.push([dateWithoutHours, hour, total]);
                                    if (!isExist(dateWithoutHours, xAxis)) {
                                        xAxis.push(dateWithoutHours);
                                    }

                                    if (arrayForLength.length <= 31) {
                                        if (hour == 0) {
                                            xAxisPosition = xAxis.length - 1;
                                            xAxisTickPositions.push(xAxisPosition);
                                        }
                                        dayOrMonth = 'a';
                                    } else {
                                        if (day == 1 && hour == 0) {
                                            xAxisPosition = xAxis.length - 1;
                                            xAxisTickPositions.push(xAxisPosition);
                                        }
                                        dayOrMonth = 'b';
                                    }
                                }

                                maxWertPassthru = Math.ceil(maxWertPassthru / 10) * 10;
                                maxWertPassby = Math.ceil(maxWertPassby / 10) * 10;
                                maxWertVisit = Math.ceil(maxWertVisit / 10) * 10;
                                maxWertEngaged = Math.ceil(maxWertEngaged / 10) * 10;
                                maxWertTotal = Math.ceil(maxWertTotal / 10) * 10;

                                for (var i = 0; i < xAxis.length; i++) {
                                    for (var j = 0; j < dataArrayPassthru.length; j++) {
                                        if (xAxis[i] == dataArrayPassthru[j][0]) {
                                            dataArrayPassthru[j][0] = i;
                                        }
                                        if (xAxis[i] == dataArrayVisit[j][0]) {
                                            dataArrayVisit[j][0] = i;
                                        }
                                        if (xAxis[i] == dataArrayEngaged[j][0]) {
                                            dataArrayEngaged[j][0] = i;
                                        }
                                        if (xAxis[i] == dataArrayPassby[j][0]) {
                                            dataArrayPassby[j][0] = i;
                                        }
                                        if (xAxis[i] == dataArrayTotal[j][0]) {
                                            dataArrayTotal[j][0] = i;
                                        }
                                    }
                                }

                                var xAxisTimestamps = [];
                                for (var i = 0; i < xAxis.length; i++) {
                                    xAxisTimestamps.push(new Date(xAxis[i]).getTime());
                                }

                                var chartObjectPassthru = new getChartObject("Pass-thru", xAxis, xAxisTickPositions, maxWertPassthru, dataArrayPassthru, xAxisTimestamps, dayOrMonth);
                                var chartObjectVisit = new getChartObject("Visit", xAxis, xAxisTickPositions, maxWertVisit, dataArrayVisit, xAxisTimestamps, dayOrMonth);
                                var chartObjectEngaged = new getChartObject("Engaged", xAxis, xAxisTickPositions, maxWertEngaged, dataArrayEngaged, xAxisTimestamps, dayOrMonth);
                                var chartObjectPassby = new getChartObject("Pass-by", xAxis, xAxisTickPositions, maxWertPassby, dataArrayPassby, xAxisTimestamps, dayOrMonth);
                                var chartObjectTotal = new getChartObject("Total", xAxis, xAxisTickPositions, maxWertTotal, dataArrayTotal, xAxisTimestamps, dayOrMonth);

                                $scope.personPassthruChart = chartObjectPassthru;
                                $scope.personVisitChart = chartObjectVisit;
                                $scope.personEngagedChart = chartObjectEngaged;
                                $scope.personPassbyChart = chartObjectPassby;
                                $scope.personTotaluChart = chartObjectTotal;


                            } else {
                                $scope.nodataMsg = true;
                                $scope.graphVisible = false;
                            }
                        }
                    },
                    function(error) {
                        alert("Error retrieving API data, " + error.statusText);

                    });

            }
            $scope.getPersonTopHoursCharts();
        }

    };
    // to check weather value exists
    function isExist(value, array) {
        var isExist = false
        for (var i = 0; i < array.length; i++) {
            if (array[i] == value) {
                isExist = true;
            }
        }
        return isExist;
    }
    // to get chart objects and generate charts
    function getChartObject(title, xAxis, xAxisTickPositions, maxWert, dataArray, xAxisTimestamps, dayOrMonth) {
        return {
            chart: {
                type: 'heatmap',
                margin: [60, 10, 80, 50]
            },
            title: {
                text: title,
                align: 'center',
                style: {
                    "font-size": '16px'
                }
            },
            tooltip: {
                formatter: function() {
                    return Highcharts.dateFormat(
                        '%a, %b %e, %Y', new Date(this.series.xAxis.categories[this.point.x])) + " " + this.point.y + ":00" + ": <b>" + this.point.value + "</b>";
                },
                borderWidth: 1,
                borderColor: '#333',
                distance: 10,
                shadow: false,
                useHTML: true,
                style: {
                    padding: 2,
                    color: 'black'
                }
            },
            xAxis: {
                categories: xAxisTimestamps,
                tickPositions: xAxisTickPositions,
                labels: {
                    align: 'left',
                    x: 5,
                    format: '{value:%' + dayOrMonth + '}' // long month
                },
                tickLength: 16,
            },
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    format: '{value}:00'
                },
                minPadding: 0,
                maxPadding: 0,
                startOnTick: false,
                endOnTick: false,
                tickPositions: [0, 6, 12, 18, 24],
                tickWidth: 1,
                min: 0,
                max: 23,
                reversed: true
            },
            colorAxis: {
                stops: [
                    [0, '#FFFAFA'],
                    [0.03, '#3060cf'],
                    [0.15, '#32EB3A'],
                    [0.45, '#EAFD0D'],
                    [1, '#c4463a']
                ],
                min: 0,
                max: maxWert,
                startOnTick: false,
                endOnTick: false,
                labels: {
                    format: '{value}'
                }
            },

            series: [{
                data: dataArray,
            }]
        }
    }

    // to generate unique id's in the array
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