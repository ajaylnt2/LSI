/*
This controller uses fortinetService to manage fortinent person visible charts from the view
*/
angular.module('lsi').controller('fortinentpersonvisibleCtrl', function($scope, fortinetService, $timeout) {

    $scope.loader = false;
    $scope.treeSelectedStatus = true;

    /*set default date to datepicker starts*/
    $scope.fortinetPVDates = {
        startDate: moment().subtract(7, 'day'),
        endDate: moment()
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
                    $scope.getPersonVisible();
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
                    break;
                }

        }
    };

    $scope.selectedButtonValue = 'DAY'; // set default selected button
    $scope.selectedButton = function(status) {
        $scope.selectedButtonValue = status;
    }

    var defaultDate = moment($scope.fortinetPVDates.endDate).utc().add(-29, 'day').format('YYYY-MM-DD');

    $scope.selectedDate = new Date(defaultDate);

    /*Person visible*/
    $scope.getPersonVisible = function(response) {

        $scope.treeSelectedStatus = false;
        $scope.loader = true;
        $scope.graphVisibleCR = false;
        $scope.graphVisibleNVR = false;
        $scope.graphVisibleODT = false;
        $scope.graphVisiblePDT = false;
        $scope.graphVisibleFN = false;
        $scope.graphVisibleOPDT = false;

        // time in miliseconds
        var startDate = moment($scope.fortinetPVDates.startDate).utc().startOf('day').format('x');
        var endDate = moment($scope.fortinetPVDates.endDate).utc().endOf('day').format('x');

        var dateForNewVsRep = moment(response).utc().startOf('day').format('x');

        startDate = parseInt(startDate) + 1000; // time starts from 00:00:01
        endDate = parseInt(endDate) - 999; // time ends at 23:59:59
        dateForNewVsRep = parseInt(dateForNewVsRep) + 1000; // time from 00:00:01
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
                "minDateForNewVsRep": dateForNewVsRep,
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
            $scope.getPersonVisibleCharts = function() {

                fortinetService.getCaptureRate(captureData).then(function(response) {
                        if (response.data) {
                            response = response.data;
                            $timeout(function() {
                                $scope.graphVisibleCR = true;
                                $scope.loader = false;
                            }, 3000);
                            $scope.capturedValues = response;
                            var datas = [];
                            var datas1 = [];
                            var data = [];
                            for (var i = 0; i < $scope.capturedValues.length; i++) {
                                datas.push([$scope.capturedValues[i].date, $scope.capturedValues[i].percentageOfin])
                                datas1.push([$scope.capturedValues[i].date, $scope.capturedValues[i].percentageOfinPers])
                            }
                            data[0] = {
                                name: "Observations",
                                data: datas,
                                visible: false
                            };
                            data[1] = {
                                name: "Persons",
                                data: datas1
                            };
                            var seriesData = [data[0], data[1]];

                            $scope.personCRChart = {
                                chart: {
                                    type: 'line',
                                    marginTop: 40
                                },
                                title: {
                                    text: 'Capture Rate'
                                },
                                yAxis: {
                                    title: {
                                        text: 'Capture Rate [%]'
                                    }
                                },
                                xAxis: [{
                                    type: "datetime",
                                    title: {
                                        text: null
                                    },
                                    dateTimeLabelFormats: {
                                        month: "%e. %b"
                                    }
                                }],
                                series: seriesData,
                                plotOptions: {
                                    series: {
                                        marker: {
                                            enabled: false
                                        }
                                    }
                                },

                                tooltip: {
                                    shared: true,
                                    formatter: function() {
                                        var tooltipText = '<span style="font-size:smaller;">' +
                                            Highcharts.dateFormat(
                                                '%A, %b %e, %Y', this.x) +
                                            '</span><br/>';
                                        $.each(this.points, function() {
                                            tooltipText += '<span style="color:' +
                                                this.series.color +
                                                '">' +
                                                "" +
                                                this.series.name

                                                +
                                                '</span>: <b>' +
                                                Math.round(this.y * 100) / 100 +
                                                '%</b><br/>';
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

                fortinetService.getNewVsRepeat(captureData).then(function(response) {
                        if (response.data) {
                            response = response.data;
                            $scope.newVsRepeatValues = response;
                            $timeout(function() {
                                $scope.graphVisibleNVR = true;
                                $scope.graphVisibleFN = true;
                                $scope.loader = false;
                            }, 3000);

                            var NewObs = [];
                            var NewPers = [];
                            var Repeat = [];
                            var RepeatPers = [];
                            var Total = [];
                            var TotalPers = [];
                            var fractionTotal = [];
                            var fractionTotalPers = [];
                            var data = [];

                            for (var i = 0; i < $scope.newVsRepeatValues.length; i++) {
                                NewPers.push([$scope.newVsRepeatValues[i].date, $scope.newVsRepeatValues[i].newPers]);
                                NewObs.push([$scope.newVsRepeatValues[i].date, $scope.newVsRepeatValues[i].new]);
                                Repeat.push([$scope.newVsRepeatValues[i].date, $scope.newVsRepeatValues[i].repeat]);
                                RepeatPers.push([$scope.newVsRepeatValues[i].date, $scope.newVsRepeatValues[i].repeatPers]);
                                Total.push([$scope.newVsRepeatValues[i].date, $scope.newVsRepeatValues[i].repeat + $scope.newVsRepeatValues[i].new]);
                                TotalPers.push([$scope.newVsRepeatValues[i].date, $scope.newVsRepeatValues[i].repeatPers + $scope.newVsRepeatValues[i].newPers]);

                                fractionTotal.push(new NewVsTotal($scope.newVsRepeatValues[i].date, $scope.newVsRepeatValues[i].newPers, $scope.newVsRepeatValues[i].repeat));
                                fractionTotalPers.push(new NewVsTotal($scope.newVsRepeatValues[i].date, $scope.newVsRepeatValues[i].new, $scope.newVsRepeatValues[i].repeatPers));
                            }
                            data[0] = {
                                name: "New persons",
                                data: NewPers
                            };
                            data[1] = {
                                name: "New observations",
                                visible: false,
                                data: NewObs
                            };
                            data[2] = {
                                name: "Repeat observations",
                                data: Repeat,
                                visible: false
                            };
                            data[3] = {
                                name: "Repeat persons",
                                data: RepeatPers
                            };
                            data[4] = {
                                name: "Total observations",
                                data: Total,
                                visible: false
                            };
                            data[5] = {
                                name: "Total persons",
                                data: TotalPers
                            };
                            data[6] = {
                                name: "New observations",
                                data: fractionTotal
                            };
                            data[7] = {
                                name: "New persons",
                                data: fractionTotalPers
                            };
                            var seriesData1 = [data[0], data[1], data[2], data[3], data[4], data[5]];
                            var seriesData2 = [data[6], data[7]];

                            $scope.personNVRChart = {
                                chart: {
                                    type: 'line',
                                    marginTop: 40
                                },
                                title: {
                                    text: 'New versus Repeat'
                                },
                                yAxis: {
                                    title: {
                                        text: 'Persons / Observations'
                                    }
                                },
                                xAxis: [{
                                    type: "datetime",
                                    title: {
                                        text: null
                                    },
                                    dateTimeLabelFormats: {
                                        month: "%e. %b"
                                    }
                                }],
                                series: seriesData1,
                                plotOptions: {
                                    series: {
                                        marker: {
                                            enabled: false
                                        }
                                    }
                                },

                                tooltip: {
                                    shared: true,
                                    formatter: function() {
                                        var tooltipText = '<span style="font-size:smaller;">' +
                                            Highcharts.dateFormat(
                                                '%A, %b %e, %Y', this.x) +
                                            '</span><br/>';
                                        $.each(this.points, function() {
                                            tooltipText += '<span style="color:' +
                                                this.series.color +
                                                '">' +
                                                "" +
                                                this.series.name

                                                +
                                                '</span>: <b>' +
                                                this.y +
                                                '</b><br/>';
                                        });
                                        return tooltipText;
                                    }
                                }

                            }

                            $scope.personFNChart = {
                                chart: {
                                    type: 'line',
                                    marginTop: 40
                                },
                                title: {
                                    text: 'Fraction new'
                                },
                                yAxis: {
                                    title: {
                                        text: 'Fraction new [%]'
                                    }
                                },
                                xAxis: [{
                                    type: "datetime",
                                    title: {
                                        text: null
                                    },
                                    dateTimeLabelFormats: {
                                        month: "%e. %b"
                                    }
                                }],
                                series: seriesData2,
                                plotOptions: {
                                    series: {
                                        marker: {
                                            enabled: false
                                        }
                                    }
                                },

                                tooltip: {
                                    shared: true,
                                    formatter: function() {
                                        var tooltipText = '<span style="font-size:smaller;">' +
                                            Highcharts.dateFormat(
                                                '%A, %b %e, %Y', this.x) +
                                            '</span><br/>';
                                        $.each(this.points, function() {
                                            tooltipText += '<span style="color:' +
                                                this.series.color +
                                                '">' +
                                                "" +
                                                this.series.name

                                                +
                                                '</span>: <b>' +
                                                this.y +
                                                '%</b><br/>';
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


                fortinetService.getDwellTime(captureData).then(function(response) {
                        if (response.data) {
                            response = response.data;
                            $timeout(function() {
                                $scope.graphVisibleODT = true;
                                $scope.graphVisiblePDT = true;
                                $scope.graphVisibleOPDT = true;
                                $scope.loader = false;
                            }, 3000);
                            $scope.dwellTimeValues = response;

                            var Engaged = [];
                            var Passby = [];
                            var Passthru = [];
                            var Visit = [];
                            var EngagedPers = [];
                            var PassbyPers = [];
                            var PassthruPers = [];
                            var VisitPers = [];

                            var obsPerEngaged = [];
                            var obsPerPassby = [];
                            var obsPerPassthru = [];
                            var obsPerVisit = [];

                            var data = [];
                            for (var i = 0; i < $scope.dwellTimeValues.length; i++) {
                                Engaged.push([$scope.dwellTimeValues[i].date, $scope.dwellTimeValues[i].engaged]);
                                Passby.push([$scope.dwellTimeValues[i].date, $scope.dwellTimeValues[i].passby]);
                                Passthru.push([$scope.dwellTimeValues[i].date, $scope.dwellTimeValues[i].passthru]);
                                Visit.push([$scope.dwellTimeValues[i].date, $scope.dwellTimeValues[i].visit]);

                                EngagedPers.push([$scope.dwellTimeValues[i].date, $scope.dwellTimeValues[i].engagedPers]);
                                PassbyPers.push([$scope.dwellTimeValues[i].date, $scope.dwellTimeValues[i].passbyPers]);
                                PassthruPers.push([$scope.dwellTimeValues[i].date, $scope.dwellTimeValues[i].passthruPers]);
                                VisitPers.push([$scope.dwellTimeValues[i].date, $scope.dwellTimeValues[i].visitPers]);

                                var obsPerValues = new dwelltime($scope.dwellTimeValues[i].date, $scope.dwellTimeValues[i].engagedAvg, $scope.dwellTimeValues[i].passbyAvg, $scope.dwellTimeValues[i].passthruAvg, $scope.dwellTimeValues[i].visitAvg);


                                obsPerEngaged.push(obsPerValues.getEngaged());
                                obsPerPassby.push(obsPerValues.getPassby());
                                obsPerPassthru.push(obsPerValues.getPassthru());
                                obsPerVisit.push(obsPerValues.getVisit());
                            }

                            data[0] = {
                                name: "Engaged observations",
                                data: Engaged
                            };
                            data[1] = {
                                name: "Passby observations",
                                data: Passby
                            };
                            data[2] = {
                                name: "Passthru observations",
                                data: Passthru
                            };
                            data[3] = {
                                name: "Visit observations",
                                data: Visit
                            };
                            data[4] = {
                                name: "Engaged persons",
                                data: EngagedPers
                            };
                            data[5] = {
                                name: "Passby persons",
                                data: PassbyPers
                            };
                            data[6] = {
                                name: "Passthru persons",
                                data: PassthruPers
                            };
                            data[7] = {
                                name: "Visit persons",
                                data: VisitPers
                            };
                            data[8] = {
                                name: "Engaged",
                                data: obsPerEngaged
                            };
                            data[9] = {
                                name: "Passby",
                                data: obsPerPassby
                            };
                            data[10] = {
                                name: "Passthru",
                                data: obsPerPassthru
                            };
                            data[11] = {
                                name: "Visit",
                                data: obsPerVisit
                            };
                            var seriesData1 = [data[0], data[1], data[2], data[3]];
                            var seriesData2 = [data[4], data[5], data[6], data[7]];
                            var seriesData3 = [data[8], data[9], data[10], data[11]];

                            $scope.personODTChart = {
                                chart: {
                                    type: 'line',
                                    marginTop: 40
                                },
                                title: {
                                    text: 'Observations by dwell-time'
                                },
                                yAxis: {
                                    title: {
                                        text: 'Observations'
                                    }
                                },
                                xAxis: [{
                                    type: "datetime",
                                    title: {
                                        text: null
                                    },
                                    dateTimeLabelFormats: {
                                        month: "%e. %b"
                                    }
                                }],
                                series: seriesData1,
                                plotOptions: {
                                    series: {
                                        marker: {
                                            enabled: false
                                        }
                                    }
                                },

                                tooltip: {
                                    shared: true,
                                    formatter: function() {
                                        var tooltipText = '<span style="font-size:smaller;">' +
                                            Highcharts.dateFormat(
                                                '%A, %b %e, %Y', this.x) +
                                            '</span><br/>';
                                        $.each(this.points, function() {
                                            tooltipText += '<span style="color:' +
                                                this.series.color +
                                                '">' +
                                                "" +
                                                this.series.name

                                                +
                                                '</span>: <b>' +
                                                this.y +
                                                '</b><br/>';
                                        });
                                        return tooltipText;
                                    }
                                }

                            }

                            $scope.personPDTChart = {
                                chart: {
                                    type: 'line',
                                    marginTop: 40
                                },
                                title: {
                                    text: 'Persons by dwell-time'
                                },
                                yAxis: {
                                    title: {
                                        text: 'Persons'
                                    }
                                },
                                xAxis: [{
                                    type: "datetime",
                                    title: {
                                        text: null
                                    },
                                    dateTimeLabelFormats: {
                                        month: "%e. %b"
                                    }
                                }],
                                series: seriesData2,
                                plotOptions: {
                                    series: {
                                        marker: {
                                            enabled: false
                                        }
                                    }
                                },

                                tooltip: {
                                    shared: true,
                                    formatter: function() {
                                        var tooltipText = '<span style="font-size:smaller;">' +
                                            Highcharts.dateFormat(
                                                '%A, %b %e, %Y', this.x) +
                                            '</span><br/>';
                                        $.each(this.points, function() {
                                            tooltipText += '<span style="color:' +
                                                this.series.color +
                                                '">' +
                                                "" +
                                                this.series.name

                                                +
                                                '</span>: <b>' +
                                                this.y +
                                                '</b><br/>';
                                        });
                                        return tooltipText;
                                    }
                                }

                            }

                            $scope.personOPDTChart = {
                                chart: {
                                    type: 'line',
                                    marginTop: 40
                                },
                                title: {
                                    text: 'Observations per persons by dwell-time'
                                },
                                yAxis: {
                                    min: 0,
                                    opposite: false,
                                    title: {
                                        text: 'Observations'
                                    }
                                },
                                xAxis: [{
                                    type: "datetime",
                                    title: {
                                        text: null
                                    },
                                    dateTimeLabelFormats: {
                                        month: "%e. %b"
                                    },
                                    ordinal: false
                                }],
                                series: seriesData3,
                                plotOptions: {
                                    series: {
                                        marker: {
                                            enabled: false
                                        }
                                    }
                                },

                                tooltip: {
                                    shared: true,
                                    formatter: function() {
                                        var tooltipText = '<span style="font-size:smaller;">' +
                                            Highcharts.dateFormat(
                                                '%A, %b %e, %Y', this.x) +
                                            '</span><br/>';
                                        $.each(this.points, function() {
                                            tooltipText += '<span style="color:' +
                                                this.series.color +
                                                '">' +
                                                "" +
                                                this.series.name

                                                +
                                                '</span>: <b>' +
                                                Math.round(this.y * 100) / 100 +
                                                '</b><br/>';
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
            $scope.getPersonVisibleCharts();
            $scope.tab = function() {
                $scope.graphVisibleCR = false;
                $scope.graphVisibleNVR = false;
                $scope.graphVisibleODT = false;
                $scope.graphVisiblePDT = false;
                $scope.graphVisibleFN = false;
                $scope.graphVisibleOPDT = false;
                if (angular.element('.tab-pane').hasClass('active')) {
                    $timeout(function() {
                        $scope.graphVisibleCR = true;
                        $scope.graphVisibleNVR = true;
                        $scope.graphVisibleODT = true;
                        $scope.graphVisiblePDT = true;
                        $scope.graphVisibleFN = true;
                        $scope.graphVisibleOPDT = true;
                    }, 10);
                }
            }
        }

    };


    function NewVsTotal(date, n, r) {
        this.date = date;
        if (r == undefined) {
            this.repeat = 0;
        } else {
            this.repeat = r;
        }
        if (n == undefined) {
            this.n = 0;
        } else {
            this.n = n;
        }
        if (this.n / (this.n + this.repeat) == "NaN") {
            this.pers = 0;
        } else {
            this.pers = (this.n / (this.n + this.repeat)) * 100;
        }

        return [this.date, (Math.round(this.pers * 100) / 100)]

    }

    function dwelltime(date, engaged, passby, passthru, visit) {
        this.date = date;
        if (engaged == undefined) {
            this.engaged = 0;
        } else {
            this.engaged = engaged;
        }
        if (passby == undefined) {
            this.passby = 0;
        } else {
            this.passby = passby;
        }
        if (passthru == undefined) {
            this.passthru = 0;
        } else {
            this.passthru = passthru;
        }
        if (visit == undefined) {
            this.visit = 0;
        } else {
            this.visit = visit;
        }
        this.getVisit = function() {
            return [this.date, this.visit];
        };
        this.getEngaged = function() {
            return [this.date, this.engaged];
        };
        this.getPassby = function() {
            return [this.date, this.passby];
        };
        this.getPassthru = function() {
            return [this.date, this.passthru];
        };
    }


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