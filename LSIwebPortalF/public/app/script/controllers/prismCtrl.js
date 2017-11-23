angular.module('lsi').controller("prismCtrl", function($scope, prismService, $compile) {

    $scope.sitelistdetails = false;
    $scope.insightlist = true;
    $scope.zonelist = true;
    $scope.loadAllList = false;
    $scope.prismErrorStatus = true;
    $scope.bussHrs = true;
    var fulltime = '00:00:00';

    /* onload function to list of sites */
    $scope.loadSites = function() {
        $scope.cameraMainLoader = true;
        prismService.getAllAccounts(function(response) {
            $scope.accountList = [];
            angular.forEach(response, function(a) {
                $scope.accountList.push(a);
            });
            $scope.accountSelected = $scope.accountList[0];
            $scope.accountId = $scope.accountList[0].id;
            $scope.getAllSitesFunc();
        });

    };

    /* select Account function */
    $scope.onchangeAccount = function(item) {
        $scope.cameraLoader = true;
        $scope.accountId = item.id;
        $scope.getAllSitesFunc();
    }

    /* All site list function */
    $scope.getAllSitesFunc = function() {

        prismService.getAllSites($scope.accountId, function(response) {
            $scope.cameraLoader = false;
            $scope.cameraMainLoader = false;
            $scope.sitesLists = response.data;
            $scope.dynamicSitesListArray = [];
            $scope.dynamicSitesList = {};

            if (response.status == "failure") {
                $scope.prismErrorStatus = false;
            } else {
                $scope.prismErrorStatus = true;
                $scope.sitelistview = true;
                $scope.cameraMainLoader = false;
                angular.forEach($scope.sitesLists, function(v, k) {
                    var cday = moment.tz(v.timezone).format("dddd").toLowerCase();
                    var ctime = moment.tz(v.timezone).format("HH:mm:ss");                    
                    
                    angular.forEach(v.business_hours, function(val, key) {

                        if (key == cday) {
                            if ((val.open <= ctime && val.close >= ctime ) || (val.open == fulltime && val.close == fulltime)) {
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

        });

    }

    /* All site details function */
    $scope.sitedetails = function(siteId) {
        $scope.sSiteID = siteId;
        $scope.sitelistdetails = true;
        $scope.sitelistview = false;
        $scope.cameraMainLoader = false;
        $scope.cameraZoneLoader = true;

        prismService.getSitesById($scope.accountId, siteId, function(response) {
            $scope.cameraZoneLoader = false;
            $scope.sdetails = response;
            var cday = moment.tz($scope.sdetails.timezone).format("dddd").toLowerCase();
            var ctime = moment.tz($scope.sdetails.timezone).format("HH:mm:ss");
            $scope.currerntTime = moment.tz($scope.sdetails.timezone).format("YYYY-MM-DD HH:mm:ss");
            $scope.siteDDate = moment.tz($scope.sdetails.timezone).format("dddd, MMM D");
            $scope.siteDTime = moment.tz($scope.sdetails.timezone).format("H:mm a z");

            var serverDate = moment.tz($scope.sdetails.timezone).format("YYYY-MM-DD HH:mm:ss");
            $scope.weekday = moment.tz($scope.sdetails.timezone).format("dddd");

            var cdate = moment(serverDate, "YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD");
            var firstDate = moment(cdate, "YYYY-MM-DD").day(0).format("YYYY-MM-DD");
            var lastDate = moment(cdate, "YYYY-MM-DD").day(6).format("YYYY-MM-DD");
            $scope.weeklyDate = firstDate + " - " + lastDate;

            /* function to select previous week */
            $scope.preWeek = function() {
                var slitedDate = $scope.weeklyDate.split(/[ ,]+/);
                var sTime = slitedDate[0];
                var eTime = slitedDate[2];
                var pf = moment(sTime, "YYYY-MM-DD").add(-7, 'days').format("YYYY-MM-DD");
                var pl = moment(eTime, "YYYY-MM-DD").add(-7, 'days').format("YYYY-MM-DD");
                $scope.startTime = pf;
                $scope.endTime = moment($scope.startTime, "YYYY-MM-DD").add(7, 'days').format("YYYY-MM-DD");;
                $scope.weeklyDate = pf + " - " + pl;
                $scope.loadZones();
                $scope.zonereportschart();
                $scope.loadInsightConfiguration($scope.pageNo);
            }

            /* function to select next week */
            $scope.nextWeek = function() {
                var slitedDate = $scope.weeklyDate.split(/[ ,]+/);
                var sTime = slitedDate[0];
                var eTime = slitedDate[2];
                var pf = moment(sTime, "YYYY-MM-DD").add(7, 'days').format("YYYY-MM-DD");
                var pl = moment(eTime, "YYYY-MM-DD").add(7, 'days').format("YYYY-MM-DD");
                $scope.startTime = pf;
                $scope.endTime = moment($scope.startTime, "YYYY-MM-DD").add(7, 'days').format("YYYY-MM-DD");;
                $scope.weeklyDate = pf + " - " + pl;
                $scope.loadZones();
                $scope.zonereportschart();
                $scope.loadInsightConfiguration($scope.pageNo);
            }

            var slitedDate = $scope.weeklyDate.split(/[ ,]+/);
            var sTime = slitedDate[0];
            var eTime = slitedDate[2];

            $scope.todayDate = moment(cdate, "YYYY-MM-DD").utc().format("YYYY-MM-DD");
            $scope.endD = moment(cdate, "YYYY-MM-DD").utc().add(1, 'days').format("YYYY-MM-DD");
            $scope.startTime = sTime;
            $scope.endTime = moment($scope.startTime, "YYYY-MM-DD").add(7, 'days').format("YYYY-MM-DD");;

            angular.forEach($scope.sdetails.business_hours, function(val, key) {
                if (key == cday) {
                    if ((val.open <= ctime && val.close >= ctime ) || (val.open == fulltime && val.close == fulltime)) {
                        $scope.status = 'OPEN';
                    } else {
                        $scope.status = 'CLOSE';
                    }
                }
            });

        });

        $scope.loadZones = function() {
            prismService.getAllZones($scope.accountId, function(response) {
                $scope.zlists = response;

                var zoneId = $scope.zlists.map(function(zId) {
                    return zId.id;
                });

                $scope.objectT = {};
                $scope.analyticsSites = [];
                $scope.analyticsCountsValue = [];
                $scope.analyticsCountsValue1 = [];
                angular.forEach($scope.zlists, function(v, k) {
                    $scope.objectT = {
                        'zoneId': v.id,
                        'name': v.name,
                        'siteId': siteId
                    }
                    $scope.analyticsSites.push($scope.objectT);
                });

                angular.forEach($scope.analyticsSites, function(val, key) {
                    prismService.getAnalyticsSites(val.zoneId, val.siteId, 'change', 'count', 'hours', $scope.bussHrs, $scope.startTime, $scope.endTime, function(response) {
                        var c;
                        if (response.count == null) {
                            c = 0;
                        } else {
                            c = response.count;
                        }
                        $scope.analyticsCountsValue.push({
                            'zoneId': val.zoneId,
                            'siteId': val.siteId,
                            'zoneName': val.name,
                            'countValue': c,
                            'changeValue': response.change
                        });
                    });
                });


                angular.forEach($scope.analyticsSites, function(val, key) {
                    prismService.getAnalyticsSites(val.zoneId, val.siteId, 'change', 'count', 'hours', $scope.bussHrs, $scope.todayDate, $scope.endD, function(response) {
                        var c;
                        if (response.count == null) {
                            c = 0;
                        } else {
                            c = response.count;
                        }
                        $scope.analyticsCountsValue1.push({
                            'zoneId': val.zoneId,
                            'zoneName': val.name,
                            'countValue': c,
                            'changeValue': response.change
                        });
                    });
                });

            });
        }
        $scope.loadZones();
    };

    $scope.gobacktositelist = function() {
        $scope.cameraMainLoader = true;
        $scope.loadSites();
        $scope.sitelistdetails = false;
        $scope.sitelistview = true;

    };
    $scope.largeinsight = function(data) {
        $scope.sitelistdetails = true;
        $scope.insightenlarged = true;
        $scope.insightlist = false;
        $scope.insightSelectedListData = data;
    };
    $scope.gobacktoinsightlist = function() {
        $scope.sitelistdetails = true;
        $scope.insightenlarged = false;
        $scope.insightlist = true;
    };



    $scope.zonereports = function(zId, sId, zName) {
        $scope.sitelistdetails = true;
        $scope.zonereportsdetails = true;
        $scope.zonelist = false;
        $scope.zName = zName;

        $scope.zonereportschart = function() {
            $scope.endTime = moment($scope.startTime, "YYYY-MM-DD").add(7, 'days').format("YYYY-MM-DD");
            prismService.getZoneCountChange($scope.bussHrs, 'change', 'count', sId, $scope.startTime, $scope.endTime, zId, function(response) {
                $scope.zoneCountChange = response;
            });

            $scope.startDate = [];

            $scope.currentWeekData = [];
            $scope.previousWeekData = [];
            $scope.currentWeekHourData = [];
            $scope.previousWeekHourData = [];
            $scope.hourTime = [];

            prismService.getZoneCountDayHours($scope.bussHrs, 'count', 'typical', 'day', sId, $scope.startTime, $scope.endTime, zId, function(response) {
                $scope.zoneCountDay = response;

                $scope.currerntTime = moment.tz($scope.sdetails.timezone).format("YYYY-MM-DD HH:mm:ss");

                angular.forEach($scope.zoneCountDay, function(v, k) {
                    var t, c;
                    if (v.typical == null) {
                        t = 0
                    } else {
                        t = v.typical
                    };
                    if (v.count == null) {
                        c = 0
                    } else {
                        c = v.count
                    };
                    $scope.currentWeekData.push(c);
                    $scope.previousWeekData.push(t);
                    var dates = moment(v.start, moment.ISO_8601).format('YYYY-MM-DD');
                    $scope.startDate.push(parseInt(moment.utc(dates, 'YYYY-MM-DD').format('x')));
                });

                //function for hh:mm:ss to seconds
                function hmsToSecondsOnly(str) {
                    var p = str.split(':'),
                        s = 0,
                        m = 1;
                    while (p.length > 0) {
                        s += m * parseInt(p.pop(), 10);
                        m *= 60;
                    }
                    return s;
                }

                //function for seconds to hh:mm:ss 
                function secondsToHms(d) {
                    d = Number(d);

                    var h = Math.floor(d / 3600);
                    var m = Math.floor(d % 3600 / 60);
                    var s = Math.floor(d % 3600 % 60);
                    return ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);
                }

                var startTimeSeconds = [];
                var closeTimeSeconds = [];

                angular.forEach($scope.sdetails.business_hours, function(val, key) {
                    if (val.open != null) {
                        startTimeSeconds.push(hmsToSecondsOnly(val.open))
                    }
                    if (val.close != null) {
                        closeTimeSeconds.push(hmsToSecondsOnly(val.close))
                    }
                });

                var startOfDaySeconds = Math.min.apply(Math, startTimeSeconds);
                var closeOfDaySeconds = Math.max.apply(Math, closeTimeSeconds);

                var startOfDayTime = secondsToHms(startOfDaySeconds);
                var closeOfDayTime = secondsToHms(closeOfDaySeconds);

                var h = '';
                var workingHours = [];

                for (i = 0; i < 23; i++) {
                    var ct = closeOfDaySeconds;
                    if (h >= ct) {
                        break;
                    }
                    h = startOfDaySeconds + i * 3600;
                    workingHours.push(secondsToHms(h));
                }
                $scope.workHours = workingHours.pop();

                $scope.zoneCountDayFinal = [];

                prismService.getZoneCountDayHours($scope.bussHrs, 'count', 'typical', 'hour', sId, $scope.startTime, $scope.endTime, zId, function(response) {
                    $scope.zoneCountHour = response;

                    angular.forEach($scope.zoneCountDay, function(v, k) {

                        $scope.currentWeekHourData.push(v.count);
                        $scope.previousWeekHourData.push(v.typical);
                        $scope.hourTime.push({
                            'start': v.start,
                            'stop': v.stop
                        });
                    });

                    angular.forEach($scope.zoneCountDay, function(v, k) {

                        $scope.currentWeekHourData.push(v.count);
                        $scope.previousWeekHourData.push(v.typical);
                        $scope.hourTime.push({
                            'start': v.start,
                            'stop': v.stop
                        });
                    });

                    $scope.hChartData = [];
                    $scope.selectedData = [];
                    $scope.previousData = [];
                    var k = 0;
                    for (var i = 0; i < 7; i++) {
                        for (var j = 0; j < 24; j++) {
                            var color, count, tColor; 
                            var stopTime = moment($scope.zoneCountHour[k].stop, moment.ISO_8601).format('x');
                            var cTime = moment($scope.currerntTime, 'YYYY-MM-DD HH:mm:ss').format('x');
                            
                            if (stopTime <= cTime) {
                                count = $scope.zoneCountHour[k].count;
                                color = '';
                                if (count == null) {
                                    color = '#F0F9FF';
                                } else if (count == 0) {
                                    color = '#e9f3fc';
                                } else if (count > 0 && count < 15) {
                                    color = '#bcdaf5';
                                } else if (count >= 15 && count < 30) {
                                    color = '#a6cdf2';
                                } else if (count >= 30 && count < 50) {
                                    color = '#8fc1ef';
                                } else if (count >= 50 && count < 80) {
                                    color = '#79b4ec';
                                } else if (count >= 80 && count < 120) {
                                    color = '#63a8e9';
                                } else if (count >= 120 && count < 170) {
                                    color = '#4d9ce6';
                                } else if (count > 170) {
                                    color = '#368fe2';
                                } 
                                $scope.selectedData.push({                              
                                    'value': count,  
                                    'color': color,                                                     
                                    'x':i,
                                    'y':j
                                });                       
                            } 
                            else if (stopTime > cTime) {
                                var tCount = $scope.zoneCountHour[k].typical;
                                tColor = '';
                                if (tCount == null) {
                                    tColor = '#F0F9FF';
                                } else if (tCount == 0) {
                                    tColor = '#d9d9d9';
                                } else if (tCount > 0 && tCount < 15) {
                                    tColor = '#b3b3b3';
                                } else if (tCount >= 15 && tCount < 35) {
                                    tColor = '#a6a6a6';
                                } else if (tCount >= 30 && tCount < 50) {
                                    tColor = '#999999';
                                } else if (tCount >= 50 && tCount < 80) {
                                    tColor = '#8c8c8c';
                                } else if (tCount >= 80 && tCount < 120) {
                                    tColor = '#808080';
                                } else if (tCount >= 120 && tCount < 170) {
                                    tColor = '#737373';
                                } else if (tCount > 170) {
                                    tColor = '#666666';
                                }  
                                $scope.previousData.push({                               
                                    'value': tCount,  
                                    'color': tColor,                                                     
                                    'x':i,
                                    'y':j
                                });                                                               
                            }
                                               
                            k = k + 1;
                        }
                    }
                    $scope.hChartData = $scope.selectedData.concat($scope.previousData);
                    $scope.loadCharts();
                     if (stopTime <= cTime) {
                     }
                });
            });

        }
        $scope.loadCharts = function() {
            Highcharts.chart('cemeraBarChart', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: ''
                },
                legend: {
                    align: 'right',
                    verticalAlign: 'top',
                    x: 0,
                    y: 0,
                    symbolHeight: 16,
                    symbolWidth: 16,
                    symbolRadius: 0
                },
                xAxis: {
                    categories: $scope.startDate,
                    type: 'datetime',
                    labels: {
                        formatter: function() {
                            return Highcharts.dateFormat('%a', this.value);
                        }
                    },
                    crosshair: true,
                    tickLength: 0
                },
                yAxis: {
                    min: 0,
                    gridLineWidth: 0,
                    title: {
                        text: null
                    }
                },
                tooltip: {
                    shared: true,
                    formatter: function() {
                        var tooltipText = '<span>' +
                            Highcharts.dateFormat(
                                '%A, %b %e, %Y', this.x) +
                            '</span><br/>';
                        $.each(this.points, function(i, series) {
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
                },

                plotOptions: {
                    column: {
                        pointPadding: 0.1,
                        borderWidth: 0
                    }
                },
                series: [{
                    name: 'Previous Week',
                    data: $scope.previousWeekData,
                    color: '#ddd'

                }, {
                    name: 'Selected Week',
                    data: $scope.currentWeekData,
                    color: '#7cb5ec'
                }],
                exporting: {
                    enabled: false
                },

            });

            Highcharts.chart('cemeraHeatChart', {
                chart: {
                    type: 'heatmap',
                },
                title: {
                    text: ''
                },
                xAxis: {
                    categories: $scope.startDate,
                    type: 'datetime',
                    labels: {
                        formatter: function() {
                            return Highcharts.dateFormat('%a', this.value);
                        }
                    },
                    crosshair: true,
                    tickLength: 0
                },
                yAxis: {
                    categories: ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'],
                    title: null,
                    gridLineWidth: 0,
                    reversed: true
                },
                tooltip: {
                    formatter: function() {
                        return '<span>' + Highcharts.dateFormat(
                        '%A, %b %e, %Y', new Date(this.series.xAxis.categories[this.point.x])) +
                            '</span><br/> <b>' + this.point.value + '</b> items on <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
                    }
                },

                series: [{
                    borderWidth: 1,
                    colsize: 0.85,
                    borderColor: '#FFFFFF',
                    data: $scope.hChartData,
                    formatter: function() {
                        if (this.y > 0)
                            return this.y;
                    },
                    dataLabels: {
                        enabled: true,
                        allowOverlap: true,
                        style: {
                            color: '#000000',
                            fontSize: "10px",
                            textOutline: "0px",
                            fontWeight: 'normal'
                        }
                    }
                }],

                exporting: {
                    enabled: false
                },

                legend: {
                    enabled: false
                }
            });
        }

        $scope.zonereportschart();
    };


    $scope.gobacktozonelist = function() {
        $scope.sitelistdetails = true;
        $scope.zonereportsdetails = false;
        $scope.zonelist = true;
    };
    $scope.analytics = function() {
        $scope.sitelistdetails = true;
        $scope.zonereportsdetails = false;
        $scope.zonelist = true;
    };

    $scope.visualinsights = function() {
        $scope.sitelistdetails = true;
        $scope.insightenlarged = false;
        $scope.insightlist = true;
        $scope.pageNo = 1;
        $scope.loadInsightConfiguration($scope.pageNo);
    };

    $scope.loadInsightConfiguration = function(pageNo) {
        $scope.insightListData = [];
        $scope.insightObj = {};
        var insightImg = '',
            insightsPath = '',
            insightsActivity = '';
        prismService.getAllInsightConfig($scope.accountId, function(response) {
            angular.forEach(response, function(v, k) {
                prismService.getInsightConfig($scope.accountId, v.id, pageNo, function(res) {
                    angular.forEach(res.results, function(val, key) {
                        // finding path and activity inside image_url of response and a
                        insightImg = val.image_url;
                        var cameraId = insightImg.substr((insightImg.search("insights/") + 9), 6);
                        if (insightImg.indexOf("activity") > -1 || insightImg.indexOf("traffic") > -1) {
                            insightsActivity = "activity";
                            insightsPath = "";
                        }
                        if (insightImg.indexOf("path") > -1) {
                            insightsPath = "path";
                            insightsActivity = "";
                        }
                    });
                    $scope.insightObj = {
                        'id': v.id,
                        'camera_name': v.name,
                        'insightsActivity': insightsActivity,
                        'insightsPath': insightsPath,
                        'image_url': insightImg
                    };
                    $scope.insightListData.push($scope.insightObj);
                    $scope.insightListDataLength = $scope.insightListData.length;
                });
            });
        });

    };
    $scope.loadSites();


});