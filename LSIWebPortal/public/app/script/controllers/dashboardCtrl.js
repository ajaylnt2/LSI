/*
This controller uses sparkflyService,prismService,fortinetService to manage dashboard page
*/
angular.module('lsi').controller("dashboardCtrl", function($scope, sparkflyService, prismService, $cookieStore, fortinetService) {
    $scope.currentUser = $cookieStore.get('globals').currentUser;


    $scope.cStoreLoader = true, $scope.cameraLoader = true, $scope.wifiLoader = true;
    /**
        Authentication key generation api.
    **/

    $scope.loadCStoreInformation = function() {
        // Time in unix seconds.
        var startDate = moment().subtract(30, 'day').utc().startOf('day').format('X');
        var endDate = moment().utc().endOf('day').format('X');
        if (startDate == NaN || endDate == NaN) return;
        $scope.sparkflyErrorStatus = true;
        sparkflyService.getImpressionsLevel(startDate, endDate).then(function(response) {
                if (response.data) {
                    response = response.data;
                    $scope.chartLoaded = true;
                    var data_items = response.report.impressions.data_items;
                    var series = response.report.impressions.series;
                    if (data_items.length == 0 && series.length == 0) {
                        $scope.noDataFound = true;
                        $scope.chartLoaded = false;
                        $scope.cStoreLoader = false;
                    } else {
                        $scope.noDataFound = false;
                        $scope.cStoreLoader = false;
                        var n, i, r, a, o, s, l, u, c, d, h, p, f, g, m, dateToNum;
                        for (g = [], s = 0, h = 0, p = series, a = 0, c = series.length; c > a; a++) {
                            for (r = p[a], m = [], f = data_items[s], u = 0, d = f.length; d > u; u++) l = f[u], i = l[0], n = l[1],
                                dateToNum = parseInt(moment.utc(i, "DD-MMM-YY").format('x')),
                                m.push([dateToNum, Number(n)]);
                            m = m.sort(), g.push({
                                name: r.name + " - " + r.value,
                                data: m,
                                // visible: !1
                            }), g[s].name.length > h && (h = g[s].name.length), s += 1
                        }

                        $scope.chartOptions = {
                            chart: {
                                type: 'line',
                                height: 3 * g.length + 400
                            },
                            title: {
                                text: 'Coupons - Unique Visits for last 30 days'
                            },
                            xAxis: [{
                                type: "datetime",
                                title: {
                                    text: null
                                },
                                dateTimeLabelFormats: {
                                    month: "%e. %b",
                                    year: "%b"
                                }
                            }],
                            yAxis: [{
                                title: {
                                    text: "Unique Visits"
                                },
                                min: 0
                            }],
                            series: g,
                            legend: {
                                layout: "horizontal",
                                label_formatter: function() {
                                    return this.name
                                },

                            },
                            tooltip: {
                                formatter: function() {
                                    return '' + Highcharts.dateFormat('%B %e, %Y', this.x) + '<br> Impressions : ' + this.y;
                                }
                            }
                        }
                    }
                }
            },
            function(error) {
                alert("Error retrieving API data, " + error.statusText);
            });
    };


    $scope.loadCameraAnlytics = function() {

        $scope.prismErrorStatus = true;

        prismService.getAllAccounts().then(function(response) {
                if (response.data) {
                    response = response.data;
                    $scope.accountList = [];
                    angular.forEach(response, function(a) {
                        $scope.accountList.push(a);
                    });
                    $scope.accountId = $scope.accountList[0].id;

                    prismService.getAllSites($scope.accountId).then(function(response) {
                        if (response.data) {
                            response = response.data;
                            $scope.sitesLists = response.data;
                            $scope.dynamicSitesListArray = [];
                            $scope.dynamicSitesList = {};
                            $scope.cameraLoader = false;

                            if (response.status == "failure") {
                                $scope.prismErrorStatus = false;
                            } else {
                                angular.forEach($scope.sitesLists, function(v, k) {
                                    var cday = moment.tz(v.timezone).format("dddd").toLowerCase();
                                    var ctime = moment.tz(v.timezone).format("HH:mm:ss");
                                    angular.forEach(v.business_hours, function(val, key) {
                                        if (key == cday) {
                                            if (val.open <= ctime && val.close >= ctime) {
                                                $scope.status1 = 'OPEN';
                                            } else {
                                                $scope.status1 = 'CLOSE';
                                            }
                                        }
                                    });
                                    $scope.dynamicSitesList = {
                                        'id': v.id,
                                        'name': v.name,
                                        'reference_image_url': v.reference_image_url,
                                        'address': v.address,
                                        'site_date': moment.tz(v.timezone).format("dddd, MMM D"),
                                        'site_time': moment.tz(v.timezone).format("H:mm a z"),
                                        'status1': $scope.status1
                                    }
                                    $scope.dynamicSitesListArray.push($scope.dynamicSitesList);
                                });
                            }
                        }
                    }, function(error) {
                        alert("Error retrieving API data, " + error.statusText);
                    });
                }
            },
            function(error) {
                alert("Error retrieving API data, " + error.statusText);
            });
    };


    $scope.loadWifiAnalytics = function() {
        $scope.fortiErrorStatus = true;
        fortinetService.getFortinentTree().then(function(res) {
            if (res.data) {
                res = res.data;
                if (res.status == "failure") {
                    $scope.fortiErrorStatus = false;
                    $scope.wifiLoader = false;
                } else {
                    $scope.storeInst = $scope.getObject(res);
                    $scope.storeId = $scope.storeInst[0].id;
                    $scope.storeName = $scope.storeInst[0].name;
                    // time in miliseconds
                    var startDate = moment().subtract(30, 'day').utc().startOf('day').format('x');
                    var endDate = moment().utc().endOf('day').format('x');


                    var dateForNewVsRep = moment().subtract(29, 'day').utc().startOf('day').format('x');

                    startDate = parseInt(startDate) + 1000; // time starts from 00:00:01
                    endDate = parseInt(endDate) - 999; // time ends at 23:59:59
                    dateForNewVsRep = parseInt(dateForNewVsRep) + 1000; // time from 00:00:01

                    var captureData = {
                        "branchs": [],
                        "stores": [$scope.storeId],
                        "flors": [],
                        "accessPoints": [],
                        "conf": {
                            "accessPoints": [],
                            "areas": [],
                            "distanceInMeters": "5",
                            "dwellTimeOfEmployee": 28800000,
                            "endTimeInMsec": parseInt(endDate),
                            "engagedTimeInMsec": 1200000,
                            "filterDeviceOUIs": true,
                            "filterEmployees": true,
                            "filterFixEquipment": true,
                            "filterRandomMacs": true,
                            "filterSubSumpling": false,
                            "minDateForNewVsRep": parseInt(dateForNewVsRep),
                            "minValOfObsFixEquipment": "1000",
                            "resolution": "DAY",
                            "startTimeInMsec": parseInt(startDate),
                            "subSamplingNumber": "3",
                            "tableName": "mostRecentPositionWeightedAverage",
                            "timeToMergeInMsec": 300000,
                            "visitedTimeInMsec": 180000
                        }
                    };

                    fortinetService.getNewVsRepeat(captureData).then(function(response) {
                        if (response.data) {
                            $scope.newVsRepeatValues = response.data;
                            $scope.graphVisible = true;
                            $scope.errorCapt = false;
                            $scope.wifiLoader = false;

                            var NewObs = [];
                            var NewPers = [];
                            var Repeat = [];
                            var RepeatPers = [];
                            var Total = [];
                            var TotalPers = [];
                            var data = [];
                            for (var i = 0; i < $scope.newVsRepeatValues.length; i++) {
                                NewPers.push([$scope.newVsRepeatValues[i].date, $scope.newVsRepeatValues[i].newPers]);
                                NewObs.push([$scope.newVsRepeatValues[i].date, $scope.newVsRepeatValues[i].new]);
                                Repeat.push([$scope.newVsRepeatValues[i].date, $scope.newVsRepeatValues[i].repeat]);
                                RepeatPers.push([$scope.newVsRepeatValues[i].date, $scope.newVsRepeatValues[i].repeatPers]);
                                Total.push([$scope.newVsRepeatValues[i].date, $scope.newVsRepeatValues[i].repeat + $scope.newVsRepeatValues[i].new]);
                                TotalPers.push([$scope.newVsRepeatValues[i].date, $scope.newVsRepeatValues[i].repeatPers + $scope.newVsRepeatValues[i].newPers]);

                            }
                            data[0] = {
                                name: "New personsss",
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
                            var seriesData1 = [data[0], data[1], data[2], data[3], data[4], data[5]];

                            $scope.fortinenthomeChart = {
                                chart: {
                                    type: 'line',
                                    marginTop: 40
                                    
                                },
                                title: {
                                    text: 'New versus Repeat for ' + $scope.storeName + ' store'                                     
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
                        }
                    }, function(error) {
                        alert("Error retrieving API data, " + error.statusText);
                    });
                }
            }
        }, function(error) {
            alert("Error retrieving API data, " + error.statusText);
        });
    };

    if ($scope.currentUser.CStoreAnalyticsLoadedStatus) {
        $scope.loadCStoreInformation();
    } else {
        $scope.cStoreLoader = false;
    }
    $scope.loadCameraAnlytics();
    $scope.loadWifiAnalytics();


});