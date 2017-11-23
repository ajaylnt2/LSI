webpackJsonp([0],Array(81).concat([
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(82);
__webpack_require__(83);
__webpack_require__(84);
__webpack_require__(85);
__webpack_require__(86);
__webpack_require__(87);
__webpack_require__(88);
__webpack_require__(89);
__webpack_require__(90);
__webpack_require__(91);
__webpack_require__(92);
__webpack_require__(93);
__webpack_require__(94);
__webpack_require__(95);
__webpack_require__(96);
__webpack_require__(97);
__webpack_require__(98);
__webpack_require__(99);
__webpack_require__(100);
__webpack_require__(101);
__webpack_require__(102);
__webpack_require__(103);
__webpack_require__(104);
__webpack_require__(105);
__webpack_require__(106);
__webpack_require__(107);
__webpack_require__(108);
__webpack_require__(109);
__webpack_require__(110);
__webpack_require__(111);
__webpack_require__(112);
__webpack_require__(113);
__webpack_require__(114);
__webpack_require__(115);
__webpack_require__(116);
__webpack_require__(117);
__webpack_require__(118);
module.exports = __webpack_require__(119);


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {﻿// app.js Document
(function(angular) {
    "use strict";
    angular.module('lsi', ['ui.router', 'ngBootstrap', 'angularModalService', 'ngSanitize', 'ngCookies', 'ui.bootstrap', 'rzModule']);

    angular.module('lsi')
        .config(['$httpProvider', '$stateProvider', '$urlRouterProvider', function($httpProvider, $stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/login");
            $stateProvider
                .state("common", {
                    url: "/common",
                    templateUrl: "views/common.html",
                    controller: "commonCtrl",
                    abstract: true,
                    params: {
                        itemList: {
                            value: null
                        }
                    }
                })
                .state("login", {
                    url: "/login",
                    templateUrl: "views/login.html",
                    controller: "loginCtrl",
                    params: {
                        itemList: {
                            value: null
                        }
                    }
                })
                .state("dashboard", {
                    url: "/dashboard",
                    parent: "common",
                    templateUrl: "views/dashboard.html",
                    controller: "dashboardCtrl"
                })
                .state("sparkfly", {
                    url: "/cstoreanalytics",
                    parent: "common",
                    templateUrl: "views/sparkfly.html",
                    controller: "sparkflyCtrl"
                })
                .state("prism", {
                    url: "/cameraanalytics",
                    parent: "common",
                    templateUrl: "views/prism.html",
                    controller: "prismCtrl"
                })
                .state("fortinent", {
                    url: "/wifianalytics",
                    parent: "common",
                    templateUrl: "views/fortinent.html",
                    controller: "fortinentCtrl",
                    abstract: true,
                })
                .state('fortinent.fortinenthome', {
                    url: '/wifianalyticshome',
                    templateUrl: 'views/fortinenthome.html',
                    controller: 'fortinenthomeCtrl'
                })
                .state('fortinent.fortinentcustdwelldist', {
                    url: '/wifianalyticscustdwelldist',
                    templateUrl: 'views/fortinentcustdwelldist.html',
                    controller: 'fortinentcustdwelldistCtrl'
                })
                .state('fortinent.fortinentfreqdist', {
                    url: '/wifianalyticsfreqdist',
                    templateUrl: 'views/fortinentfreqdist.html',
                    controller: 'fortinentfreqdistCtrl'
                })
                .state('fortinent.fortinentpersonvisible', {
                    url: '/wifianalyticspersonvisible',
                    templateUrl: 'views/fortinentpersonvisible.html',
                    controller: 'fortinentpersonvisibleCtrl'
                })
                .state('fortinent.fortinentpersontophours', {
                    url: '/wifianalyticspersontophours',
                    templateUrl: 'views/fortinentpersontophours.html',
                    controller: 'fortinentpersontophoursCtrl'
                })
                .state('fortinent.fortinentcustrecedist', {
                    url: '/wifianalyticscustrecedist',
                    templateUrl: 'views/fortinentcustrecedist.html',
                    controller: 'fortinentcustrecedistCtrl'
                })
                .state('fortinent.fortinentrealcalibration', {
                    url: '/wifianalyticsrealcalibration',
                    templateUrl: 'views/fortinentrealcalibration.html',
                    controller: 'fortinentrealcalibrationCtrl'
                })
                .state('fortinent.fortinentrealtimetrack', {
                    url: '/wifianalyticsrealtimetrack',
                    templateUrl: 'views/fortinentrealtimetrack.html',
                    controller: 'fortinentrealtimetrackCtrl'
                })
                .state('fortinent.fortinentrealdensheatmap', {
                    url: '/wifianalyticsrealdensheatmap',
                    templateUrl: 'views/fortinentrealdensheatmap.html',
                    controller: 'fortinentrealdensheatmapCtrl'
                })
                .state('fortinent.fortinentpmapcdwelltime', {
                    url: '/wifianalyticspmapcdwelltime',
                    templateUrl: 'views/fortinentpmapcdwelltime.html',
                    controller: 'fortinentpmapcdwelltimeCtrl'
                })
                .state('fortinent.fortinentpmapcpersons', {
                    url: '/wifianalyticspmapcpersons',
                    templateUrl: 'views/fortinentpmapcpersons.html',
                    controller: 'fortinentpmapcpersonsCtrl'
                })
                .state('fortinent.fortinentpmapctraffic', {
                    url: '/wifianalyticspmapctraffic',
                    templateUrl: 'views/fortinentpmapctraffic.html',
                    controller: 'fortinentpmapctrafficCtrl'
                })
                .state('fortinent.fortinentpmappophotspot', {
                    url: '/wifianalyticspmappophotspot',
                    templateUrl: 'views/fortinentpmappophotspot.html',
                    controller: 'fortinentpmappophotspotCtrl'
                })
                .state('fortinent.fortinentcampcreate', {
                    url: '/wifianalyticscampcreate',
                    templateUrl: 'views/fortinentcampcreate.html',
                    controller: 'fortinentcampcreateCtrl'
                })
                .state('fortinent.fortinentcampresult', {
                    url: '/wifianalyticscampresult',
                    templateUrl: 'views/fortinentcampresult.html',
                    controller: 'fortinentcampresultCtrl'
                })
                .state("userdetails", {
                    url: "/userdetails",
                    parent: "common",
                    templateUrl: "views/userdetails.html",
                    controller: "userdetailsCtrl"
                });
        }]).run(function($rootScope, $state, $location, $cookieStore) {
            $rootScope.$state = $state;
            // keep user logged in after page refresh
            $rootScope.globals = $cookieStore.get('globals') || {};

            $rootScope.$on('$locationChangeStart', function(event, next, current) {
                // redirect to login page if not logged in and trying to access a restricted page
                var restrictedPage = $.inArray($location.path(), ['/login']) === -1;
                var loggedIn = $rootScope.globals.currentUser;
                if (restrictedPage && !loggedIn) {
                    console.log('before login');
                    $location.path('/login');
                }
                if (loggedIn && !restrictedPage) {
                    $location.path('/common/dashboard');
                }
            });

            // function to get and select first store in the tree
            var found = false;
            var finalObj = null;
            $rootScope.getObject = function(theObject) {
                if (theObject instanceof Array) {
                    for (let i = 0; i < theObject.length; i++) {
                        if (!found)
                            $rootScope.getObject(theObject[i]);
                    }
                } else {
                    for (let prop in theObject) {
                        if (theObject.hasOwnProperty(prop)) {
                            if (prop === "stores" && !found) {
                                if (theObject[prop].length > 0) {
                                    found = true;
                                    finalObj = theObject[prop];
                                    break;
                                }
                            }
                            if (theObject[prop] instanceof Object || theObject[prop] instanceof Array) {
                                $rootScope.getObject(theObject[prop]);
                            }
                        }
                    }
                }
                return finalObj;
            }

            $rootScope.dateFormat = 'yyyy-MM-dd';

            /*datepicker starts*/
            $rootScope.fortinetRanges = {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 days': [moment().subtract(7, 'days'), moment()],
                'Last 30 days': [moment().subtract(30, 'days'), moment()],
                'This month': [moment().startOf('month'), moment().endOf('month')]
            };
            /*datepicker ends*/

        });

}(window.angular));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 83 */
/***/ (function(module, exports) {

angular.module('lsi').constant('config', {
    API_URL: 'http://10.20.201.168:8080/'
});

/***/ }),
/* 84 */
/***/ (function(module, exports) {

﻿/*
This controller uses authService,sparkflyService,prismService,fortinetService to manage user login from the view
*/
angular.module('lsi').controller("loginCtrl", function($scope, $state, authService, sparkflyService, prismService, fortinetService) {

    // function to login into the app w.r.t the access of the user
    $scope.login = function(emailId, pwd) {
        authService.login(emailId, pwd).then(function(res) {
                if (res.data) {
                    res = res.data;
                    if (res.status == "success") {
                        sparkflyService.getSparkflyAuthentication(emailId).then(function(response) {
                                if (response.data) {
                                    response = response.data;
                                    sparkflyService.getAuthKey().then(function(response) {
                                            if (response.data) {
                                                response = response.data;
                                                if (response.authToken == '' || response.authToken == undefined) {
                                                    $scope.CStoreAnalyticsLoadedStatus = false;
                                                    authService.setCredentials(res.EmailId, res.UserName, res.role, res.UserId, res.CStoreAnalytics, res.CameraAnalytics, res.WifiAnalytics, $scope.CStoreAnalyticsLoadedStatus);
                                                    $state.go('dashboard');
                                                } else {
                                                    sparkflyService.postAuthKey(response.authToken).then(function(response) {
                                                            if (response.data) {
                                                                response = response.data;
                                                                $scope.CStoreAnalyticsLoadedStatus = true;
                                                                authService.setCredentials(res.EmailId, res.UserName, res.role, res.UserId, res.CStoreAnalytics, res.CameraAnalytics, res.WifiAnalytics, $scope.CStoreAnalyticsLoadedStatus);
                                                                $state.go('dashboard');
                                                            }
                                                        },
                                                        function(error) {
                                                            alert("Error retrieving API data, " + error.statusText);
                                                        });
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
                        prismService.getPrismTokenId(emailId).then(function(response) {}, function(error) {
                            alert("Error retrieving API data, " + error.statusText);
                        });
                        fortinetService.getFortinetAuthentication(emailId).then(function(response) {}, function(error) {
                            alert("Error retrieving API data, " + error.statusText);
                        });
                    } else {
                        $scope.error_message = "Enter valid Email Id and Password.";
                    }
                }
            },
            function(error) {
                alert("Error retrieving API data, " + error.statusText);
            });
    }

});

/***/ }),
/* 85 */
/***/ (function(module, exports) {

﻿/*
This controller uses ModalService to provide common template to all the state views
*/
angular.module('lsi').controller("commonCtrl", function($scope, ModalService, $cookieStore) {

    $scope.currentUser = $cookieStore.get('globals').currentUser;
    // model function to change password of the user
    $scope.pwdchangeShow = function() {
        ModalService.showModal({
            templateUrl: 'views/changepassword.html',
            controller: "changepasswordCtrl"
        }).then(function(modal) {
            modal.element.modal();
        });
    };
    // model function to view profile of user  
    $scope.viewprofileShow = function() {
        ModalService.showModal({
            templateUrl: 'views/viewprofile.html',
            controller: "viewprofileCtrl"
        }).then(function(modal) {
            modal.element.modal();
        });
    };

});

/***/ }),
/* 86 */
/***/ (function(module, exports) {

/*
This controller uses authService to manage user logout from the view
*/
angular.module('lsi').controller("logoutCtrl", function($scope, authService, $location, $cookies) {

    $scope.logout = function() {
        authService.clearCredentials();
        var cookies = $cookies.getAll();
        angular.forEach(cookies, function(v, k) {
            $cookies.remove(k);
        });
        $location.path('/');
        window.location.reload();
    };

});

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {﻿/*
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {﻿/*
This controller uses prismService to manage coupon details (sparkfly) from the view
*/
angular.module('lsi').controller("sparkflyCtrl", function($scope, sparkflyService, $cookieStore) {
    $scope.currentUser = $cookieStore.get('globals').currentUser;


    $scope.cStoreList = [{
        'id': '1',
        'name': 'Sales Information'
    }, {
        'id': '2',
        'name': 'Redemptions by Offer'
    }, {
        'id': '3',
        'name': 'Redemptions by Channel'
    }, {
        'id': '4',
        'name': 'Redemptions by Day'
    }, {
        'id': '5',
        'name': 'Redemptions by Location'
    }, {
        'id': '6',
        'name': 'Transaction Information'
    }, {
        'id': '7',
        'name': 'Landing Page Impression'
    }, {
        'id': '8',
        'name': 'Download Reports'
    }]
    $scope.selectedMode = {
        v: $scope.cStoreList[0].name
    };
    $scope.getCStoreListValue = $scope.selectedMode.v;

    /*datepicker starts*/

    $scope.dates = {
        startDate: moment().subtract(183, 'day'),
        endDate: moment()
    };

    $scope.chartLoaded = false;
    $scope.chartDivLoaded = false;
    $scope.noDateFound = false;
    $scope.myTansData1 = false;
    $scope.myTansData2 = false;
    $scope.loader = true;

    $scope.ranges = {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 days': [moment().subtract(7, 'days'), moment()],
        'Last 30 days': [moment().subtract(30, 'days'), moment()],
        'This month': [moment().startOf('month'), moment().endOf('month')]
    };
    /*datepicker ends*/

    $scope.getCStoreList = function(selectedMode, d) {
        $scope.dates = d;
        $scope.getCStoreListValue = selectedMode;
        $scope.getDate();
    };

    /* ============ Starts API Calls ========================= */

    $scope.getDate = function() {
        $scope.loader = true;
        $scope.chartDivLoaded = true;
        $scope.chartLoaded = false;
        $scope.noDateFound = false;
        $scope.myTansData1 = false;
        $scope.myTansData2 = false;
        $scope.authErrorStatus = false;

        // This time convertion is used in reports
        $scope.startDateFormat = moment(this.dates.startDate).format("MM/DD/YYYY");
        $scope.endDateFormat = moment(this.dates.endDate).format("MM/DD/YYYY");

        // Time in unix seconds.
        var startDate = moment.utc(this.dates.startDate).startOf('day').format('X');
        var endDate = moment.utc(this.dates.endDate).endOf('day').format('X');
        if (startDate == NaN || endDate == NaN) return;

        var dataArray = [];
        var seriesArray = [];
        var categoriesArray = [];

        if ($scope.getCStoreListValue == "Landing Page Impression") {
            $scope.getLandingPageImpression(startDate, endDate);
        } else {
            $scope.getAccountLevel(startDate, endDate);
        }
    };


    $scope.getLandingPageImpression = function(startDate, endDate) {
        sparkflyService.getImpressionsLevel(startDate, endDate).then(function(response) {
                if (response.data) {
                    response = response.data;
                    $scope.loader = false;
                    var data_items = response.report.impressions.data_items;
                    var series = response.report.impressions.series;
                    if (data_items.length == 0 && series.length == 0) {
                        $scope.noDateFound = true;
                        $scope.chartLoaded = false;
                    } else {
                        $scope.noDateFound = false;
                        $scope.chartLoaded = true;

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
                                text: 'Unique Visits'
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

    $scope.getAccountLevel = function(startDate, endDate) {
        sparkflyService.getAccountLevel(startDate, endDate).then(function(res) {
                if (res.data) {
                    res = res.data;
                    $scope.loader = false;
                    switch ($scope.getCStoreListValue) {
                        case 'Sales Information':
                            {
                                $scope.loadSalesInformation(res.sData);
                            }
                            break;
                        case 'Redemptions by Offer':
                            {
                                $scope.loadRedemptionsOffer(res.sData);
                            }
                            break;
                        case 'Redemptions by Channel':
                            {
                                $scope.loadRedemptionsChannel(res.sData);
                            }
                            break;
                        case 'Redemptions by Day':
                            {
                                $scope.loadRedemptionsDay(res.sData);
                            }
                            break;
                        case 'Redemptions by Location':
                            {
                                $scope.loadRedemptionsLocation(res.sData);
                            }
                            break;
                        case 'Transaction Information':
                            {
                                $scope.loadTransactionInformation(res.sData);
                            }
                            break;
                        case 'Download Reports':
                            {
                                $scope.loadDownloadReports(startDate, endDate, res.sData);
                            }
                            break;
                        default:
                            {}
                    }
                }
            },
            function(error) {
                alert("Error retrieving API data, " + error.statusText);
            });
    };

    $scope.loadSalesInformation = function(res) {
        $scope.chartLoaded = true;
        var hr_data = JSON.stringify(res.hourly_sales);
        if (hr_data == '[0,0,0,0,0]') {
            $scope.noDateFound = true;
            $scope.chartLoaded = false;
        } else {
            $scope.noDateFound = false;
            var dataArray = res.hourly_sales;
            var dataArraywithSymbol = [];
            for (i = 0; i < dataArray.length; i++) {
                var newElemt = "$" + dataArray[i];
                dataArraywithSymbol.push(newElemt);
            }
            $scope.chartOptions = {
                chart: {
                    type: 'bar'
                },
                title: {
                    text: '<html><b>Sales: $' + res.total_purchase_amount + '</b></html>'
                },
                xAxis: {
                    categories: ['open-11', '11-2', '2-4', '4-8', '8-close']
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Total Sales',
                        categories: dataArraywithSymbol
                    },
                    labels: {
                        overflow: 'justify',
                        formatter: function() {
                            return '$' + Math.abs(this.value) + '.00';
                        }
                    }
                },
                series: [{
                    name: 'Sales',
                    data: dataArray
                }],
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            chart: {
                                height: 300,
                                width: 300
                            },
                            subtitle: {
                                text: null
                            }
                        }
                    }]
                }
            };
        }
        var resultData = res.item_counts;
        if (resultData == '0' || res.number_of_items == '0') {
            $scope.noDateFound = true;
            $scope.chartLoaded = false;
        } else {
            $scope.noDateFound = false;
            var result = '';
            $.each(resultData, function(keyVal, value) {
                result = value;
            });
            $scope.chartOptionsTotal = {
                chart: {
                    type: 'bar'
                },
                title: {
                    text: '<html><b>Total Items: ' + res.number_of_items + '</b></html>'
                },
                xAxis: {
                    categories: ['Category']
                },
                yAxis: {
                    title: {
                        text: 'Total Item Sales',
                        categories: res.hourly_sales
                    }
                },
                series: [{
                    name: 'Items',
                    data: [result[0]]
                }],
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            chart: {
                                height: 300,
                                width: 300
                            },
                            subtitle: {
                                text: null
                            }
                        }
                    }]
                }
            };
        }
    };

    $scope.loadRedemptionsOffer = function(res) {
        $scope.chartLoaded = true;
        $scope.redemOffData = {};
        var resultData = JSON.stringify(res.redemptions_by_offer);
        if (resultData.length == 2) {
            $scope.noDateFound = true;
            $scope.chartLoaded = false;
        } else {
            $scope.noDateFound = false;
            var n, i, r, a, o, s, l, u;
            s = [], o = res.redemptions_by_offer;
            for (a in o) {
                i = o[a], l = [], u = 0;
                for (r in i) n = i[r], l.push([Date.parse(r), n]), u += n;
                l = l.sort(), s.push({
                    name: a + " - " + u,
                    data: l
                })
            }

            $scope.chartOptions = {
                chart: {
                    type: "line"
                },
                title: {
                    text: ""
                },
                xAxis: [{
                    type: "datetime",
                    title: {
                        text: null,
                        dateTimeLabelFormats: {
                            month: "%e. %b",
                            year: "%b"
                        }
                    }
                }],
                yAxis: [{
                    min: 0,
                    title: {
                        text: "Redemptions"
                    }
                }],
                series: s,
                legend: {
                    layout: "vertical",
                    label_formatter: function() {
                        return this.name
                    }
                },
                tooltip: {
                    formatter: function() {
                        return '' + Highcharts.dateFormat('%B %e, %Y', this.x) + '<br> Redemptions : ' + this.y;
                    }
                }
            };
        }
    };
    $scope.loadRedemptionsChannel = function(res) {
        $scope.chartLoaded = true;
        var resultData = JSON.stringify(res.redemptions_by_channel);
        if (resultData.length == 2) {
            $scope.noDateFound = true;
            $scope.chartLoaded = false;
        } else {
            $scope.noDateFound = false;
            var dataArray = res.redemptions_by_channel;
            var arr1 = [],
                arr2 = [],
                arr3 = [],
                obj1 = {};
            angular.forEach(dataArray, function(v, k) {
                angular.forEach(v, function(v1, k1) {
                    arr2.push(k1);
                    arr3.push(v1);
                });
                obj1 = {
                    "name": k,
                    "data": arr3
                };
                arr1.push(obj1);
            });

            $scope.chartOptions = {
                chart: {
                    type: "bar"
                },
                title: {
                    text: ""
                },
                xAxis: {
                    categories: arr2
                },
                yAxis: {
                    title: {
                        text: ''
                    }
                },
                series: [{
                    name: arr1[0].name,
                    data: arr3
                }]
            };
        }
    };
    $scope.loadRedemptionsDay = function(res) {
        $scope.chartLoaded = true;
        var resultData = JSON.stringify(res.redemptions_by_date);

        if (resultData.length == 2) {
            $scope.noDateFound = true;
            $scope.chartLoaded = false;
        } else {
            $scope.noDateFound = false;
            var dataArray = res.redemptions_by_date;
            var resRedByDate = Object.keys(dataArray).map(function(item) {
                return [item, dataArray[item]];
            })

            for (var i = 0; i < resRedByDate.length; i++) {
                resRedByDate[i][0] = moment.utc(resRedByDate[i][0], "M/D/YYYY").format("x");
            }
            resRedByDate.sort(sortFunction);

            function sortFunction(a, b) {
                if (a[0] === b[0]) {
                    return 0;
                } else {
                    return (a[0] < b[0]) ? -1 : 1;
                }
            }

            var resRedByDateFinal = resRedByDate.map(function(arr1) {
                return {
                    date: arr1[0],
                    count: arr1[1]
                }
            });
            var xaxisArray = [];
            var yaxisArray = [];
            for (var i = 0; i < resRedByDateFinal.length; i++) {
                xaxisArray.push(moment.utc(resRedByDateFinal[i].date, "x").format('x'));
                yaxisArray.push(resRedByDateFinal[i].count);
            }


            $scope.chartOptions = {
                chart: {
                    type: "line"
                },
                title: {
                    text: ""
                },
                xAxis: {
                    categories: xaxisArray,
                    labels: {
                        format: '{value:%e. %b}'
                    }
                },
                yAxis: {
                    title: {
                        text: 'Redemption Count',
                        categories: yaxisArray,
                    }
                },
                series: [{
                    name: 'Total Redemptions',
                    data: yaxisArray
                }],
                tooltip: {
                    formatter: function() {
                        return '' + Highcharts.dateFormat('%B %e, %Y', this.x) + '<br> Total Redemptions : ' + this.y;
                    }
                }
            }
        }
    };
    $scope.loadRedemptionsLocation = function(res) {
        $scope.chartLoaded = true;
        var resultData = JSON.stringify(res.redemptions_by_location);
        if (resultData.length == 2) {
            $scope.noDateFound = true;
            $scope.chartLoaded = false;
        } else {
            $scope.noDateFound = false;
            var dataArray = res.redemptions_by_location;
            var arr1 = [],
                arr2 = [];
            angular.forEach(dataArray, function(v, k) {
                arr2.push(k);
                arr1.push(v);
            });

            $scope.chartOptions = {
                chart: {
                    type: 'bar'
                },
                title: {
                    text: ''
                },
                xAxis: {
                    title: {
                        text: 'Locations'
                    },
                    categories: arr2,
                },
                yAxis: {
                    title: {
                        text: 'Redemption Count',
                        categories: arr1[0].data
                    }
                },
                series: [{
                    name: 'Redemptions by Location',
                    data: arr1
                }],
                tooltip: {
                    formatter: function() {
                        return '' + this.x + '<br> Total Redemptions: ' + this.y;
                    }
                }
            };
        }
    };
    $scope.loadTransactionInformation = function(res) {
        $scope.myTansData1 = true;
        $scope.myTansData2 = true;

        var resultData = JSON.stringify(res.average_purchase_by_location);
        if (resultData.length == 2) {
            $scope.noDateFound = true;
            $scope.myTansData1 = false;
            $scope.myTansData2 = false;
        } else {
            $scope.noDateFound = false;
            $scope.myTansData1 = true;
            var dataArray = res.average_purchase_by_location;
            var arr1 = [],
                arr2 = [];
            angular.forEach(dataArray, function(v, k) {
                arr1.push(v);
                arr2.push(k);
                var myTable1 = "<div class='mar_lg_rt_20'><div class='trans_table_hd'>Transaction Value</div> <table class='table table-bordered table-hover table-striped'><tr><th>Location</th>";
                myTable1 += "<th>Average Value</th>";

                for (var i = 0; i < arr1.length; i++) {
                    myTable1 += "<tr>";
                    myTable1 += "<td style=''>" + arr2[i] + "</td>";
                    myTable1 += "<td style=''> $" + Math.round(arr1[i] * 100) / 100 + "</td></tr>";
                }
                myTable1 += "</table></div>";

                $scope.myTable1 = myTable1;
            });

        }

        var resultData = JSON.stringify(res.average_items_per_transaction_per_location);
        if (resultData.length == 2) {
            $scope.noDateFound = true;
            $scope.myTansData1 = false;
            $scope.myTansData2 = false;
        } else {
            $scope.noDateFound = false;
            $scope.myTansData2 = true;
            var dataArray = res.average_items_per_transaction_per_location;
            var arr3 = [],
                arr4 = [];
            angular.forEach(dataArray, function(v, k) {
                arr3.push(v);
                arr4.push(k);
                var myTable2 = "<div class='mar_lg_rt_20'><div class='trans_table_hd'>Items per Ticket</div> <table class='table table-bordered table-hover table-striped'> <tr><th>Location</th>";
                myTable2 += "<th>Average Item Count</th>";

                for (var i = 0; i < arr4.length; i++) {
                    myTable2 += "<tr>";
                    myTable2 += "<td style=''>" + arr4[i] + "</td>";
                    myTable2 += "<td style=''> " + Math.round(arr3[i] * 100) / 100 + "</td></tr>";
                }
                myTable2 += "</table></div>";

                $scope.myTable2 = myTable2;
            });

        }
    };
    $scope.loadDownloadReports = function(startDate, endDate, res) {
        $scope.chartLoaded = true;

        $scope.generateRedemptionReport = function() {
            var arr1 = [];
            angular.forEach(res.redemptions_by_offer, function(v, k) {
                arr1.push(k);
            });
            var redemption = res.redemptions_by_offer[arr1[0]];
            var trand = res.average_purchase_by_location;
            var trandPerLoc = res.average_items_per_transaction_per_location;
            var redemByDate = res.redemptions_by_date;
            var redemByLoc = res.redemptions_by_location;

            var opts = [{
                sheetid: 'Redemptions',
                headers: true,
                caption: {
                    title: arr1[0]
                }
            }, {
                sheetid: 'Average Transaction Values',
                headers: true
            }, {
                sheetid: 'Average Item Count',
                headers: true
            }, {
                sheetid: 'Aggregated Redemptions',
                headers: true
            }, {
                sheetid: 'Redemptions By Location',
                headers: true
            }];


            $scope.redemItems = [];
            $scope.redemItems = Object.keys(redemption).map(function(item) {
                return [item, redemption[item]];
            })

            for (var i = 0; i < $scope.redemItems.length; i++) {
                $scope.redemItems[i][0] = moment.utc($scope.redemItems[i][0], "M/D/YYYY").format("x");
            }

            $scope.redemItems.sort(sortFunction);

            function sortFunction(a, b) {
                if (a[0] === b[0]) {
                    return 0;
                } else {
                    return (a[0] < b[0]) ? -1 : 1;
                }
            }
            $scope.redemItems = $scope.redemItems.map(function(arr1) {
                return {
                    "Date": moment.utc(arr1[0], "x").format("M/D/YYYY"),
                    "Redemption Count": arr1[1]
                }
            });


            $scope.redemItems.push({
                "Date": " ",
                "Redemption Count": " "
            }, {
                "Date": "Redemption Sub Total",
                "Redemption Count": res.total_redemptions
            }, {
                "Date": " ",
                "Redemption Count": " "
            }, {
                "Date": "Total Redemptions",
                "Redemption Count": res.total_redemptions
            })


            var avgTransacValue = [];
            angular.forEach(trand, function(val, key) {
                avgTransacValue.push({
                    "Location": key,
                    "Average Value": "$" + val
                });
            });
            avgTransacValue.push({
                "Location": " ",
                "Average Value": " "
            }, {
                "Location": "Total Average Ticket Value",
                "Average Value": "$" + res.average_purchase
            });


            var avgItemValue = [];
            angular.forEach(trandPerLoc, function(val, key) {
                avgItemValue.push({
                    "Location": key,
                    "Average Value": val
                });
            });
            avgItemValue.push({
                "Location": " ",
                "Average Value": " "
            }, {
                "Location": "Average Number of Items",
                "Average Value": res.average_items_per_transaction
            });


            var aggeRedem = [];
            angular.forEach(redemByDate, function(val, key) {
                aggeRedem.push({
                    "Date": key,
                    "Redemption Count": val
                });
            });
            aggeRedem.push({
                "Date": " ",
                "Redemption Count": " "
            }, {
                "Date": "Total no. of Redemptions",
                "Redemption Count": res.total_redemptions
            });



            var redemByLocation = [];
            angular.forEach(redemByLoc, function(val, key) {
                redemByLocation.push({
                    "Location": key,
                    "Redemption Count": val
                });
            });
            redemByLocation.push({
                "Location": " ",
                "Redemption Count": " "
            }, {
                "Location": "Total Redemptions",
                "Redemption Count": res.total_redemptions
            });


            alasql('SELECT INTO XLSX("redemption-report.xlsx",?) FROM ?', [opts, [$scope.redemItems, avgTransacValue, avgItemValue, aggeRedem, redemByLocation]]);

        }


        $scope.generateRawTranxReport = function() {
            $scope.items = [];
            angular.forEach(res.data, function(val, key) {
                $scope.items.push({
                    "First Impression": val.impression_datetime,
                    "Redemption": val.redemption_datetime,
                    "Customer ID": val.customer_identifier,
                    "Member ID": val.member_id,
                    "Store Name": val.store_name,
                    "Store ID": val.store_id,
                    "Offer Name": val.offer_name,
                    "Offer ID": val.offer_id,
                    "Channel Name": val.channel_name,
                    "Channel ID": val.channel_id,
                    "Creative": val.creative,
                    "POS Transaction ID": val.pos_transaction_id,
                    "Operator ID": val.operator_id,
                    "Discount Amount": val.value,
                    "Purchase Amount": val.purchase_amount,
                    "Items": val.items,
                    "Impressions": val.impression_ids
                });
            });
            alasql('SELECT * INTO XLSX("raw-transaction-report.xlsx",{sheetid:"raw-transaction-report",headers:true}) FROM ?', [$scope.items]);
        }

        $scope.generateConversionReport = function() {
            sparkflyService.getConversions(startDate, endDate).then(function(response) {
                    if (response.data) {
                        response = response.data;
                        //var summary = [];
                        var headerDetails = response.report.conversions.header;
                        var headingInfo0 = ["Sparkfly Channel Reporting - Summary", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
                        var headingInfo1 = ["Date Range: " + $scope.startDateFormat + " to " + $scope.endDateFormat + "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]

                        var headingInfo00 = ["Sparkfly Channel Reporting - Beacon", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
                        var headingInfo01 = ["Date Range: " + $scope.startDateFormat + " to " + $scope.endDateFormat + "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
                        var summary = response.report.conversions.Summary;
                        //headerDetails.shift();
                        var beacon = response.report.conversions.Beacon;
                        beacon.splice(0, 0, headingInfo00);
                        beacon.splice(1, 0, headingInfo01);
                        beacon.splice(2, 0, " ");
                        beacon.splice(3, 0, headerDetails);
                        //summary.join();
                        summary.splice(0, 0, headingInfo0);
                        summary.splice(1, 0, headingInfo1);
                        summary.splice(2, 0, " ");
                        summary.splice(3, 0, headerDetails);

                        var opts = [{
                            sheetid: 'Summary',
                            headers: false
                        }, {
                            sheetid: 'Beacon',
                            headers: false
                        }];
                        alasql('SELECT INTO XLSX("conversion-report.xlsx",?) FROM ?', [opts, [summary, beacon]]);

                    }
                },
                function(error) {
                    alert("Error retrieving API data, " + error.statusText);
                });
        }
    };
    if ($scope.currentUser.CStoreAnalyticsLoadedStatus) {
        $scope.getDate();
    } else {
        $scope.cStoreLoader = false;
    }

});

//---- functions sorting javascritp object datewise (* keep this code on top) starts here ----//
(function() {
    if (typeof Object.defineProperty === 'function') {
        try {
            Object.defineProperty(Array.prototype, 'sortBy', {
                value: sb
            });
        } catch (e) {}
    }
    if (!Array.prototype.sortBy)
        Array.prototype.sortBy = sb;

    function sb(f) {
        for (var i = this.length; i;) {
            var o = this[--i];
            this[i] = [].concat(f.call(o, o, i), o);
        }
        this.sort(function(a, b) {
            for (var i = 0, len = a.length; i < len; ++i) {
                if (a[i] != b[i])
                    return a[i] < b[i] ? -1 : 1;
            }
            return 0;
        });
        for (var i = this.length; i;) {
            this[--i] = this[i][this[i].length - 1];
        }
        return this;
    }
})();

//---- functions for sorting javascritp object datewise ends here --//
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {﻿/*
This controller uses prismService to manage camera analytics from the view
*/
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
        prismService.getAllAccounts().then(function(response) {
                if (response.data) {
                    response = response.data;
                    $scope.accountList = [];
                    angular.forEach(response, function(a) {
                        $scope.accountList.push(a);
                    });
                    $scope.accountSelected = $scope.accountList[0];
                    $scope.accountId = $scope.accountList[0].id;
                    $scope.getAllSitesFunc();
                }
            },
            function(error) {
                alert("Error retrieving API data, " + error.statusText);
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

        prismService.getAllSites($scope.accountId).then(function(response) {
                if (response.data) {
                    response = response.data;
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
                                    if ((val.open <= ctime && val.close >= ctime) || (val.open == fulltime && val.close == fulltime)) {
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
            },
            function(error) {
                alert("Error retrieving API data, " + error.statusText);
            });

    }

    /* All site details function */
    $scope.sitedetails = function(siteId) {
        $scope.sSiteID = siteId;
        $scope.sitelistdetails = true;
        $scope.sitelistview = false;
        $scope.cameraMainLoader = false;
        $scope.cameraZoneLoader = true;

        prismService.getSitesById($scope.accountId, siteId).then(function(response) {
                if (response.data) {
                    response = response.data;
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
                            if ((val.open <= ctime && val.close >= ctime) || (val.open == fulltime && val.close == fulltime)) {
                                $scope.status = 'OPEN';
                            } else {
                                $scope.status = 'CLOSE';
                            }
                        }
                    });
                }
            },
            function(error) {
                alert("Error retrieving API data, " + error.statusText);
            });

        $scope.loadZones = function() {
            prismService.getAllZones($scope.accountId).then(function(response) {
                    if (response.data) {
                        response = response.data;
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
                            prismService.getAnalyticsSites(val.zoneId, val.siteId, 'change', 'count', 'hours', $scope.bussHrs, $scope.startTime, $scope.endTime).then(function(response) {
                                if (response.data) {
                                    response = response.data;
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
                                }
                            });
                        });


                        angular.forEach($scope.analyticsSites, function(val, key) {
                            prismService.getAnalyticsSites(val.zoneId, val.siteId, 'change', 'count', 'hours', $scope.bussHrs, $scope.todayDate, $scope.endD).then(function(response) {
                                    if (response.data) {
                                        response = response.data;
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
                                    }
                                },
                                function(error) {
                                    alert("Error retrieving API data, " + error.statusText);
                                });
                        });

                    }
                },
                function(error) {
                    alert("Error retrieving API data, " + error.statusText);
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
            prismService.getZoneCountChange($scope.bussHrs, 'change', 'count', sId, $scope.startTime, $scope.endTime, zId).then(function(response) {
                    if (response.data) {
                        $scope.zoneCountChange = response.data;
                    }
                },
                function(error) {
                    alert("Error retrieving API data, " + error.statusText);
                });

            $scope.startDate = [];

            $scope.currentWeekData = [];
            $scope.previousWeekData = [];
            $scope.currentWeekHourData = [];
            $scope.previousWeekHourData = [];
            $scope.hourTime = [];

            prismService.getZoneCountDayHours($scope.bussHrs, 'count', 'typical', 'day', sId, $scope.startTime, $scope.endTime, zId).then(function(response) {
                    if (response.data) {
                        response = response.data;
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

                        prismService.getZoneCountDayHours($scope.bussHrs, 'count', 'typical', 'hour', sId, $scope.startTime, $scope.endTime, zId).then(function(response) {
                                if (response.data) {
                                    response = response.data;
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
                                                    'x': i,
                                                    'y': j
                                                });
                                            } else if (stopTime > cTime) {
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
                                                    'x': i,
                                                    'y': j
                                                });
                                            }

                                            k = k + 1;
                                        }
                                    }
                                    $scope.hChartData = $scope.selectedData.concat($scope.previousData);
                                    $scope.loadCharts();
                                    if (stopTime <= cTime) {}
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
        prismService.getAllInsightConfig($scope.accountId).then(function(response) {
                if (response.data) {
                    response = response.data;
                    angular.forEach(response, function(v, k) {
                        prismService.getInsightConfig($scope.accountId, v.id, pageNo).then(function(res) {
                                if (res.data) {
                                    res = res.data;
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

                                }
                            },
                            function(error) {
                                alert("Error retrieving API data, " + error.statusText);
                            });
                    });
                }
            },
            function(error) {
                alert("Error retrieving API data, " + error.statusText);
            });

    };
    $scope.loadSites();


});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 90 */
/***/ (function(module, exports) {

﻿/*
This controller uses fortinetService to manage the parent control for all the pages from the view
*/
angular.module('lsi').controller("fortinentCtrl", function($scope, fortinetService) {
    $scope.fortiErrorStatus = false;
    $scope.fortinetMainLoader = true;
    $scope.fortiSuccessStatus = false;

    // service to get tree structure status
    fortinetService.getFortinentTree().then(function(res) {
            if (res.data) {
                res = res.data;
                if (res.status == "failure") {
                    $scope.fortiErrorStatus = true;
                    $scope.fortinetMainLoader = false;
                    $scope.fortiSuccessStatus = false;
                } else {
                    $scope.fortiErrorStatus = false;
                    $scope.fortinetMainLoader = false;
                    $scope.fortiSuccessStatus = true;
                }
            }
        },
        function(error) {
            alert("Error retrieving API data, " + error.statusText);
        });

});

/***/ }),
/* 91 */
/***/ (function(module, exports) {

﻿/*
This controller uses authService to manage password change from the view
*/
angular.module('lsi').controller('changepasswordCtrl', function($scope, close, $cookieStore, authService, $window, $location) {

    $scope.currentUser = $cookieStore.get('globals').currentUser;
    $scope.changedpwdStatus = false;

    $scope.close = function(result) {
        close(result, 500); // close, but give 500ms for bootstrap to animate
    };

    $scope.updateUserPwd = function() {
        if ($scope.editPwdFormData.Password != $scope.editPwdFormData.cPassword || $scope.editPwdFormData.Password == undefined || $scope.editPwdFormData.cPassword == undefined) {
            $scope.pNotMatching = "Password not Matching";
        } else {
            $scope.pNotMatching = "";
            $scope.changedPwd = {
                "UserId": $scope.currentUser.userId,
                "Password": $scope.editPwdFormData.Password
            };
            authService.editPwd($scope.changedPwd).then(function(res) {
                    if (res.data) {
                        res = res.data
                        if (res.status == "success") {
                            $scope.changedpwdStatus = true;
                            $scope.changedpwd = "Password Changed Successfully.";
                            setTimeout(function() {
                                $scope.close();
                                authService.clearCredentials();
                                $location.path('/');
                                $window.location.reload();
                            }, 2000);

                        }
                    }
                },
                function(error) {
                    alert("Error retrieving API data, " + error.statusText);
                });
        }
    };
});

/***/ }),
/* 92 */
/***/ (function(module, exports) {

﻿/*
This controller uses prismService to manage profile from the view
*/
angular.module('lsi').controller('viewprofileCtrl', function($scope, $cookieStore, close) {

    $scope.currentUser = $cookieStore.get('globals').currentUser;
    $scope.close = function(result) {
        close(result, 500); // close, but give 500ms for bootstrap to animate
    };

});

/***/ }),
/* 93 */
/***/ (function(module, exports) {

﻿/*
This controller uses authService to add new users from the view
*/
angular.module('lsi').controller('adduserCtrl', function($scope, close, $state, authService, $window) {
    $scope.addUserFormData = {};
    $scope.addUserFormData.CStoreAnalytics = false,
        $scope.addUserFormData.CameraAnalytics = false,
        $scope.addUserFormData.WifiAnalytics = false;

    $scope.addUser = function(addUserFormData) {
        if (addUserFormData.CStoreAnalytics) {
            $scope.addUserFormData.XAuthIdentity = addUserFormData.XAuthIdentity;
            $scope.addUserFormData.XAuthKey = addUserFormData.XAuthKey;
        } else {
            $scope.addUserFormData.XAuthIdentity = '';
            $scope.addUserFormData.XAuthKey = '';
        }
        if (addUserFormData.CameraAnalytics) {
            $scope.addUserFormData.AuthorizationToken = addUserFormData.AuthorizationToken;
        } else {
            $scope.addUserFormData.AuthorizationToken = '';
        }
        if (addUserFormData.WifiAnalytics) {
            $scope.addUserFormData.WifiUserName = addUserFormData.WifiUserName;
            $scope.addUserFormData.WifiPassword = addUserFormData.WifiPassword;
        } else {
            $scope.addUserFormData.WifiUserName = '';
            $scope.addUserFormData.WifiPassword = '';
        }
        var obj = {
            UserName: addUserFormData.UserName,
            EmailId: addUserFormData.EmailId,
            Password: addUserFormData.Password,
            Role: addUserFormData.Role,
            CStoreAnalytics: $scope.addUserFormData.CStoreAnalytics,
            CameraAnalytics: $scope.addUserFormData.CameraAnalytics,
            WifiAnalytics: $scope.addUserFormData.WifiAnalytics,
            WifiPassword: $scope.addUserFormData.WifiPassword,
            WifiUserName: $scope.addUserFormData.WifiUserName,
            XAuthIdentity: $scope.addUserFormData.XAuthIdentity,
            XAuthKey: $scope.addUserFormData.XAuthKey,
            AuthorizationToken: $scope.addUserFormData.AuthorizationToken
        };
        if (addUserFormData.Password != addUserFormData.cPassword) {
            $scope.pNotMatching = "Password not Matching";
        } else {
            $scope.pNotMatching = "";
            authService.addUser(obj).then(function(res) {
                    if (res.data) {
                        res = res.data;
                        if (res.status == "success") {
                            $window.location.reload();
                        } else {
                            $scope.errorMessage = res.message;
                            console.log("please enter user details properly");
                        }
                    }
                },
                function(error) {
                    alert("Error retrieving API data, " + error.statusText);
                });

        }
    }

});

/***/ }),
/* 94 */
/***/ (function(module, exports) {

﻿/*
This controller uses prismService to manage user details from the view
*/
angular.module('lsi').controller('userdetailsCtrl', function($scope, authService, ModalService, $rootScope) {

    $scope.loadAllUsers = function() {
        authService.getAllUsers().then(function(response) {
                if (response.data) {
                    $scope.userDetails = response.data;
                }
            },
            function(error) {
                alert("Error retrieving API data, " + error.statusText);
            });
    };

    $scope.addUser = function() {
        ModalService.showModal({
            templateUrl: 'views/adduser.html',
            controller: "adduserCtrl"
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {});
        });
    };

    $scope.editUser = function(UserId) {
        $rootScope.editUserId = UserId;
        ModalService.showModal({
            templateUrl: 'views/edituser.html',
            controller: "edituserCtrl"
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {});
        });


    };

    $scope.deleteUser = function(UserId) {
        $rootScope.deleteUserId = UserId;
        ModalService.showModal({
            templateUrl: 'views/deleteuser.html',
            controller: "deleteuserCtrl"
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {});
        });
    };

    $scope.loadAllUsers();

});

/***/ }),
/* 95 */
/***/ (function(module, exports) {

﻿/*
This controller uses authService to edit user details from the view
*/
angular.module('lsi').controller('edituserCtrl', function($scope, close, $state, $rootScope, authService, $window) {

    $scope.close = function(result) {
        close(result, 500); // close, but give 500ms for bootstrap to animate
    };
    $scope.loadUser = function() {
        authService.getUser($rootScope.editUserId).then(function(response) {
                if (response.data) {
                    response = response.data;
                    $scope.singleUser = response;
                }
            },
            function(error) {
                alert("Error retrieving API data, " + error.statusText);
            });
    };

    $scope.editUser = function(editUserFormData) {
        if (editUserFormData.Password != editUserFormData.cPassword) {
            $scope.pNotMatching = "Password not Matching";
        } else {
            $scope.pNotMatching = "";
            authService.editUser(editUserFormData).then(function(res) {
                    if (res.data) {
                        res = res.data;
                        if (res.status == "success") {
                            $window.location.reload();
                        } else {
                            $scope.error_message = "User not updated";
                            console.log("please enter user details properly");
                        }
                    }
                },
                function(error) {
                    alert("Error retrieving API data, " + error.statusText);
                });
        }
    }
    $scope.loadUser();
});

/***/ }),
/* 96 */
/***/ (function(module, exports) {

﻿/*
This controller uses authService to delete users
*/
angular.module('lsi').controller('deleteuserCtrl', function($scope, $rootScope, close, authService, $window) {

    $scope.close = function(result) {
        close(result, 500); // close, but give 500ms for bootstrap to animate
    };


    $scope.deleteUser = function(id) {
        if (id == "1") {

            authService.deleteUser($rootScope.deleteUserId).then(function(response) {
                    if (response.data) {
                        response = response.data;
                        if (response.status == "success") {
                            $window.location.reload();
                        } else {
                            $scope.error_message = "User not deleted";
                        }
                    }
                },
                function(error) {
                    alert("Error retrieving API data, " + error.statusText);
                });
        }
    }

});

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {﻿/*
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 98 */
/***/ (function(module, exports) {

﻿/*
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

/***/ }),
/* 99 */
/***/ (function(module, exports) {

﻿/*
This controller uses fortinetService to manage frequency distribution from the view
*/
angular.module('lsi').controller('fortinentfreqdistCtrl', function($scope, fortinetService) {

    /*set default date to datepicker starts*/
    $scope.fortinetFDDates = {
        startDate: moment().subtract(7, 'day'),
        endDate: moment()
    };


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
                    $scope.getFrequencyDistribution();
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

    $scope.selectedButtonValue = 'day'; // ser default selected button

    $scope.selectedButton = function(status) {
        $scope.selectedButtonValue = status;
    }

    /*Frequency Distribution*/
    $scope.getFrequencyDistribution = function(response) {

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
                fortinetService.getFrequencyPerArea(feqDistAreaData, $scope.ffRecValue).then(function(response) {
                        if (response.data) {
                            $scope.capturedValues = response.data;;
                            $scope.graphVisible = true;
                            $scope.loader = false;
                            $scope.errorCapt = false;
                            $scope.tableVisible = true;

                            $scope.tableValues = $scope.capturedValues[0];
                            $scope.graphValues = $scope.capturedValues[1];

                            var getDay = [],
                                getCount = [];
                            angular.forEach($scope.graphValues, function(val, key) {
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
                                    formatter: function() {
                                        return '' + this.y + ' devices had a Frequency of <strong>' + this.x + ' ' + $scope.selectedButtonValue + '</strong>';
                                    }
                                }
                            }
                        }
                    },
                    function(error) {
                        alert("Error retrieving API data, " + error.statusText);
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
                fortinetService.getFrequencyDist(recFrequencyData, $scope.ffRecValue).then(function(response) {
                        if (response.data) {
                            $scope.capturedValues = response.data;;
                            $scope.graphVisible = true;
                            $scope.loader = false;
                            $scope.errorCapt = false;
                            $scope.tableVisible = true;

                            $scope.tableValues = $scope.capturedValues[0];
                            $scope.graphValues = $scope.capturedValues[1];

                            var getDay = [],
                                getCount = [];
                            angular.forEach($scope.graphValues, function(val, key) {
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
                                    formatter: function() {
                                        return '' + this.y + ' devices had a Frequency of <strong>' + this.x + ' ' + $scope.selectedButtonValue + '</strong>';
                                    }
                                }
                            }
                        }
                    },
                    function(error) {
                        alert("Error retrieving API data, " + error.statusText);
                    });
            }
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

/***/ }),
/* 100 */
/***/ (function(module, exports) {

﻿/*
This controller uses fortinetService to manage recency distribution from the view
*/
angular.module('lsi').controller('fortinentcustrecedistCtrl', function($scope, fortinetService) {

    /*set default date to datepicker starts*/
    $scope.fortinetRDDates = {
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
                    $scope.getRecencyDistribution();
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

    $scope.selectedButtonValue = 'day'; // ser default selected button

    $scope.selectedButton = function(status) {
        $scope.selectedButtonValue = status;
    }

    /*Recency Distribution*/
    $scope.getRecencyDistribution = function(response) {
        // time in miliseconds
        var startDate = moment($scope.fortinetRDDates.startDate).utc().startOf('day').format('x');
        var endDate = moment($scope.fortinetRDDates.endDate).utc().endOf('day').format('x');

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

            var recDistAreaData = {
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
                "subSamplingNumber": "",
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

                fortinetService.getRecencyPerArea(recDistAreaData, $scope.ffRecValue).then(function(response) {
                        if (response.data) {
                            $scope.capturedValues = response.data;
                            $scope.graphVisible = true;
                            $scope.loader = false;
                            $scope.errorCapt = false;
                            $scope.tableVisible = true;

                            $scope.tableValues = $scope.capturedValues[0];
                            $scope.graphValues = $scope.capturedValues[1];

                            var getDay = [],
                                getCount = [];
                            angular.forEach($scope.graphValues, function(val, key) {
                                getDay.push(val.recency);
                                getCount.push(val.count);

                            });

                            $scope.fortinentcustrecedistChart = {
                                chart: {
                                    type: 'column',
                                    marginTop: 40
                                },
                                title: {
                                    text: 'Recency Distribution'
                                },
                                yAxis: {
                                    title: {
                                        text: 'Number of Observations'
                                    }
                                },
                                xAxis: {
                                    categories: getDay
                                },
                                series: [{
                                    name: 'Recency [' + $scope.selectedButtonValue + ']',
                                    data: getCount
                                }],
                                tooltip: {
                                    formatter: function() {
                                        return '' + this.y + ' observations had a Recency of <strong>' + this.x + ' ' + $scope.selectedButtonValue + '</strong>';
                                    }
                                }
                            }
                        }
                    },
                    function(error) {
                        alert("Error retrieving API data, " + error.statusText);
                    });
            }

        } else {
            $scope.areasId = []
            $scope.treeSelectedStatus = false;
            $scope.loader = true;

            var recDistData = {
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
                    "tableName": $scope.ffLocalAlg,
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

                fortinetService.getRecencyDist(recDistData, $scope.ffRecValue).then(function(response) {
                        if (response.data) {
                            $scope.capturedValues = response.data;
                            $scope.graphVisible = true;
                            $scope.loader = false;
                            $scope.errorCapt = false;
                            $scope.tableVisible = true;

                            $scope.tableValues = $scope.capturedValues[0];
                            $scope.graphValues = $scope.capturedValues[1];

                            var getDay = [],
                                getCount = [];
                            angular.forEach($scope.graphValues, function(val, key) {
                                getDay.push(val.recency);
                                getCount.push(val.count);

                            });

                            $scope.fortinentcustrecedistChart = {
                                chart: {
                                    type: 'column',
                                    marginTop: 40
                                },
                                title: {
                                    text: 'Recency Distribution'
                                },
                                yAxis: {
                                    title: {
                                        text: 'Number of Observations'
                                    }
                                },
                                xAxis: {
                                    categories: getDay
                                },
                                series: [{
                                    name: 'Recency [' + $scope.selectedButtonValue + ']',
                                    data: getCount
                                }],
                                tooltip: {
                                    formatter: function() {
                                        return '' + this.y + ' observations had a Recency of <strong>' + this.x + ' ' + $scope.selectedButtonValue + '</strong>';
                                    }
                                }
                            }
                        }
                    },
                    function(error) {
                        alert("Error retrieving API data, " + error.statusText);
                    });
            }


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

/***/ }),
/* 101 */
/***/ (function(module, exports) {

/*
This controller uses fortinetService to manage fortinent realtime calibration from the view
*/
angular.module('lsi').controller('fortinentrealcalibrationCtrl', function($scope, fortinetService, $interval, $timeout) {

    $scope.calibTableChart = false;
    $scope.realtimePanel = false;
    $scope.forAccessPoints = false;
    $scope.realtimeData = [];
    $scope.realtimeV;
    $scope.fixedEquipment;
    $scope.pageOptions = [10, 20, 30];
    $scope.viewby = 10;
    $scope.branches = [];
    $scope.childBranches = [];
    $scope.stores = [];
    $scope.cntVisitors = 0;
    $scope.cntEmployee = 0;
    $scope.mapLoaded = false;
    $scope.obsEmpEquChart = false;
    $scope.sortType = 'RSSI'; // set the default sort type
    $scope.sortReverse = false; // set the default sort order
    $scope.currentPage = 1;
    $scope.itemsPerPage = $scope.viewby;
    $scope.maxSize = 3;
    $scope.play = true;
    $scope.pause = false;
    $scope.branchStatus = [], $scope.storeStatus = [], $scope.floorStatus = [], $scope.accessPtStatus = [];
    $scope.captureRateData = {}, $scope.type = '';
    var pull;
    var outputArray = [];

    // function to get all 'baseMac' value in the JSON object
    function traverse(o) {
        var macs = [];
        for (var i in o) {
            if (i == 'radioMac') {
                macs = macs.concat(o[i]);
            }
            if (o[i] !== null && typeof(o[i]) == "object") {
                //going on step down in the object tree!!
                traverse(o[i]);
            }
        }
        for (var i = 0; i < macs.length; i++) {
            var macObj = {
                "mac": macs[i]
            };
            outputArray.push(macObj);
        }
        return outputArray;
    }

    // to set items per page in the table in pagination
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
                $scope.realtimeData = $scope.setRSSI($scope.realtimeV, value);
                if ($scope.type == 'AccessPoint') {
                    $scope.drawRSSICircles(value);
                }
                $scope.realtimeValue();
            },
            translate: function(value) {
                return value + 'db';
            }
        }
    };

    // function to load tree with respect to the account
    $scope.loadTree = function() {
        fortinetService.getFortinentTree().then(function(response) {
                if (response.data) {
                    response = response.data;
                    $scope.storeInst = $scope.getObject(response);
                    $scope.getSelectedId($scope.storeInst[0].id, 'Store', $scope.storeInst[0]);
                    if (response.status != "failure") {
                        $scope.treeList = response.data;
                        $scope.dynamicBranches = $scope.treeList.branchs;
                    }
                }
            },
            function(error) {
                alert("Error retrieving API data, " + error.statusText);
            });

        // service to get employee and fixed equipment details
        fortinetService.getEmpFixedEqu().then(function(response) {
                if (response.data) {
                    response = response.data;
                    $scope.fixedEquData = response;
                    $scope.fixedEquipment = {};
                    angular.forEach($scope.fixedEquData.rows, function(val) {
                        $scope.fixedEquipment[val["Mac"]] = "";
                    });
                }
            },
            function(error) {
                alert("Error retrieving API data, " + error.statusText);
            });
    };

    $scope.loadTree();

    // function to get tree selected id, name and it's data
    $scope.getSelectedId = function(selectedId, selectedName, fullData) {
        $scope.type = selectedName;
        switch (selectedName) {
            case 'Branch':
                {
                    $scope.branchStatus = [],
                    $scope.branchStatus.push(selectedId),
                    $scope.storeStatus = [],
                    $scope.floorStatus = [],
                    $scope.accessPtStatus = [],
                    outputArray = [],
                    $scope.forAccessPoints = false,
                    $scope.realtimePanel = true,
                    $scope.obsEmpEquChart = true,
                    $scope.play = true,
                    $scope.pause = false;
                    $interval.cancel(pull);
                    $scope.slider.value = -70;
                    $scope.branchStoreId = fullData.stores[0].id;
                    fortinetService.getAccessPointStore($scope.branchStoreId).then(function(response) {
                            if (response.data) {
                                $scope.loadGoogleMap(response.data);
                            }
                        },
                        function(error) {
                            alert("Error retrieving API data, " + error.statusText);
                        });
                    $scope.realtimeMacs = traverse(fullData);
                    $scope.playPauseBtn('play');
                    break;
                }
            case 'Floor':
                {
                    $scope.floorStatus = [],
                    $scope.floorStatus.push(selectedId),
                    $scope.branchStatus = [],
                    $scope.storeStatus = [],
                    outputArray = [],
                    $scope.accessPtStatus = [],
                    $scope.forAccessPoints = false,
                    $scope.realtimePanel = true,
                    $scope.obsEmpEquChart = true,
                    $scope.play = true,
                    $scope.pause = false;
                    $interval.cancel(pull);
                    $scope.slider.value = -70;
                    fortinetService.getAccessPointFloor(selectedId).then(function(response) {
                            if (response.data) {
                                $scope.loadGoogleMap(response.data);
                            }
                        },
                        function(error) {
                            alert("Error retrieving API data, " + error.statusText);
                        });
                    $scope.realtimeMacs = traverse(fullData);
                    $scope.playPauseBtn('play');
                    break;
                }
            case 'Store':
                {
                    $scope.storeStatus = [],
                    $scope.storeStatus.push(selectedId),
                    $scope.branchStatus = [],
                    $scope.floorStatus = [],
                    $scope.accessPtStatus = [],
                    outputArray = [],
                    $scope.forAccessPoints = false,
                    $scope.realtimePanel = true,
                    $scope.obsEmpEquChart = true,
                    $scope.play = true,
                    $scope.pause = false;
                    $interval.cancel(pull);
                    $scope.slider.value = -70;
                    fortinetService.getAccessPointStore(selectedId).then(function(response) {
                            if (response.data) {
                                $scope.loadGoogleMap(response.data);
                            }
                        },
                        function(error) {
                            alert("Error retrieving API data, " + error.statusText);
                        });
                    $scope.realtimeMacs = traverse(fullData);
                    $scope.playPauseBtn('play');
                    break;
                }
            case 'AccessPoint':
                {
                    $scope.accessPtStatus = [],
                    $scope.accessPtStatus.push(selectedId),
                    $scope.branchStatus = [],
                    $scope.storeStatus = [],
                    $scope.floorStatus = [],
                    outputArray = [],
                    $scope.forAccessPoints = true,
                    $scope.realtimePanel = true,
                    $scope.obsEmpEqu = false,
                    $scope.obsEmpEquChart = false,
                    $scope.play = true,
                    $scope.pause = false,
                    $scope.dataForAP = {};
                    $interval.cancel(pull);
                    $scope.loadGoogleMap([fullData]);
                    $scope.rssiValueAP(selectedId);
                    fortinetService.getStdDevAvgRssi(selectedId).then(function(response) {
                            if (response.data) {
                                response = response.data;
                                $scope.avgRSSIvsCount = response;
                                $scope.obsEmpEquChart = true;
                                if ($scope.isAllZeros($scope.avgRSSIvsCount[0]["data"]) == false) {
                                    $scope.obsEmpEqu = true;
                                    dataEquipment = $scope.groupVals(2, $scope.avgRSSIvsCount[0]["data"])
                                    var recVal = $scope.recommendRSSI(dataEquipment)
                                    var chartObject = $scope.makeChartAP(2, dataEquipment, recVal);
                                    $scope.personCalibrationAPChart = chartObject;
                                }
                            }
                        },
                        function(error) {
                            alert("Error retrieving API data, " + error.statusText);
                        });
                    $scope.realtimeMacs = traverse(fullData);
                    $scope.playPauseBtn('play');
                    // set new RSSI value for Access Points in db
                    $scope.setNewRSSI = function(rssi) {
                        $scope.dataForAP = {
                            "id": selectedId,
                            "name": fullData.name,
                            "rssiThreshold": rssi,
                            "serialNumber": fullData.serialNumber,
                            "baseMac": fullData.baseMac,
                            "ssid": fullData.ssid,
                            "lat": fullData.lat,
                            "lng": fullData.lng,
                            "useForLocalization": fullData.useForLocalization,
                            "central": fullData.central,
                            "writePermission": true
                        };
                        fortinetService.updateRSSIAP($scope.dataForAP).then(function(response) {},
                            function(error) {
                                alert("Error retrieving API data, " + error.statusText);
                            });
                    }
                    break;
                }
            default:
                {
                    $scope.accessPtStatus = [],
                    $scope.branchStatus = [],
                    $scope.storeStatus = [],
                    $scope.floorStatus = [];
                }
        }
    };



    // get rssiThreshold value for AP
    $scope.rssiValueAP = function(selectedId) {
        fortinetService.getAccessPointDetails().then(function(response) {
                if (response.data) {
                    response = response.data;
                    if (response.infrastructure.length > 0) {
                        $scope.accessPointData = response.infrastructure;
                    } else if (response.push.length > 0) {
                        $scope.accessPointData = response.push;
                    } else if (response.pull.length > 0) {
                        $scope.accessPointData = response.pull;
                    }
                    for (var i = 0; i < $scope.accessPointData.length; i++) {
                        if ($scope.accessPointData[i].id == selectedId) {
                            $scope.slider.value = $scope.accessPointData[i].rssiThreshold;
                        }
                    }
                }
                $scope.drawRSSICircles($scope.slider.value);
            },
            function(error) {
                alert("Error retrieving API data, " + error.statusText);
            });
    }

    // function to call realtime API and to display table and chart for it
    $scope.realtimeValue = function() {
        $scope.calibTableChart = false;
        fortinetService.getRealTime($scope.realtimeMacs).then(function(response) {
                if (response.data) {
                    response = response.data;
                    $scope.realtimeV = response.rows;
                    var defaultRSSI = $scope.slider.value;
                    $scope.realtimeData = $scope.setRSSI($scope.realtimeV, defaultRSSI);
                    $scope.chartCleintCount();
                }
            },
            function(error) {
                alert("Error retrieving API data, " + error.statusText);
            });
    }


    // function to call realtime API in time intervals
    // toggle play pause button function
    $scope.playPauseBtn = function(button) {
        if (button === 'play') {
            $scope.play = true;
            $scope.pause = false;
            $scope.realtimeValue();
            $scope.callAtTimeout = function() {
                $scope.realtimeValue();
            }
            pull = $interval(function() {
                $scope.callAtTimeout();
            }, 60000);
            $timeout(function() {
                $interval.cancel(pull);
            }, 300000);
        } else if (button === 'pause') {
            $scope.play = false;
            $scope.pause = true;
            $interval.cancel(pull);
        }
    };

    // kill the $interval when user left the current state or controller
    $scope.$on('$destroy', function() {
        $interval.cancel(pull);
    });


    // function to pass RSSI value and to get filterd values
    $scope.setRSSI = function(obj, rssi) {
        var arrayObj = [];
        var deviceType;
        $scope.cntVisitors = 0;
        $scope.cntEmployee = 0;
        for (var i = 0; i < obj.length; i++) {

            if (rssi <= obj[i].RSSI) {
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
                    'deviceType': deviceType,
                });
            }
        }

        $scope.totalItems = arrayObj.length;
        return arrayObj;
    }

    // function to group the response values
    $scope.groupVals = function(scale, response) {
        resData = [];
        for (var i = 0; i < response.length; i += scale) {
            resData.push(response[i]);
        };
        return resData;
    }
    // function to find all value are zreo or not
    $scope.isAllZeros = function(response) {
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
                zoomType: 'x'
            },
            title: {
                text: ''
            },
            yAxis: {
                title: {
                    text: 'Number of clients'
                }
            },
            xAxis: {
                title: {
                    text: 'Average RSSI[db]'
                },
                startOnTick: true,
                step: 5,
                startOnTick: true,
                endOnTick: true,
                tickInterval: 5
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    pointPadding: 0,
                    borderWidth: 1,
                    groupPadding: 0,
                    pointPlacement: -0.5
                }
            },
            tooltip: {
                formatter: function() {
                    return 'RSSI = ' + Highcharts.numberFormat(this.x, 0) + '<br/>' + 'Number of clients  = ' + Highcharts.numberFormat(this.y, 0);
                }
            },
            series: [{
                name: 'Visitors',
                data: $scope.sortData($scope.finalvalues($scope.dataForChart(5, $scope.realtimeData)[0])),
                // pointRange : 5
            }, {
                name: 'Employee & Fixed Equipment',
                data: $scope.sortData($scope.finalvalues($scope.dataForChart(5, $scope.realtimeData)[1])),
                // pointRange : 5
            }]

        }
    };

    // function to display column chart for Observations from employees and equipment
    $scope.makeChartAP = function(step, dataResp, rval) {
        var chartingOptions = {
            chart: {
                type: 'column',
                zoomType: 'x',
                renderTo: 'distrstddev'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    pointPadding: 0,
                    borderWidth: 1,
                    groupPadding: 0,
                    pointPlacement: -0.5
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                formatter: function() {
                    return 'RSSI = ' + Highcharts.numberFormat(this.x, 0) + '<br/>' + 'Number of observations  = ' + Highcharts.numberFormat(this.y, 0);
                }
            },
            title: {
                text: ''
            },
            yAxis: {
                title: {
                    text: 'Number of observations'
                }
            },
            xAxis: {
                title: {
                    text: 'RSSI[db]'
                },
                startOnTick: true,
                step: step,
                startOnTick: true,
                endOnTick: true,
                tickInterval: step,
                min: -100,
                max: 0
            },
            series: [{
                name: 'Employee & Fixed Equipment',
                data: dataResp,
                pointRange: step
            }]
        }
        if (typeof(rval) == "number") {
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

    // function to get Recommended rssi value in the chart
    $scope.dataForChart = function(step, data) {
        var resRssi = [],
            resFixedEquip = [];
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
                x: resultRssi[0][i],
                y: resultRssi[1][i]
            });
        }
        for (var i = 0; i < resultFixedEquip[0].length; i++) {
            resFixedEquip.push({
                x: resultFixedEquip[0][i],
                y: resultFixedEquip[1][i]
            });
        }
        return [resRssi, resFixedEquip];
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
    $scope.buildData = function(arrayObjects, min, max, step) {
        var ranges = [];
        for (var i = min; i <= max; i += step) {
            ranges.push(i);
        };
        counter = new Array(ranges.length + 1).join('0').split('').map(parseFloat);
        for (var i = 0; i < arrayObjects.length; i++) {
            for (var j = 0; j < ranges.length; j++) {
                if (j != (ranges.length - 1)) {
                    k = j + 1;
                    if ((arrayObjects[i] > ranges[j]) && (arrayObjects[i] <= ranges[k])) {
                        counter[k]++;
                    };
                };
            };
        };
        return [ranges, counter];
    }


    // function to get Recommended rssi value in the chart
    $scope.recommendRSSI = function(data) {
        var recommendedRSSI;
        var intervals = [];
        var upBool = false,
            downBool = false;
        var peakCnt = 0;
        res = []
        for (var i = data.length - 1; i > 0; i--) {
            var j = i - 1;
            if (downBool && (data[j][1] > data[i][1])) {
                upBool = true, downBool = false;
                peakCnt = peakCnt + 1;
                intervals[peakCnt] = [];
                intervals[peakCnt].push(data[j]);
            } else if (data[j][1] > data[i][1]) {
                upBool = true;
                if (upBool && (intervals[peakCnt] == undefined)) {
                    intervals[peakCnt] = []
                };
                intervals[peakCnt].push(data[j]);
            };
            if (data[j][1] < data[i][1]) {
                intervals[peakCnt].push(data[j]);
                downBool = true;
            };
        };

        for (var i = 0, len = intervals.length; i < len; i++) {
            var peak = intervals[i][0];
            var upCountObs;
            for (var j = 0; j < intervals[i].length; j++) {
                if (intervals[i][j][1] > peak[1]) {
                    peak = intervals[i][j]
                };
            };
            var left = intervals[i][0],
                right = intervals[i][intervals[i].length - 1];
            if (i == 0) {
                upCountObs = 0
            } else {
                upCountObs = (peak[1] - intervals[i - 1][intervals[i - 1].length - 1][1]) / (intervals[i - 1][intervals[i - 1].length - 1][1]);
            };

            res.push({
                "left": left,
                "right": right,
                "length": right[0] - left[0],
                "peak": peak,
                "up_length": peak[0] - left[0] + 2,
                "down_length": right[0] - peak[0],
                "up_to_prev": upCountObs
            });
        };

        if (res.length > 1) {

            var s;
            var up3 = false,
                down3 = false;
            for (var i = res.length - 1; i >= 0; i--) {
                if (res[i]["up_length"] >= 4) {
                    up3 = true
                };
                if (res[i]["down_length"] >= 4) {
                    down3 = true
                };
                if (up3 == true && down3 == true) {
                    s = i;
                    break;
                };
            }
            if (up3 && down3) {
                if (s != 0) {

                    min = res[s - 1];
                    recommendedRSSI = min["right"][0];
                } else {
                    min = res[s];
                    recommendedRSSI = min["right"][0];

                }

            } else {
                recommendedRSSI = "-";
            };

        } else {
            recommendedRSSI = "-";
        };
        return recommendedRSSI;
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

/***/ }),
/* 102 */
/***/ (function(module, exports) {

﻿/*
This controller uses fortinetService to manage fortinent realtime tracking of clients and devices from the view
*/
angular.module('lsi').controller('fortinentrealtimetrackCtrl', function($scope, fortinetService, $interval, $timeout) {

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
    $scope.loadTree = function() {
        fortinetService.getFortinentTree().then(function(response) {
                if (response.data) {
                    response = response.data;
                    $scope.storeInst = $scope.getObject(response);
                    $scope.getSelectedId($scope.storeInst[0].id, 'Store', $scope.storeInst[0]);
                    if (response.status != "failure") {
                        $scope.treeList = response.data;
                        $scope.dynamicBranches = $scope.treeList.branchs;
                    }
                }
            },
            function(error) {
                alert("Error retrieving API data, " + error.statusText);
            });

        // service to get employee and fixed equipment details  
        fortinetService.getEmpFixedEqu().then(function(response) {
                if (response.data) {
                    response = response.data;
                    $scope.fixedEquData = response;
                    $scope.fixedEquipment = [];
                    angular.forEach($scope.fixedEquData.rows, function(val) {
                        $scope.fixedEquipment.push(val["Mac"])
                    });
                }
            },
            function(error) {
                alert("Error retrieving API data, " + error.statusText);
            });

        // service to get Access Point details of the project
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
        // service to get Access Point rivacy hide details
        fortinetService.getPrivacyHide().then(function(response) {
                if (response.data) {
                    response = response.data;
                    countHiddenChar = response[0].countHide;
                }
            },
            function(error) {
                alert("Error retrieving API data, " + error.statusText);
            });

    };
    $scope.loadTree();


    $scope.branchStatus = [], $scope.storeStatus = [], $scope.floorStatus = [];
    $scope.type = '';


    // function to get tree selected id, name and it's data 
    $scope.getSelectedId = function(selectedId, selectedName, fullData) {
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
        $scope.searchMacValue = function(val) {
            $scope.searchMac = val;
            $scope.retriveAPData(selectedId, selectedName, fullData);
        }

        $scope.$watch('locationMap + visitors + empEquip + showDevInside + exclRandomMacs + showAreas', function(val) {
            $scope.playPauseFunc('play', selectedId, selectedName, fullData);
        });
    }


    // function to call realtime API in time intervals every one minute for 5 times
    // toggle play pause button function
    $scope.playPauseFunc = function(button, selectedId, selectedName, fullData) {
        $interval.cancel(pull);
        $scope.playPauseBtn = function(button) {
            if (button === 'play') {
                $scope.play = true;
                $scope.pause = false;
                $scope.retriveAPData(selectedId, selectedName, fullData);
                $scope.callAtTimeout = function() {
                    $scope.retriveAPData(selectedId, selectedName, fullData);
                }
                pull = $interval(function() {
                    $scope.callAtTimeout();
                }, 60000);
                $timeout(function() {
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
    $scope.toggleMapBtn = function(button) {
        if (button === 'locationMap') {
            $scope.locationMap = true;
            $scope.densityHeatmap = false;
        } else if (button === 'densityHeatmap') {
            $scope.locationMap = false;
            $scope.densityHeatmap = true;
        }
    };

    // kill the $interval when user left the current state or controller
    $scope.$on('$destroy', function() {
        $interval.cancel(pull);
    });


    // function to retrive AP Data of the selected node of the tree
    $scope.retriveAPData = function(selectedId, selectedName, fullData) {
        if (selectedName == 'Store') {
            var floorplanImage = "indoorMap";
            fortinetService.getAccessPointStore(selectedId).then(function(response) {
                    if (response.data) {
                        googleMap = new initGoogleMap(response.data, selectedName, fullData, "map-canvas");

                        fortinetService.getRTPositions('store', selectedId).then(function(response) {
                                if (response.data) {
                                    $scope.initData(response.data);
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
        } else if (selectedName == 'Floor') {
            var floorplanImage = "floorMap";
            fortinetService.getAccessPointFloor(selectedId).then(function(response) {
                    if (response.data) {
                        googleMap = new initGoogleMap(response.data, selectedName, fullData, "map-canvas");

                        fortinetService.getRTPositions('floor', selectedId).then(function(response) {
                                if (response.data) {
                                    $scope.initData(response.data);
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
        }

    }
    // function to call floor plan image
    $scope.getFloorplan = function(selectedId, type, floorplanImage) {
        fortinetService.getHeatmapFloorplan(type, selectedId).then(function(response) {
                if (response.data) {
                    response = response.data;
                    $scope.floorplan = response;
                    if (response.latitudeLowerLeftCorner == null || response.latitudeUpperRightCorner == null || response.longitudeLowerLeftCorner == null || response.longitudeUpperRightCorner == null) {
                        $scope.floorImage = '';
                        $scope.floorplanOverlay($scope.floorplan, $scope.floorImage);
                    } else {
                        fortinetService.getFloorplanImage(floorplanImage, selectedId).then(function(response) {
                                if (response.data) {
                                    $scope.floorImage = "data:image/png;base64," + response.data;
                                    $scope.floorplanOverlay($scope.floorplan, $scope.floorImage);
                                }
                            },
                            function(error) {
                                alert("Error retrieving API data, " + error.statusText);
                            });
                    }
                }
            },
            function(error) {
                alert("Error retrieving API data, " + error.statusText);

            });
    }


    //////////////////////////// Localization status table ///////////////////////////////
    // diplay visitor and employee details
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
    // diplay visitor and employee details
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

    $scope.initData = function(data) {
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
                google.maps.event.addListener(marker, 'click', function() {
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

                google.maps.event.addListener(marker, 'mouseover', function() {
                    this.shortinfowindow.open(this.map, this);
                });

                google.maps.event.addListener(marker, 'mouseout', function() {
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
        legend.innerHTML = '<div class="gmaps-controls"> Devices visible: ' + googleMap.devicesData.length + '</div>';

    };

    // toggle map markers function
    $scope.toggleMarkers = function(mapMarkers) {
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
    // intialize goole map
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

                google.maps.event.addListener(marker, 'click', function() {
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
        legend.innerHTML = '<div class="gmaps-controls"><img src="images/preloader.gif" width="14"></div>'
        this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(legend);

    }
    // to change heatmap opacity
    $scope.changeOpacity = function(opacitySlider) {
        googleMap.heatmap.set('opacity', opacitySlider);
    }
    // to change heatmap radius
    $scope.changeRadius = function(radiusSlider) {
        googleMap.heatmap.set('radius', radiusSlider);
    }

});

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/*
This controller uses fortinetService to manage fortinent density as google heat maps
*/
angular.module('lsi').controller('fortinentrealdensheatmapCtrl', function($scope, fortinetService) {
    $scope.maploader = false;
    $scope.rangeSlider = true;
    $scope.accePointData = [];
    $scope.displayMessage = 'Please select a store or floor.'
    $scope.visitorCount = '';
    $scope.loadTree = function() {
        fortinetService.getFortinentTree().then(function(response) {
                if (response.data) {
                    response = response.data;
                    if (response.status != "failure") {
                        $scope.treeList = response.data;
                        $scope.dynamicBranches = $scope.treeList.branchs;
                    }
                    $scope.storeInst = $scope.getObject($scope.treeList);

                    // intialize map on load
                    fortinetService.getDensityHeatmap($scope.treeList.id).then(function(response) {
                            if (response.data) {
                                response = response.data;
                                $scope.densityHeatmapValues = response;
                                $scope.loadGoogleMap();
                            }
                        },
                        function(error) {
                            alert("Error retrieving API data, " + error.statusText);
                        });

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
                                $scope.getSelectedId($scope.storeInst[0].id, 'Store');
                                $scope.getStoreAccessPoints($scope.storeInst[0].id);
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

    //Function to get object values from json object 
    function getObjects(obj, key, val) {
        var objects = [];
        for (var i in obj) {
            if (!obj.hasOwnProperty(i)) continue;
            if (typeof obj[i] == 'object') {
                objects = objects.concat(getObjects(obj[i], key, val));
            } else if (i == key && obj[key] == val) {
                objects.push(obj);
            }
        }
        return objects;
    }


    $scope.branchStatus = [], $scope.storeStatus = [], $scope.floorStatus = [];
    $scope.captureRateData = {}, $scope.type = '';

    //Function to get selected id from the tree
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
                    $scope.displayMessage = 'Please select a store or floor.'
                    $scope.visitorCount = '';
                    break;
                }
            case 'Floor':
                {
                    $scope.floorStatus = [];
                    $scope.floorStatus.push(selectedId);
                    $scope.branchStatus = [];
                    $scope.storeStatus = [];
                    $scope.onlyArea = false;
                    $scope.accePointData = [];
                    $scope.getFloorAccessPoints(selectedId);
                    break;
                }
            case 'Store':
                {
                    $scope.storeStatus = [];
                    $scope.storeStatus.push(selectedId);
                    $scope.branchStatus = [];$scope.floorStatus = [];
                    $scope.onlyArea = false;
                    $scope.accePointData = [];
                    $scope.getStoreAccessPoints(selectedId);
                    break;
                }
            default:
                {
                    $scope.displayMessage = 'Please select a store or floor.'
                    break;
                }

        }
    };

    //Function to get store access points

    $scope.getStoreAccessPoints = function(selectedId) {
        $scope.displayMessage = 'Fetching Real-time data. Please wait.'
        $scope.maploader = true;
        $scope.visitorCount = '';
        var floorplanImage = "indoorMap";
        $scope.resPullPush = $scope.accessPointPullPush;
        var accePointDataPullPush = [];

        for (var i = 0; i < $scope.resPullPush.length; i++) {
            if ($scope.resPullPush[i].store != null && $scope.resPullPush[i].store.id == selectedId) {
                accePointDataPullPush.push($scope.resPullPush[i]);
            }

        }
        angular.forEach(accePointDataPullPush, function(val, key) {
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

        fortinetService.getDensityHeatmapAccessPoint($scope.accePointData).then(function(response) {
                if (response.data) {
                    response = response.data;
                    $scope.heatmapAccessPoints = response;
                    fortinetService.getHeatmapFloorplan($scope.type, selectedId).then(function(response) {
                            if (response.data) {
                                response = response.data;
                                $scope.floorplan = response;
                                if (response.latitudeLowerLeftCorner == null || response.latitudeUpperRightCorner == null || response.longitudeLowerLeftCorner == null || response.longitudeUpperRightCorner == null) {
                                    $scope.floorImage = '';
                                    $scope.displayFloorplanOverlay();
                                } else {
                                    fortinetService.getFloorplanImage(floorplanImage, selectedId).then(function(response) {
                                            if (response.data) {
                                                $scope.floorImage = "data:image/png;base64," + response.data;
                                                $scope.displayFloorplanOverlay();
                                            }
                                        },
                                        function(error) {
                                            alert("Error retrieving API data, " + error.statusText);
                                        });
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
    }

    $scope.getFloorAccessPoints = function(selectedId) {
        $scope.displayMessage = 'Fetching Real-time data. Please wait.'
        $scope.maploader = true;
        $scope.visitorCount = '';
        var floorplanImage = "floorMap";
        $scope.resPullPush = $scope.accessPointPullPush;
        var accePointDataPullPush = [];

        for (i = 0; i < $scope.resPullPush.length; i++) {
            if ($scope.resPullPush[i].floor != null) {
                if ($scope.resPullPush[i].floor.id == selectedId) {
                    accePointDataPullPush.push($scope.resPullPush[i]);
                }
            }
        }

        angular.forEach(accePointDataPullPush, function(val, key) {
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

        fortinetService.getDensityHeatmapAccessPoint($scope.accePointData).then(function(response) {
                if (response.data) {
                    response = response.data;
                    $scope.heatmapAccessPoints = response;
                    fortinetService.getHeatmapFloorplan($scope.type, selectedId).then(function(response) {
                            if (response.data) {
                                response = response.data;
                                $scope.floorplan = response;
                                if (response.latitudeLowerLeftCorner == null || response.latitudeUpperRightCorner == null || response.longitudeLowerLeftCorner == null || response.longitudeUpperRightCorner == null) {
                                    $scope.floorImage = '';
                                    $scope.displayFloorplanOverlay();
                                } else {
                                    fortinetService.getFloorplanImage(floorplanImage, selectedId).then(function(response) {
                                            if (response.data) {
                                                $scope.floorImage = "data:image/png;base64," + response.data;
                                                $scope.displayFloorplanOverlay();
                                            }
                                        },
                                        function(error) {
                                            alert("Error retrieving API data, " + error.statusText);
                                        });
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
    }


    $scope.loadGoogleMap = function() {

        var map, pointarray, heatmap;
        var markers = [];

        var locations = [];
        angular.forEach($scope.densityHeatmapValues, function(val, key) {
            if (val.lat == null || val.lng == null) {} else {
                locations.push([val.name, val.lat, val.lng, 'redMarker']);
            }
        });

        $scope.initMap = function() {
            var map = new google.maps.Map(document.getElementById('map-canvas'), {
                zoom: 11,
                mapTypeId: 'roadmap'
            });

            // map Custom marker
            var infowindow = new google.maps.InfoWindow();

            var iconBase = 'images/';
            var icons = {
                redMarker: {
                    icon: iconBase + 'wifi_access_marker.png'
                },
                blueMarker: {
                    icon: iconBase + 'ltblue-dot.png'
                }
            };

            var marker, i;

            for (i = 0; i < locations.length; i++) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    icon: icons[locations[i][3]].icon,
                    map: map,
                });

                markers.push(marker);

                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        infowindow.setContent(locations[i][0]);
                        infowindow.open(map, marker);
                    };
                })(marker, i));
            }

            // auto center
            $scope.AutoCenter = function() {
                var bounds = new google.maps.LatLngBounds();
                $.each(markers, function(index, marker) {
                    bounds.extend(marker.position);
                });
                map.fitBounds(bounds);
            }
            $scope.AutoCenter();

            // toggle map markers function
            $scope.toggleMarkers = function(mapMarkers) {
                var i;
                if (mapMarkers == false) {
                    for (i = 0, n = markers.length; i < n; ++i) {
                        markers[i].setMap(null);
                    }
                } else {
                    for (i = 0, n = markers.length; i < n; ++i) {
                        markers[i].setMap(map);
                    }
                }
            }


        }

        $scope.initMap();
    }


    $scope.displayFloorplanOverlay = function() {
        $scope.maploader = false;

        var map, pointarray, heatmap;
        var markers = [];
        var taxiData = [];

        var wifiLocations = [];
        angular.forEach($scope.accePointData, function(val, key) {
            if (val.lat == null || val.lng == null) {} else {
                wifiLocations.push([val.name, val.lat, val.lng, 'redMarker', '']);
            }
        });

        var userLocations = [];
        var totalVisitorCount = 0;

        if ($scope.heatmapAccessPoints.length == 0) {
            var locations = wifiLocations;
            taxiData.push({
                location: new google.maps.LatLng(null, null),
                weight: null
            });
        } else {
            $scope.rangeSlider = false;
            angular.forEach($scope.heatmapAccessPoints, function(val, key) {
                if (val.lat == null || val.lng == null) {} else {
                    var vName = (val.displayName == "") ? "Visitors:" : (val.displayName);
                    userLocations.push([vName, val.lat, val.lng, 'blueMarker', val.weight]);
                    taxiData.push({
                        location: new google.maps.LatLng(val.lat, val.lng),
                        weight: val.weight
                    });
                    if (val.weight > 0) {
                        totalVisitorCount += val.weight;
                    }
                }
            });
            locations = wifiLocations.concat(userLocations);
        }

        if ($scope.storeStatus.length == 0 && $scope.floorStatus.length == 0) {
            $scope.displayMessage = 'Please select a store or floor.';
        } else {
            $scope.visitorCount = totalVisitorCount;
            $scope.displayMessage = 'Total visitors in store:';
        }

        $scope.initMap = function() {
            var map = new google.maps.Map(document.getElementById('map-canvas'), {
                zoom: 13,
                mapTypeId: 'roadmap'
            });

            var pointArray = new google.maps.MVCArray(taxiData);

            heatmap = new google.maps.visualization.HeatmapLayer({
                data: pointArray,
                map: map,
                "opacity": $scope.opacitySlider,
                "maxOpacity": 1,
                "radius": $scope.radiusSlider,
                "scaleRadius": true
            });

            // overlay image latlag values
            var swBound = new google.maps.LatLng(
                $scope.floorplan.latitudeLowerLeftCorner,
                $scope.floorplan.longitudeLowerLeftCorner);
            var neBound = new google.maps.LatLng(
                $scope.floorplan.latitudeUpperRightCorner,
                $scope.floorplan.longitudeUpperRightCorner);
            var bounds = new google.maps.LatLngBounds(swBound, neBound);

            // overlay image
            var srcImage = $scope.floorImage;


            // The custom USGSOverlay object contains the USGS image,
            // the bounds of the image, and a reference to the map.
            var overlay = new USGSOverlay(bounds, srcImage, map);

            // map Custom marker
            var infowindow = new google.maps.InfoWindow();

            var iconBase = 'images/';
            var icons = {
                redMarker: {
                    icon: iconBase + 'wifi_access_marker.png'
                },
                blueMarker: {
                    icon: iconBase + 'ltblue-dot.png'
                }
            };

            var marker, i;

            for (i = 0; i < locations.length; i++) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    icon: icons[locations[i][3]].icon,
                    map: map
                });

                markers.push(marker);

                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        infowindow.setContent(locations[i][0]);
                        infowindow.open(map, marker);
                    };
                })(marker, i));
            }
            // auto center
            $scope.AutoCenter = function() {
                var bounds = new google.maps.LatLngBounds();
                $.each(markers, function(index, marker) {
                    bounds.extend(marker.position);
                });
                map.fitBounds(bounds);
            }
            $scope.AutoCenter();


            // toggle map markers function
            $scope.toggleMarkers = function(mapMarkers) {
                var i;
                if (mapMarkers == false) {
                    for (i = 0, n = markers.length; i < n; ++i) {
                        markers[i].setMap(null);
                    }
                } else {
                    for (i = 0, n = markers.length; i < n; ++i) {
                        markers[i].setMap(map);
                    }
                }
            }
        }


        $scope.radiusSlider = 40;
        $scope.opacitySlider = 0.9;

        // heat map opacity change
        $scope.changeRadius = function() {
            heatmap.set('radius', $scope.radiusSlider);
        }

        // heat map opacity change
        $scope.changeOpacity = function() {
            heatmap.set('opacity', $scope.opacitySlider);
        }

        // This example creates a custom overlay called USGSOverlay, containing
        // a U.S. Geological Survey (USGS) image of the relevant area on the map.

        // Set the custom overlay object's prototype to a new instance
        // of OverlayView. In effect, this will subclass the overlay class therefore
        // it's simpler to load the API synchronously, using
        // google.maps.event.addDomListener().
        // Note that we set the prototype to an instance, rather than the
        // parent class itself, because we do not wish to modify the parent class.

        var overlay;
        USGSOverlay.prototype = new google.maps.OverlayView();


        /** @constructor */
        function USGSOverlay(bounds, image, map) {

            // Initialize all properties.
            this.bounds_ = bounds;
            this.image_ = image;
            this.map_ = map;

            // Define a property to hold the image's div. We'll
            // actually create this div upon receipt of the onAdd()
            // method so we'll leave it null for now.
            this.div_ = null;
            this.rotation = $scope.floorplan.rotationDegrees;
            // Explicitly call setMap on this overlay.
            this.setMap(map);
        }

        /**
         * onAdd is called when the map's panes are ready and the overlay has been
         * added to the map.
         */
        USGSOverlay.prototype.onAdd = function() {

            var div = document.createElement('div');
            div.style.borderStyle = 'none';
            div.style.borderWidth = '0px';
            div.style.position = 'absolute';

            // Create the img element and attach it to the div.
            var img = document.createElement('img');
            img.src = this.image_;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.position = 'absolute';
            div.appendChild(img);

            this.div_ = div;

            // Add the element to the "overlayLayer" pane.
            var panes = this.getPanes();
            panes.overlayLayer.appendChild(div);
            this.rotate(this.rotation);
        };

        USGSOverlay.prototype.draw = function() {

            // We use the south-west and north-east
            // coordinates of the overlay to peg it to the correct position and size.
            // To do this, we need to retrieve the projection from the overlay.
            var overlayProjection = this.getProjection();

            // Retrieve the south-west and north-east coordinates of this overlay
            // in LatLngs and convert them to pixel coordinates.
            // We'll use these coordinates to resize the div.
            var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
            var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

            // Resize the image's div to fit the indicated dimensions.
            var div = this.div_;
            div.style.left = sw.x + 'px';
            div.style.top = ne.y + 'px';
            div.style.width = (ne.x - sw.x) + 'px';
            div.style.height = (sw.y - ne.y) + 'px';
        };

        // The onRemove() method will be called automatically from the API if
        // we ever set the overlay's map property to 'null'.
        USGSOverlay.prototype.onRemove = function() {
            this.div_.parentNode.removeChild(this.div_);
            this.div_ = null;
        };



        USGSOverlay.prototype.rotate = function(degrees) {
            var div = this.div_;
            div.style.msTransform = 'rotate(' + degrees + 'deg)'; // IE
            div.style.webkitTransform = 'rotate(' + degrees + 'deg)'; // Chrome/Safari
            div.style.MozTransform = 'rotate(' + degrees + 'deg)'; // Firefox
            div.style.OTransform = 'rotate(' + degrees + 'deg)'; // Opera
            div.style.transform = 'rotate(' + degrees + 'deg)';
            div.style["transform-origin"] = "50% 50%"; //Rotation im Mittelpunkt
            this.rotation = degrees;
        };
        $scope.initMap();

    }


});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {﻿/*
This controller uses fortinetService to manage fortinent dwelltime maps as google heat maps
*/
angular.module('lsi').controller('fortinentpmapcdwelltimeCtrl', function($scope, fortinetService) {

    $scope.maploader = false;
    $scope.rangeSlider = true;
    $scope.accePointData = [];
    $scope.displayMessage = 'Please select a store or floor and a date to fetch all observations.';
    $scope.visitorCount = '';
    $scope.selectedDate = '';

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

                    // intialize map on load
                    fortinetService.getDensityHeatmap($scope.treeList.id).then(function(response) {
                            if (response.data) {
                                $scope.densityHeatmapValues = response.data;
                                $scope.loadGoogleMap();
                            }
                        },
                        function(error) {
                            alert("Error retrieving API data, " + error.statusText);

                        });

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

    function getObjects(obj, key, val) {
        var objects = [];
        for (var i in obj) {
            if (!obj.hasOwnProperty(i)) continue;
            if (typeof obj[i] == 'object') {
                objects = objects.concat(getObjects(obj[i], key, val));
            } else if (i == key && obj[key] == val) {
                objects.push(obj);
            }
        }
        return objects;
    }


    $scope.branchStatus = [], $scope.storeStatus = [], $scope.floorStatus = [];
    $scope.captureRateData = {}, $scope.type = '';

    $scope.getSelectedId = function(selectedId, selectedName) {
        $scope.type = selectedName.toUpperCase();
        switch (selectedName) {
            case 'Branch':
                {
                    $scope.branchStatus = [];
                    $scope.branchStatus.push(selectedId);
                    $scope.storeStatus = [];$scope.floorStatus = [];
                    $scope.onlyArea = false;
                    $scope.displayMessage = 'Please select a store or floor and a date to fetch all observations.';
                    $scope.visitorCount = '';
                    break;
                }
            case 'Floor':
                {
                    $scope.$watch('selectedDate', function() {
                        if ($scope.selectedDate == '' || $scope.selectedDate == null) {
                            $scope.displayMessage = 'Please select a store or floor and a date to fetch all observations.';
                        } else {
                            $scope.floorStatus = [];
                            $scope.floorStatus.push(selectedId);
                            $scope.branchStatus = [];
                            $scope.storeStatus = [];
                            $scope.onlyArea = false;
                            $scope.accePointData = [];
                            $scope.visitorCount = '';
                            var floorplanImage = "floorMap";
                            $scope.displayMessage = 'Fetching Observations. Please wait.';
                            $scope.maploader = true;
                            $scope.sDate = moment($scope.selectedDate).format('YYYY-MM-DD');
                            var selDate = (moment.utc($scope.sDate, 'YYYY-MM-DD').startOf('day').format('x')) * 1000; // date in milliseconds

                            $scope.resPullPush = $scope.accessPointPullPush;
                            var accePointDataPullPush = [];

                            for (i = 0; i < $scope.resPullPush.length; i++) {
                                if ($scope.resPullPush[i].floor != null) {
                                    if ($scope.resPullPush[i].floor.id == selectedId) {
                                        accePointDataPullPush.push($scope.resPullPush[i]);
                                    }
                                }
                            }

                            angular.forEach(accePointDataPullPush, function(val, key) {
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

                            fortinetService.getCumulativeDwellTime($scope.accePointData, selDate).then(function(response) {
                                    if (response.data) {
                                        $scope.heatmapAccessPoints = response.data;
                                        fortinetService.getHeatmapFloorplan($scope.type, selectedId, function(response) {
                                                if (response.data) {
                                                    response = response.data;
                                                    $scope.floorplan = response;
                                                    if (response.latitudeLowerLeftCorner == null || response.latitudeUpperRightCorner == null || response.longitudeLowerLeftCorner == null || response.longitudeUpperRightCorner == null) {
                                                        $scope.floorImage = '';
                                                        $scope.displayFloorplanOverlay();
                                                    } else {
                                                        fortinetService.getFloorplanImage(floorplanImage, selectedId).then(function(response) {
                                                                if (response.data) {
                                                                    $scope.floorImage = "data:image/png;base64," + response.data;
                                                                    $scope.displayFloorplanOverlay();
                                                                }
                                                            },
                                                            function(error) {
                                                                alert("Error retrieving API data, " + error.statusText);
                                                            });
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
                        }
                    });

                    break;
                }
            case 'Store':
                {
                    $scope.$watch('selectedDate', function() {
                        if ($scope.selectedDate == '' || $scope.selectedDate == null) {
                            $scope.displayMessage = 'Please select a store or floor and a date to fetch all observations.';
                        } else {
                            $scope.storeStatus = [];
                            $scope.storeStatus.push(selectedId);
                            $scope.branchStatus = [];
                            $scope.floorStatus = [];
                            $scope.onlyArea = false;
                            $scope.accePointData = [];
                            $scope.visitorCount = '';
                            var floorplanImage = "indoorMap";
                            $scope.displayMessage = 'Fetching Observations. Please wait.';
                            $scope.maploader = true;
                            $scope.sDate = moment($scope.selectedDate).format('YYYY-MM-DD');
                            var selDate = (moment.utc($scope.sDate, 'YYYY-MM-DD').startOf('day').format('x')) * 1000; // date in milliseconds

                            $scope.resPullPush = $scope.accessPointPullPush;
                            var accePointDataPullPush = [];

                            for (i = 0; i < $scope.resPullPush.length; i++) {
                                if ($scope.resPullPush[i].store != null) {
                                    if ($scope.resPullPush[i].store.id == selectedId) {
                                        accePointDataPullPush.push($scope.resPullPush[i]);
                                    }
                                }
                            }
                            angular.forEach(accePointDataPullPush, function(val, key) {
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

                            fortinetService.getCumulativeDwellTime($scope.accePointData, selDate).then(function(response) {
                                    if (response.data) {
                                        $scope.heatmapAccessPoints = response.data;
                                        fortinetService.getHeatmapFloorplan($scope.type, selectedId).then(function(response) {
                                                if (response.data) {
                                                    response = response.data;
                                                    $scope.floorplan = response;
                                                    if (response.latitudeLowerLeftCorner == null || response.latitudeUpperRightCorner == null || response.longitudeLowerLeftCorner == null || response.longitudeUpperRightCorner == null) {
                                                        $scope.floorImage = '';
                                                        $scope.displayFloorplanOverlay();
                                                    } else {
                                                        fortinetService.getFloorplanImage(floorplanImage, selectedId).then(function(response) {
                                                                if (response.data) {
                                                                    $scope.floorImage = "data:image/png;base64," + response.data;
                                                                    $scope.displayFloorplanOverlay();
                                                                }
                                                            },
                                                            function(error) {
                                                                alert("Error retrieving API data, " + error.statusText);

                                                            });
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
                        }
                    });

                    break;
                }
        }
    };


    $scope.loadGoogleMap = function() {

        var map, pointarray, heatmap;
        var markers = [];

        var locations = [];
        angular.forEach($scope.densityHeatmapValues, function(val, key) {
            if (val.lat == null || val.lng == null) {} else {
                locations.push([val.name, val.lat, val.lng, 'redMarker']);
            }
        });

        $scope.initMap = function() {
            var map = new google.maps.Map(document.getElementById('map-canvas'), {
                zoom: 11,
                mapTypeId: 'roadmap'
            });

            // map Custom marker
            var infowindow = new google.maps.InfoWindow();

            var iconBase = 'images/';
            var icons = {
                redMarker: {
                    icon: iconBase + 'wifi_access_marker.png'
                },
                blueMarker: {
                    icon: iconBase + 'ltblue-dot.png'
                }
            };

            var iconBase = 'wifi_access_marker.png';
            var marker, i;

            for (i = 0; i < locations.length; i++) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    icon: icons[locations[i][3]].icon,
                    map: map,
                });

                markers.push(marker);

                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        infowindow.setContent(locations[i][0]);
                        infowindow.open(map, marker);
                    };
                })(marker, i));
            }


            // auto center
            $scope.AutoCenter = function() {
                var bounds = new google.maps.LatLngBounds();
                $.each(markers, function(index, marker) {
                    bounds.extend(marker.position);
                });
                map.fitBounds(bounds);
            }
            $scope.AutoCenter();

            // toggle map markers function
            $scope.toggleMarkers = function(mapMarkers) {
                if (mapMarkers == false) {
                    for (var i = 0, n = markers.length; i < n; ++i) {
                        markers[i].setMap(null);
                    }
                } else {
                    for (var i = 0, n = markers.length; i < n; ++i) {
                        markers[i].setMap(map);
                    }
                }
            }


        }

        $scope.initMap();
    }


    function getFormattedTime(timestampInNanoseconds) {
        if (timestampInNanoseconds == null)
            return "";
        var dateString = parseFloat(timestampInNanoseconds);
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
            totalTimeString += timeInHours + "h ";
        if (timeInDays == 0) {
            totalTimeString += timeInMinutes + " min ";
        }
        return totalTimeString;
    }

    $scope.displayFloorplanOverlay = function() {
        $scope.maploader = false;

        var map, pointarray, heatmap;
        var markers = [];
        var taxiData = [];

        var wifiLocations = [];
        angular.forEach($scope.accePointData, function(val, key) {
            if (val.lat == null || val.lng == null) {} else {
                wifiLocations.push([val.name, val.lat, val.lng, 'redMarker', '']);
            }
        });

        var userLocations = [];
        var totalVisitorCount = 0;

        if ($scope.heatmapAccessPoints.length == 0) {
            var locations = wifiLocations;
            taxiData.push({
                location: new google.maps.LatLng(null, null),
                weight: null
            });
        } else {
            $scope.rangeSlider = false;
            angular.forEach($scope.heatmapAccessPoints, function(val, key) {
                if (val.lat == null || val.lng == null) {} else {
                    var vName = (val.displayName == "") ? "Visitors:" : (val.displayName);
                    $scope.getWeightTime = getFormattedTime(val.weight);
                    userLocations.push([vName, val.lat, val.lng, 'blueMarker', $scope.getWeightTime]);

                    taxiData.push({
                        location: new google.maps.LatLng(val.lat, val.lng),
                        weight: val.weight
                    });
                    if (val.weight > 0) {
                        totalVisitorCount += val.weight;
                    }
                }
            });
            var locations = wifiLocations.concat(userLocations);
        }
        if ($scope.storeStatus.length == 0 && $scope.floorStatus.length == 0) {
            $scope.displayMessage = 'Please select a store or floor and a date to fetch all observations.';
        } else {
            $scope.visitorCount = getFormattedTime(totalVisitorCount);
            $scope.displayMessage = 'Total dwelltime in store:';
        }

        $scope.initMap = function() {
            var map = new google.maps.Map(document.getElementById('map-canvas'), {
                zoom: 13,
                mapTypeId: 'roadmap'
            });

            var pointArray = new google.maps.MVCArray(taxiData);

            heatmap = new google.maps.visualization.HeatmapLayer({
                data: pointArray,
                map: map,
                "opacity": $scope.opacitySlider,
                "maxOpacity": 1,
                "radius": $scope.radiusSlider,
                "scaleRadius": true
            });

            // overlay image latlag values
            var swBound = new google.maps.LatLng(
                $scope.floorplan.latitudeLowerLeftCorner,
                $scope.floorplan.longitudeLowerLeftCorner);
            var neBound = new google.maps.LatLng(
                $scope.floorplan.latitudeUpperRightCorner,
                $scope.floorplan.longitudeUpperRightCorner);
            var bounds = new google.maps.LatLngBounds(swBound, neBound);

            // overlay image
            var srcImage = $scope.floorImage;


            // The custom USGSOverlay object contains the USGS image,
            // the bounds of the image, and a reference to the map.
            overlay = new USGSOverlay(bounds, srcImage, map);

            // map Custom marker
            var infowindow = new google.maps.InfoWindow();

            var iconBase = 'images/';
            var icons = {
                redMarker: {
                    icon: iconBase + 'wifi_access_marker.png'
                },
                blueMarker: {
                    icon: iconBase + 'ltblue-dot.png'
                }
            };

            var iconBase = 'wifi_access_marker.png';
            var marker, i;

            for (i = 0; i < locations.length; i++) {
                if ($scope.heatmapAccessPoints.length == 0) {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        icon: icons[locations[i][3]].icon,
                        map: map
                    });
                } else {
                    var marker = new MarkerWithLabel({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        icon: icons[locations[i][3]].icon,
                        map: map,
                        labelContent: locations[i][4],
                        labelAnchor: new google.maps.Point(22, 0),
                        labelClass: "map_marker_labels", // the CSS class for the label
                        labelStyle: {
                            opacity: 0.75
                        }
                    });
                }
                markers.push(marker);

                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        infowindow.setContent(locations[i][0]);
                        infowindow.open(map, marker);
                    };
                })(marker, i));
            }
            // auto center
            $scope.AutoCenter = function() {
                var bounds = new google.maps.LatLngBounds();
                $.each(markers, function(index, marker) {
                    bounds.extend(marker.position);
                });
                map.fitBounds(bounds);
            }
            $scope.AutoCenter();

            // map markers set to diable onload
            $scope.locationMarkers = false;
            for (var i = 0, n = markers.length; i < n; ++i) {
                markers[i].setMap(null);
            }

            // toggle map markers function
            $scope.toggleMarkers = function(mapMarkers) {
                if (mapMarkers == false) {
                    for (var i = 0, n = markers.length; i < n; ++i) {
                        markers[i].setMap(null);
                    }
                } else {
                    for (var i = 0, n = markers.length; i < n; ++i) {
                        markers[i].setMap(map);
                    }
                }
            }
        }


        $scope.radiusSlider = 40;
        $scope.opacitySlider = 0.9;

        // heat map opacity change
        $scope.changeRadius = function() {
            heatmap.set('radius', $scope.radiusSlider);
        }

        // heat map opacity change
        $scope.changeOpacity = function() {
            heatmap.set('opacity', $scope.opacitySlider);
        }

        // This example creates a custom overlay called USGSOverlay, containing
        // a U.S. Geological Survey (USGS) image of the relevant area on the map.

        // Set the custom overlay object's prototype to a new instance
        // of OverlayView. In effect, this will subclass the overlay class therefore
        // it's simpler to load the API synchronously, using
        // google.maps.event.addDomListener().
        // Note that we set the prototype to an instance, rather than the
        // parent class itself, because we do not wish to modify the parent class.

        var overlay;
        USGSOverlay.prototype = new google.maps.OverlayView();


        /** @constructor */
        function USGSOverlay(bounds, image, map) {

            // Initialize all properties.
            this.bounds_ = bounds;
            this.image_ = image;
            this.map_ = map;

            // Define a property to hold the image's div. We'll
            // actually create this div upon receipt of the onAdd()
            // method so we'll leave it null for now.
            this.div_ = null;
            this.rotation = $scope.floorplan.rotationDegrees;
            // Explicitly call setMap on this overlay.
            this.setMap(map);
        }

        /**
         * onAdd is called when the map's panes are ready and the overlay has been
         * added to the map.
         */
        USGSOverlay.prototype.onAdd = function() {

            var div = document.createElement('div');
            div.style.borderStyle = 'none';
            div.style.borderWidth = '0px';
            div.style.position = 'absolute';

            // Create the img element and attach it to the div.
            var img = document.createElement('img');
            img.src = this.image_;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.position = 'absolute';
            div.appendChild(img);

            this.div_ = div;

            // Add the element to the "overlayLayer" pane.
            var panes = this.getPanes();
            panes.overlayLayer.appendChild(div);
            this.rotate(this.rotation);
        };

        USGSOverlay.prototype.draw = function() {

            // We use the south-west and north-east
            // coordinates of the overlay to peg it to the correct position and size.
            // To do this, we need to retrieve the projection from the overlay.
            var overlayProjection = this.getProjection();

            // Retrieve the south-west and north-east coordinates of this overlay
            // in LatLngs and convert them to pixel coordinates.
            // We'll use these coordinates to resize the div.
            var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
            var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

            // Resize the image's div to fit the indicated dimensions.
            var div = this.div_;
            div.style.left = sw.x + 'px';
            div.style.top = ne.y + 'px';
            div.style.width = (ne.x - sw.x) + 'px';
            div.style.height = (sw.y - ne.y) + 'px';
        };

        // The onRemove() method will be called automatically from the API if
        // we ever set the overlay's map property to 'null'.
        USGSOverlay.prototype.onRemove = function() {
            this.div_.parentNode.removeChild(this.div_);
            this.div_ = null;
        };



        USGSOverlay.prototype.rotate = function(degrees) {
            var div = this.div_;
            div.style.msTransform = 'rotate(' + degrees + 'deg)'; // IE
            div.style.webkitTransform = 'rotate(' + degrees + 'deg)'; // Chrome/Safari
            div.style.MozTransform = 'rotate(' + degrees + 'deg)'; // Firefox
            div.style.OTransform = 'rotate(' + degrees + 'deg)'; // Opera
            div.style.transform = 'rotate(' + degrees + 'deg)';
            div.style["transform-origin"] = "50% 50%"; //Rotation im Mittelpunkt
            this.rotation = degrees;
        };
        $scope.initMap();

    }

});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {﻿/*
This controller uses fortinetService to manage fortinent person maps as google heat maps
*/
angular.module('lsi').controller('fortinentpmapcpersonsCtrl', function($scope, fortinetService) {

    $scope.maploader = false;
    $scope.rangeSlider = true;
    $scope.accePointData = [];
    $scope.displayMessage = 'Please select a store or floor and a date to fetch all observations.';
    $scope.visitorCount = '';
    $scope.selectedDate = '';

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

                    // intialize map on load
                    fortinetService.getDensityHeatmap($scope.treeList.id).then(function(response) {
                            if (response.data) {
                                $scope.densityHeatmapValues = response.data;
                                $scope.loadGoogleMap();
                            }
                        },
                        function(error) {
                            alert("Error retrieving API data, " + error.statusText);
                        });

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


    function getObjects(obj, key, val) {
        var objects = [];
        for (var i in obj) {
            if (!obj.hasOwnProperty(i)) continue;
            if (typeof obj[i] == 'object') {
                objects = objects.concat(getObjects(obj[i], key, val));
            } else if (i == key && obj[key] == val) {
                objects.push(obj);
            }
        }
        return objects;
    }


    $scope.branchStatus = [], $scope.storeStatus = [], $scope.floorStatus = [];
    $scope.captureRateData = {}, $scope.type = '';

    $scope.getSelectedId = function(selectedId, selectedName) {
        $scope.type = selectedName.toUpperCase();
        switch (selectedName) {
            case 'Branch':
                {
                    $scope.branchStatus = [];
                    $scope.branchStatus.push(selectedId);
                    $scope.storeStatus = [];$scope.floorStatus = [];
                    $scope.onlyArea = false;
                    $scope.displayMessage = 'Please select a store or floor and a date to fetch all observations.';
                    $scope.visitorCount = '';
                    break;
                }
            case 'Floor':
                {
                    $scope.$watch('selectedDate', function() {
                        if ($scope.selectedDate == '' || $scope.selectedDate == null) {
                            $scope.displayMessage = 'Please select a store or floor and a date to fetch all observations.';
                        } else {
                            $scope.floorStatus = [];
                            $scope.floorStatus.push(selectedId);
                            $scope.branchStatus = [];
                            $scope.storeStatus = [];
                            $scope.onlyArea = false;
                            $scope.accePointData = [];
                            $scope.visitorCount = '';
                            var floorplanImage = "floorMap";
                            $scope.displayMessage = 'Fetching Observations. Please wait.';
                            $scope.maploader = true;
                            $scope.sDate = moment($scope.selectedDate).format('YYYY-MM-DD');
                            var selDate = (moment.utc($scope.sDate, 'YYYY-MM-DD').startOf('day').format('x')) * 1000; // date in milliseconds

                            $scope.resPullPush = $scope.accessPointPullPush;
                            var accePointDataPullPush = [];

                            for (i = 0; i < $scope.resPullPush.length; i++) {
                                if ($scope.resPullPush[i].floor != null) {
                                    if ($scope.resPullPush[i].floor.id == selectedId) {
                                        accePointDataPullPush.push($scope.resPullPush[i]);
                                    }
                                }
                            }

                            angular.forEach(accePointDataPullPush, function(val, key) {
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

                            fortinetService.getCumulativePersons($scope.accePointData, selDate).then(function(response) {
                                    if (response.data) {
                                        $scope.heatmapAccessPoints = response.data;
                                        fortinetService.getHeatmapFloorplan($scope.type, selectedId).then(function(response) {
                                                if (response.data) {
                                                    response = response.data;
                                                    $scope.floorplan = response;
                                                    if (response.latitudeLowerLeftCorner == null || response.latitudeUpperRightCorner == null || response.longitudeLowerLeftCorner == null || response.longitudeUpperRightCorner == null) {
                                                        $scope.floorImage = '';
                                                        $scope.displayFloorplanOverlay();
                                                    } else {
                                                        fortinetService.getFloorplanImage(floorplanImage, selectedId).then(function(response) {
                                                                if (response.data) {
                                                                    $scope.floorImage = "data:image/png;base64," + response.data;
                                                                    $scope.displayFloorplanOverlay();
                                                                }
                                                            },
                                                            function(error) {
                                                                alert("Error retrieving API data, " + error.statusText);
                                                            });
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
                        }
                    });

                    break;
                }
            case 'Store':
                {
                    $scope.$watch('selectedDate', function() {
                        if ($scope.selectedDate == '' || $scope.selectedDate == null) {
                            $scope.displayMessage = 'Please select a store or floor and a date to fetch all observations.';
                        } else {
                            $scope.storeStatus = [];
                            $scope.storeStatus.push(selectedId);
                            $scope.branchStatus = [];
                            $scope.floorStatus = [];
                            $scope.onlyArea = false;
                            $scope.accePointData = [];
                            $scope.visitorCount = '';
                            var floorplanImage = "indoorMap";
                            $scope.displayMessage = 'Fetching Observations. Please wait.';
                            $scope.maploader = true;
                            $scope.sDate = moment($scope.selectedDate).format('YYYY-MM-DD');
                            var selDate = (moment.utc($scope.sDate, 'YYYY-MM-DD').startOf('day').format('x')) * 1000; // date in milliseconds


                            $scope.resPullPush = $scope.accessPointPullPush;
                            var accePointDataPullPush = [];

                            for (i = 0; i < $scope.resPullPush.length; i++) {
                                if ($scope.resPullPush[i].store != null) {
                                    if ($scope.resPullPush[i].store.id == selectedId) {
                                        accePointDataPullPush.push($scope.resPullPush[i]);
                                    }
                                }
                            }
                            angular.forEach(accePointDataPullPush, function(val, key) {
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

                            fortinetService.getCumulativePersons($scope.accePointData, selDate).then(function(response) {
                                    if (response.data) {
                                        $scope.heatmapAccessPoints = response.data;
                                        fortinetService.getHeatmapFloorplan($scope.type, selectedId).then(function(response) {
                                                if (response.data) {
                                                    response = response.data;
                                                    $scope.floorplan = response;
                                                    if (response.latitudeLowerLeftCorner == null || response.latitudeUpperRightCorner == null || response.longitudeLowerLeftCorner == null || response.longitudeUpperRightCorner == null) {
                                                        $scope.floorImage = '';
                                                        $scope.displayFloorplanOverlay();
                                                    } else {
                                                        fortinetService.getFloorplanImage(floorplanImage, selectedId).then(function(response) {
                                                                if (response.data) {
                                                                    $scope.floorImage = "data:image/png;base64," + response.data;
                                                                    $scope.displayFloorplanOverlay();
                                                                }
                                                            },
                                                            function(error) {
                                                                alert("Error retrieving API data, " + error.statusText);
                                                            });
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
                        }
                    });

                    break;
                }
        }
    };


    $scope.loadGoogleMap = function() {

        var map, pointarray, heatmap;
        var markers = [];

        var locations = [];
        angular.forEach($scope.densityHeatmapValues, function(val, key) {
            if (val.lat == null || val.lng == null) {} else {
                locations.push([val.name, val.lat, val.lng, 'redMarker']);
            }
        });

        $scope.initMap = function() {
            var map = new google.maps.Map(document.getElementById('map-canvas'), {
                zoom: 11,
                mapTypeId: 'roadmap'
            });

            // map Custom marker
            var infowindow = new google.maps.InfoWindow();

            var iconBase = 'images/';
            var icons = {
                redMarker: {
                    icon: iconBase + 'wifi_access_marker.png'
                },
                blueMarker: {
                    icon: iconBase + 'ltblue-dot.png'
                }
            };

            var iconBase = 'wifi_access_marker.png';
            var marker, i;

            for (i = 0; i < locations.length; i++) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    icon: icons[locations[i][3]].icon,
                    map: map,
                });

                markers.push(marker);

                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        infowindow.setContent(locations[i][0]);
                        infowindow.open(map, marker);
                    };
                })(marker, i));
            }


            // auto center
            $scope.AutoCenter = function() {
                var bounds = new google.maps.LatLngBounds();
                $.each(markers, function(index, marker) {
                    bounds.extend(marker.position);
                });
                map.fitBounds(bounds);
            }
            $scope.AutoCenter();

            // toggle map markers function
            $scope.toggleMarkers = function(mapMarkers) {
                if (mapMarkers == false) {
                    for (var i = 0, n = markers.length; i < n; ++i) {
                        markers[i].setMap(null);
                    }
                } else {
                    for (var i = 0, n = markers.length; i < n; ++i) {
                        markers[i].setMap(map);
                    }
                }
            }


        }

        $scope.initMap();
    }

    $scope.displayFloorplanOverlay = function() {
        $scope.maploader = false;

        var map, pointarray, heatmap;
        var markers = [];
        var taxiData = [];

        var wifiLocations = [];
        angular.forEach($scope.accePointData, function(val, key) {
            if (val.lat == null || val.lng == null) {} else {
                wifiLocations.push([val.name, val.lat, val.lng, 'redMarker', '']);
            }
        });

        var userLocations = [];
        var totalVisitorCount = 0;

        if ($scope.heatmapAccessPoints.length == 0) {
            var locations = wifiLocations;
            taxiData.push({
                location: new google.maps.LatLng(null, null),
                weight: null
            });
        } else {
            $scope.rangeSlider = false;
            angular.forEach($scope.heatmapAccessPoints, function(val, key) {
                if (val.lat == null || val.lng == null) {} else {
                    var vName = (val.displayName == "") ? "Visitors:" : (val.displayName);
                    userLocations.push([vName, val.lat, val.lng, 'blueMarker', val.weight]);
                    taxiData.push({
                        location: new google.maps.LatLng(val.lat, val.lng),
                        weight: val.weight
                    });
                    if (val.weight > 0) {
                        totalVisitorCount += val.weight;
                    }
                }
            });
            var locations = wifiLocations.concat(userLocations);
        }
        if ($scope.storeStatus.length == 0 && $scope.floorStatus.length == 0) {
            $scope.displayMessage = 'Please select a store or floor and a date to fetch all observations.';
        } else {
            $scope.visitorCount = totalVisitorCount;
            $scope.displayMessage = 'Cumulative traffic in store:';
        }

        $scope.initMap = function() {
            var map = new google.maps.Map(document.getElementById('map-canvas'), {
                zoom: 13,
                mapTypeId: 'roadmap'
            });

            var pointArray = new google.maps.MVCArray(taxiData);

            heatmap = new google.maps.visualization.HeatmapLayer({
                data: pointArray,
                map: map,
                "opacity": $scope.opacitySlider,
                "maxOpacity": 1,
                "radius": $scope.radiusSlider,
                "scaleRadius": true
            });

            // overlay image latlag values
            var swBound = new google.maps.LatLng(
                $scope.floorplan.latitudeLowerLeftCorner,
                $scope.floorplan.longitudeLowerLeftCorner);
            var neBound = new google.maps.LatLng(
                $scope.floorplan.latitudeUpperRightCorner,
                $scope.floorplan.longitudeUpperRightCorner);
            var bounds = new google.maps.LatLngBounds(swBound, neBound);

            // overlay image
            var srcImage = $scope.floorImage;


            // The custom USGSOverlay object contains the USGS image,
            // the bounds of the image, and a reference to the map.
            overlay = new USGSOverlay(bounds, srcImage, map);

            // map Custom marker
            var infowindow = new google.maps.InfoWindow();

            var iconBase = 'images/';
            var icons = {
                redMarker: {
                    icon: iconBase + 'wifi_access_marker.png'
                },
                blueMarker: {
                    icon: iconBase + 'ltblue-dot.png'
                }
            };

            var iconBase = 'wifi_access_marker.png';
            var marker, i;

            for (i = 0; i < locations.length; i++) {
                if ($scope.heatmapAccessPoints.length == 0) {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        icon: icons[locations[i][3]].icon,
                        map: map
                    });
                } else {
                    var marker = new MarkerWithLabel({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        icon: icons[locations[i][3]].icon,
                        map: map,
                        labelContent: locations[i][4],
                        labelAnchor: new google.maps.Point(22, 0),
                        labelClass: "map_marker_labels", // the CSS class for the label
                        labelStyle: {
                            opacity: 0.75
                        }
                    });
                }
                markers.push(marker);

                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        infowindow.setContent(locations[i][0]);
                        infowindow.open(map, marker);
                    };
                })(marker, i));
            }
            // auto center
            $scope.AutoCenter = function() {
                var bounds = new google.maps.LatLngBounds();
                $.each(markers, function(index, marker) {
                    bounds.extend(marker.position);
                });
                map.fitBounds(bounds);
            }
            $scope.AutoCenter();

            // map markers set to diable onload
            $scope.locationMarkers = false;
            for (var i = 0, n = markers.length; i < n; ++i) {
                markers[i].setMap(null);
            }

            // toggle map markers function
            $scope.toggleMarkers = function(mapMarkers) {
                if (mapMarkers == false) {
                    for (var i = 0, n = markers.length; i < n; ++i) {
                        markers[i].setMap(null);
                    }
                } else {
                    for (var i = 0, n = markers.length; i < n; ++i) {
                        markers[i].setMap(map);
                    }
                }
            }
        }


        $scope.radiusSlider = 40;
        $scope.opacitySlider = 0.9;

        // heat map opacity change
        $scope.changeRadius = function() {
            heatmap.set('radius', $scope.radiusSlider);
        }

        // heat map opacity change
        $scope.changeOpacity = function() {
            heatmap.set('opacity', $scope.opacitySlider);
        }

        // This example creates a custom overlay called USGSOverlay, containing
        // a U.S. Geological Survey (USGS) image of the relevant area on the map.

        // Set the custom overlay object's prototype to a new instance
        // of OverlayView. In effect, this will subclass the overlay class therefore
        // it's simpler to load the API synchronously, using
        // google.maps.event.addDomListener().
        // Note that we set the prototype to an instance, rather than the
        // parent class itself, because we do not wish to modify the parent class.

        var overlay;
        USGSOverlay.prototype = new google.maps.OverlayView();


        /** @constructor */
        function USGSOverlay(bounds, image, map) {

            // Initialize all properties.
            this.bounds_ = bounds;
            this.image_ = image;
            this.map_ = map;

            // Define a property to hold the image's div. We'll
            // actually create this div upon receipt of the onAdd()
            // method so we'll leave it null for now.
            this.div_ = null;
            this.rotation = $scope.floorplan.rotationDegrees;
            // Explicitly call setMap on this overlay.
            this.setMap(map);
        }

        /**
         * onAdd is called when the map's panes are ready and the overlay has been
         * added to the map.
         */
        USGSOverlay.prototype.onAdd = function() {

            var div = document.createElement('div');
            div.style.borderStyle = 'none';
            div.style.borderWidth = '0px';
            div.style.position = 'absolute';

            // Create the img element and attach it to the div.
            var img = document.createElement('img');
            img.src = this.image_;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.position = 'absolute';
            div.appendChild(img);

            this.div_ = div;

            // Add the element to the "overlayLayer" pane.
            var panes = this.getPanes();
            panes.overlayLayer.appendChild(div);
            this.rotate(this.rotation);
        };

        USGSOverlay.prototype.draw = function() {

            // We use the south-west and north-east
            // coordinates of the overlay to peg it to the correct position and size.
            // To do this, we need to retrieve the projection from the overlay.
            var overlayProjection = this.getProjection();

            // Retrieve the south-west and north-east coordinates of this overlay
            // in LatLngs and convert them to pixel coordinates.
            // We'll use these coordinates to resize the div.
            var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
            var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

            // Resize the image's div to fit the indicated dimensions.
            var div = this.div_;
            div.style.left = sw.x + 'px';
            div.style.top = ne.y + 'px';
            div.style.width = (ne.x - sw.x) + 'px';
            div.style.height = (sw.y - ne.y) + 'px';
        };

        // The onRemove() method will be called automatically from the API if
        // we ever set the overlay's map property to 'null'.
        USGSOverlay.prototype.onRemove = function() {
            this.div_.parentNode.removeChild(this.div_);
            this.div_ = null;
        };



        USGSOverlay.prototype.rotate = function(degrees) {
            var div = this.div_;
            div.style.msTransform = 'rotate(' + degrees + 'deg)'; // IE
            div.style.webkitTransform = 'rotate(' + degrees + 'deg)'; // Chrome/Safari
            div.style.MozTransform = 'rotate(' + degrees + 'deg)'; // Firefox
            div.style.OTransform = 'rotate(' + degrees + 'deg)'; // Opera
            div.style.transform = 'rotate(' + degrees + 'deg)';
            div.style["transform-origin"] = "50% 50%"; //Rotation im Mittelpunkt
            this.rotation = degrees;
        };
        $scope.initMap();

    }

});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {﻿/*
This controller uses fortinetService to manage fortinent traffic maps as google heat maps
*/
angular.module('lsi').controller('fortinentpmapctrafficCtrl', function($scope, fortinetService) {

    $scope.maploader = false;
    $scope.rangeSlider = true;
    $scope.accePointData = [];
    $scope.displayMessage = 'Please select a store or floor and a date to fetch all observations.';
    $scope.visitorCount = '';
    $scope.selectedDate = '';

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

                    // intialize map on load
                    fortinetService.getDensityHeatmap($scope.treeList.id).then(function(response) {
                            if (response.data) {
                                $scope.densityHeatmapValues = response.data;
                                $scope.loadGoogleMap();
                            }
                        },
                        function(error) {
                            alert("Error retrieving API data, " + error.statusText);
                        });

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

    function getObjects(obj, key, val) {
        var objects = [];
        for (var i in obj) {
            if (!obj.hasOwnProperty(i)) continue;
            if (typeof obj[i] == 'object') {
                objects = objects.concat(getObjects(obj[i], key, val));
            } else if (i == key && obj[key] == val) {
                objects.push(obj);
            }
        }
        return objects;
    }


    $scope.branchStatus = [], $scope.storeStatus = [], $scope.floorStatus = [];
    $scope.captureRateData = {}, $scope.type = '';

    $scope.getSelectedId = function(selectedId, selectedName) {
        $scope.type = selectedName.toUpperCase();
        switch (selectedName) {
            case 'Branch':
                {
                    $scope.branchStatus = [];
                    $scope.branchStatus.push(selectedId);
                    $scope.storeStatus = [];$scope.floorStatus = [];
                    $scope.onlyArea = false;
                    $scope.displayMessage = 'Please select a store or floor and a date to fetch all observations.';
                    $scope.visitorCount = '';
                    break;
                }
            case 'Floor':
                {
                    $scope.$watch('selectedDate', function() {
                        if ($scope.selectedDate == '' || $scope.selectedDate == null) {
                            $scope.displayMessage = 'Please select a store or floor and a date to fetch all observations.';
                        } else {
                            $scope.floorStatus = [];
                            $scope.floorStatus.push(selectedId);
                            $scope.branchStatus = [];
                            $scope.storeStatus = [];
                            $scope.onlyArea = false;
                            $scope.accePointData = [];
                            $scope.visitorCount = '';
                            var floorplanImage = "floorMap";
                            $scope.displayMessage = 'Fetching Observations. Please wait.';
                            $scope.maploader = true;
                            $scope.sDate = moment($scope.selectedDate).format('YYYY-MM-DD');
                            var selDate = (moment.utc($scope.sDate, 'YYYY-MM-DD').startOf('day').format('x')) * 1000; // date in milliseconds

                            $scope.resPullPush = $scope.accessPointPullPush;
                            var accePointDataPullPush = [];

                            for (i = 0; i < $scope.resPullPush.length; i++) {
                                if ($scope.resPullPush[i].floor != null) {
                                    if ($scope.resPullPush[i].floor.id == selectedId) {
                                        accePointDataPullPush.push($scope.resPullPush[i]);
                                    }
                                }
                            }

                            angular.forEach(accePointDataPullPush, function(val, key) {
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

                            fortinetService.getCumulativeVisitor($scope.accePointData, selDate).then(function(response) {
                                    if (response.data) {
                                        $scope.heatmapAccessPoints = response.data;
                                        fortinetService.getHeatmapFloorplan($scope.type, selectedId).then(function(response) {
                                                if (response.data) {
                                                    response = response.data;
                                                    $scope.floorplan = response;
                                                    if (response.latitudeLowerLeftCorner == null || response.latitudeUpperRightCorner == null || response.longitudeLowerLeftCorner == null || response.longitudeUpperRightCorner == null) {
                                                        $scope.floorImage = '';
                                                        $scope.displayFloorplanOverlay();
                                                    } else {
                                                        fortinetService.getFloorplanImage(floorplanImage, selectedId).then(function(response) {
                                                                if (response.data) {
                                                                    response = response.data;
                                                                    $scope.floorImage = "data:image/png;base64," + response.data;
                                                                    $scope.displayFloorplanOverlay();
                                                                }
                                                            },
                                                            function(error) {
                                                                alert("Error retrieving API data, " + error.statusText);
                                                            });
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
                        }
                    });

                    break;
                }
            case 'Store':
                {
                    $scope.$watch('selectedDate', function() {
                        if ($scope.selectedDate == '' || $scope.selectedDate == null) {
                            $scope.displayMessage = 'Please select a store or floor and a date to fetch all observations.';
                        } else {
                            $scope.storeStatus = [];
                            $scope.storeStatus.push(selectedId);
                            $scope.branchStatus = [];
                            $scope.floorStatus = [];
                            $scope.onlyArea = false;
                            $scope.accePointData = [];
                            $scope.visitorCount = '';
                            var floorplanImage = "indoorMap";
                            $scope.displayMessage = 'Fetching Observations. Please wait.';
                            $scope.maploader = true;
                            $scope.sDate = moment($scope.selectedDate).format('YYYY-MM-DD');
                            var selDate = (moment.utc($scope.sDate, 'YYYY-MM-DD').startOf('day').format('x')) * 1000; // date in milliseconds

                            $scope.resPullPush = $scope.accessPointPullPush;
                            var accePointDataPullPush = [];

                            for (i = 0; i < $scope.resPullPush.length; i++) {
                                if ($scope.resPullPush[i].store != null) {
                                    if ($scope.resPullPush[i].store.id == selectedId) {
                                        accePointDataPullPush.push($scope.resPullPush[i]);
                                    }
                                }
                            }
                            angular.forEach(accePointDataPullPush, function(val, key) {
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

                            fortinetService.getCumulativeVisitor($scope.accePointData, selDate).then(function(response) {
                                    if (response.data) {
                                        $scope.heatmapAccessPoints = response.data;
                                        fortinetService.getHeatmapFloorplan($scope.type, selectedId).then(function(response) {
                                                if (response.data) {
                                                    response = response.data;
                                                    $scope.floorplan = response;
                                                    if (response.latitudeLowerLeftCorner == null || response.latitudeUpperRightCorner == null || response.longitudeLowerLeftCorner == null || response.longitudeUpperRightCorner == null) {
                                                        $scope.floorImage = '';
                                                        $scope.displayFloorplanOverlay();
                                                    } else {
                                                        fortinetService.getFloorplanImage(floorplanImage, selectedId).then(function(response) {
                                                                if (response.data) {
                                                                    $scope.floorImage = "data:image/png;base64," + response.data;
                                                                    $scope.displayFloorplanOverlay();
                                                                }
                                                            },
                                                            function(error) {
                                                                alert("Error retrieving API data, " + error.statusText);
                                                            });
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
                        }
                    });

                    break;
                }
        }
    };


    $scope.loadGoogleMap = function() {

        var map, pointarray, heatmap;
        var markers = [];

        var locations = [];
        angular.forEach($scope.densityHeatmapValues, function(val, key) {
            if (val.lat == null || val.lng == null) {} else {
                locations.push([val.name, val.lat, val.lng, 'redMarker']);
            }
        });

        $scope.initMap = function() {
            var map = new google.maps.Map(document.getElementById('map-canvas'), {
                zoom: 11,
                mapTypeId: 'roadmap'
            });

            // map Custom marker
            var infowindow = new google.maps.InfoWindow();

            var iconBase = 'images/';
            var icons = {
                redMarker: {
                    icon: iconBase + 'wifi_access_marker.png'
                },
                blueMarker: {
                    icon: iconBase + 'ltblue-dot.png'
                }
            };

            var iconBase = 'wifi_access_marker.png';
            var marker, i;

            for (i = 0; i < locations.length; i++) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    icon: icons[locations[i][3]].icon,
                    map: map,
                });

                markers.push(marker);

                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        infowindow.setContent(locations[i][0]);
                        infowindow.open(map, marker);
                    };
                })(marker, i));
            }


            // auto center
            $scope.AutoCenter = function() {
                var bounds = new google.maps.LatLngBounds();
                $.each(markers, function(index, marker) {
                    bounds.extend(marker.position);
                });
                map.fitBounds(bounds);
            }
            $scope.AutoCenter();

            // toggle map markers function
            $scope.toggleMarkers = function(mapMarkers) {
                if (mapMarkers == false) {
                    for (var i = 0, n = markers.length; i < n; ++i) {
                        markers[i].setMap(null);
                    }
                } else {
                    for (var i = 0, n = markers.length; i < n; ++i) {
                        markers[i].setMap(map);
                    }
                }
            }


        }

        $scope.initMap();
    }

    $scope.displayFloorplanOverlay = function() {
        $scope.maploader = false;

        var map, pointarray, heatmap;
        var markers = [];
        var taxiData = [];

        var wifiLocations = [];
        angular.forEach($scope.accePointData, function(val, key) {
            if (val.lat == null || val.lng == null) {} else {
                wifiLocations.push([val.name, val.lat, val.lng, 'redMarker', '']);
            }
        });

        var userLocations = [];
        var totalVisitorCount = 0;

        if ($scope.heatmapAccessPoints.length == 0) {
            var locations = wifiLocations;
            taxiData.push({
                location: new google.maps.LatLng(null, null),
                weight: null
            });
        } else {
            $scope.rangeSlider = false;
            angular.forEach($scope.heatmapAccessPoints, function(val, key) {
                if (val.lat == null || val.lng == null) {} else {
                    var vName = (val.displayName == "") ? "Visitors:" : (val.displayName);
                    userLocations.push([vName, val.lat, val.lng, 'blueMarker', val.weight]);
                    taxiData.push({
                        location: new google.maps.LatLng(val.lat, val.lng),
                        weight: val.weight
                    });
                    if (val.weight > 0) {
                        totalVisitorCount += val.weight;
                    }
                }
            });
            var locations = wifiLocations.concat(userLocations);
        }
        if ($scope.storeStatus.length == 0 && $scope.floorStatus.length == 0) {
            $scope.displayMessage = 'Please select a store or floor and a date to fetch all observations.';
        } else {
            $scope.visitorCount = totalVisitorCount;
            $scope.displayMessage = 'Cumulative traffic in store:';
        }

        $scope.initMap = function() {
            var map = new google.maps.Map(document.getElementById('map-canvas'), {
                zoom: 13,
                mapTypeId: 'roadmap'
            });

            var pointArray = new google.maps.MVCArray(taxiData);

            heatmap = new google.maps.visualization.HeatmapLayer({
                data: pointArray,
                map: map,
                "opacity": $scope.opacitySlider,
                "maxOpacity": 1,
                "radius": $scope.radiusSlider,
                "scaleRadius": true
            });

            // overlay image latlag values
            var swBound = new google.maps.LatLng(
                $scope.floorplan.latitudeLowerLeftCorner,
                $scope.floorplan.longitudeLowerLeftCorner);
            var neBound = new google.maps.LatLng(
                $scope.floorplan.latitudeUpperRightCorner,
                $scope.floorplan.longitudeUpperRightCorner);
            var bounds = new google.maps.LatLngBounds(swBound, neBound);

            // overlay image
            var srcImage = $scope.floorImage;


            // The custom USGSOverlay object contains the USGS image,
            // the bounds of the image, and a reference to the map.
            overlay = new USGSOverlay(bounds, srcImage, map);

            // map Custom marker
            var infowindow = new google.maps.InfoWindow();

            var iconBase = 'images/';
            var icons = {
                redMarker: {
                    icon: iconBase + 'wifi_access_marker.png'
                },
                blueMarker: {
                    icon: iconBase + 'ltblue-dot.png'
                }
            };

            var iconBase = 'wifi_access_marker.png';
            var marker, i;

            for (i = 0; i < locations.length; i++) {
                if ($scope.heatmapAccessPoints.length == 0) {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        icon: icons[locations[i][3]].icon,
                        map: map
                    });
                } else {
                    var marker = new MarkerWithLabel({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        icon: icons[locations[i][3]].icon,
                        map: map,
                        labelContent: locations[i][4],
                        labelAnchor: new google.maps.Point(22, 0),
                        labelClass: "map_marker_labels", // the CSS class for the label
                        labelStyle: {
                            opacity: 0.75
                        }
                    });
                }
                markers.push(marker);

                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        infowindow.setContent(locations[i][0]);
                        infowindow.open(map, marker);
                    };
                })(marker, i));
            }
            // auto center
            $scope.AutoCenter = function() {
                var bounds = new google.maps.LatLngBounds();
                $.each(markers, function(index, marker) {
                    bounds.extend(marker.position);
                });
                map.fitBounds(bounds);
            }
            $scope.AutoCenter();

            // map markers set to diable onload
            $scope.locationMarkers = false;
            for (var i = 0, n = markers.length; i < n; ++i) {
                markers[i].setMap(null);
            }

            // toggle map markers function
            $scope.toggleMarkers = function(mapMarkers) {
                if (mapMarkers == false) {
                    for (var i = 0, n = markers.length; i < n; ++i) {
                        markers[i].setMap(null);
                    }
                } else {
                    for (var i = 0, n = markers.length; i < n; ++i) {
                        markers[i].setMap(map);
                    }
                }
            }
        }


        $scope.radiusSlider = 40;
        $scope.opacitySlider = 0.9;

        // heat map opacity change
        $scope.changeRadius = function() {
            heatmap.set('radius', $scope.radiusSlider);
        }

        // heat map opacity change
        $scope.changeOpacity = function() {
            heatmap.set('opacity', $scope.opacitySlider);
        }

        // This example creates a custom overlay called USGSOverlay, containing
        // a U.S. Geological Survey (USGS) image of the relevant area on the map.

        // Set the custom overlay object's prototype to a new instance
        // of OverlayView. In effect, this will subclass the overlay class therefore
        // it's simpler to load the API synchronously, using
        // google.maps.event.addDomListener().
        // Note that we set the prototype to an instance, rather than the
        // parent class itself, because we do not wish to modify the parent class.

        var overlay;
        USGSOverlay.prototype = new google.maps.OverlayView();


        /** @constructor */
        function USGSOverlay(bounds, image, map) {

            // Initialize all properties.
            this.bounds_ = bounds;
            this.image_ = image;
            this.map_ = map;

            // Define a property to hold the image's div. We'll
            // actually create this div upon receipt of the onAdd()
            // method so we'll leave it null for now.
            this.div_ = null;
            this.rotation = $scope.floorplan.rotationDegrees;
            // Explicitly call setMap on this overlay.
            this.setMap(map);
        }

        /**
         * onAdd is called when the map's panes are ready and the overlay has been
         * added to the map.
         */
        USGSOverlay.prototype.onAdd = function() {

            var div = document.createElement('div');
            div.style.borderStyle = 'none';
            div.style.borderWidth = '0px';
            div.style.position = 'absolute';

            // Create the img element and attach it to the div.
            var img = document.createElement('img');
            img.src = this.image_;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.position = 'absolute';
            div.appendChild(img);

            this.div_ = div;

            // Add the element to the "overlayLayer" pane.
            var panes = this.getPanes();
            panes.overlayLayer.appendChild(div);
            this.rotate(this.rotation);
        };

        USGSOverlay.prototype.draw = function() {

            // We use the south-west and north-east
            // coordinates of the overlay to peg it to the correct position and size.
            // To do this, we need to retrieve the projection from the overlay.
            var overlayProjection = this.getProjection();

            // Retrieve the south-west and north-east coordinates of this overlay
            // in LatLngs and convert them to pixel coordinates.
            // We'll use these coordinates to resize the div.
            var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
            var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

            // Resize the image's div to fit the indicated dimensions.
            var div = this.div_;
            div.style.left = sw.x + 'px';
            div.style.top = ne.y + 'px';
            div.style.width = (ne.x - sw.x) + 'px';
            div.style.height = (sw.y - ne.y) + 'px';
        };

        // The onRemove() method will be called automatically from the API if
        // we ever set the overlay's map property to 'null'.
        USGSOverlay.prototype.onRemove = function() {
            this.div_.parentNode.removeChild(this.div_);
            this.div_ = null;
        };



        USGSOverlay.prototype.rotate = function(degrees) {
            var div = this.div_;
            div.style.msTransform = 'rotate(' + degrees + 'deg)'; // IE
            div.style.webkitTransform = 'rotate(' + degrees + 'deg)'; // Chrome/Safari
            div.style.MozTransform = 'rotate(' + degrees + 'deg)'; // Firefox
            div.style.OTransform = 'rotate(' + degrees + 'deg)'; // Opera
            div.style.transform = 'rotate(' + degrees + 'deg)';
            div.style["transform-origin"] = "50% 50%"; //Rotation im Mittelpunkt
            this.rotation = degrees;
        };
        $scope.initMap();

    }

});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 107 */
/***/ (function(module, exports) {

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

/***/ }),
/* 108 */
/***/ (function(module, exports) {

/*
This controller uses fortinetCampaignService to manage create, delete and update campaigns from the view
*/
angular.module('lsi').controller('fortinentcampcreateCtrl', function($scope, fortinetCampaignService) {
    // *** Constant values specific to the controller *** //
    $scope.constants = {
        "ALERT_DEL_MSG": "Do you want to delete the selected Campaign? This action cannot be undone and campaign details will be lost.",
        "ALERT_DEL_ALL_MSG": "Do you want to delete all the Campaigns? This action cannot be undone and campaigns details will be lost.",
        "TRIGGER_T1": "Once",
        "TRIGGER_T2": "WiFi logins today",
        "TRIGGER_T4": "First time in Area today",
        "ACTION_SMS": "SMS",
        "ACTION_EMAIL": "Email",
        "ACTION_BOTH": "Email/SMS",
        "DATE_FORMAT": "YYYY-MM-DD",
        "TIME_FORMAT": "HH:mm:ss",
        "TRIGGER_NAMES": {
            "t1": "Once",
            "t3": "WiFi logins today",
            "t2": "First time in Store today",
            "t4": "First time in Area today",
            "t5": "Daily dwell-time per Area exceeded"
        },
        "STATUS_START": "started",
        "STATUS_STOP": "stopped",
        "ACTION_START": "Start",
        "ACTION_STOP": "Stop",
        "DEFAULT_COUPON": "images/message.png",
        "TIME_SPEC": "Specific time",
        "TIME_IMM": "Immediately",
        "MSG_CUSTOM": "Customized message",
        "MSG_FIXED": "Fixed message",
        "MSG_UNSUB": "Click to unsubscribe",
        "OPTS_ALL_ACNTS": "All accounts",
        "OPTS_PRSN_TGRD": "Person that triggered",
        "OPTS_SLCTD_STORES": "Selected Stores",
        "ERROR_TXT": "Error processing data: "
    }
    // *** Scope variables declaration *** //
    $scope.editCamp = {};
    $scope.edit = false;
    $scope.update = false;
    $scope.addCmp = false;
    $scope.dt = new Date();
    $scope.dt.setHours(00);
    $scope.dt.setMinutes(00);
    $scope.mytimepick = $scope.dt;
    $scope.selectedRow = null;
    $scope.deliveryTimeDisable = false;
    $scope.imageUrl = null;
    var selctd_id = null;

    // *** set default values to date and time pickers *** //
    $scope.fortinetNewCmpDates = {
        startDate: moment(),
        endDate: moment().add(7, 'day')
    };


    // ***  Call Get all campaigns service to display *** //
    $scope.getAllCampaigns = function() {
        $scope.newCampaign = {};
        $scope.newCampaign.startDateTime = new Date();
        $scope.newCampaign.actions = $scope.constants.ACTION_SMS;
        $scope.newCampaign.timeDelay = $scope.constants.TIME_SPEC;
        $scope.newCampaign.messageUnsubscribe = $scope.constants.MSG_UNSUB;
        $scope.newCampaign.timeToSend = moment().utc().format($scope.constants.TIME_FORMAT);
        $scope.selectedRow = null;
        $scope.edit = false;
        fortinetCampaignService.getAllCampaigns().then(function(response) {
            if (response.data) {
                angular.forEach(response.data, function(campaign) {
                    if (campaign.couponUrl === null) {
                        campaign.couponUrl = $scope.constants.DEFAULT_COUPON;
                    } else if (campaign.couponUrl) {
                        var arrVals = (campaign.couponUrl).split("/coupon/");
                        arrVals = arrVals[1].split(".");
                        arrVals = arrVals[0].split("coupon")
                        var cpnId = arrVals[1];
                        fortinetCampaignService.getCampaignCoupon(cpnId).then(function(res) {
                            if (res.data) {
                                campaign.couponUrl = "data:image/png;base64," + res.data;
                            }
                        }, function(error) {
                            alert($scope.constants.ERROR_TXT + error.statusText)
                        });
                    }
                    $scope.timezone = moment().utc().tz(campaign.timezone).format('Z');
                    if (campaign.timeToSend) {
                        var tm = moment.utc(campaign.startDateTime + " " + campaign.timeToSend).zone($scope.timezone).format('HH:mm');
                        campaign.timeToSend = tm;
                    }
                    campaign.startDateTime = moment.utc(campaign.startDateTime).zone($scope.timezone).format($scope.constants.DATE_FORMAT);
                    if (campaign.status === $scope.constants.STATUS_START) {
                        campaign.action = $scope.constants.ACTION_STOP;
                    } else if (campaign.status === $scope.constants.STATUS_STOP) {
                        campaign.action = $scope.constants.ACTION_START;
                    }
                })
                $scope.allCampaigns = response.data;
                $scope.sortReverse = false; // set the default sort order
                $scope.pageOptions = [10, 20, 30];
                $scope.viewby = 10;
                $scope.totalItems = $scope.allCampaigns.length;
                $scope.currentPage = 1;
                $scope.itemsPerPage = $scope.viewby;
                $scope.maxSize = 3;
            }
        }, function(error) {
            alert($scope.constants.ERROR_TXT + error.statusText);
        });
    }
    $scope.setItemsPerPage = function(num) {
        $scope.itemsPerPage = num;
        $scope.currentPage = 1; //reset to first paghe
    }
    $scope.getAllCampaigns();
    // *** get campaigns meta data (Areas, store and list info) *** //
    fortinetCampaignService.getCampaignData().then(function(response) {
        if (response.data) {
            $scope.campDetails = response.data;
        }
    }, function(error) {
        alert($scope.constants.ERROR_TXT + error.statusText)
    });
    $scope.setClickedRow = function(index, id) {
        $scope.edit = true;
        $scope.selectedRow = index;
        selctd_id = id;
    };
    // *** Changes campaign status - To start or stop the campaign *** //
    $scope.setStatus = function(id) {
        angular.forEach($scope.allCampaigns, function(campaign) {
            if (id == campaign.id) {
                var cmpId = campaign.id,
                    action = (campaign.status === $scope.constants.STATUS_START) ? $scope.constants.STATUS_STOP : $scope.constants.STATUS_START,
                    trigger = campaign.trigger;
                fortinetCampaignService.setStatusCampaign(action, cmpId, trigger).then(function(response) {
                    campaign.status = action;
                    campaign.action = (action === $scope.constants.STATUS_START) ? $scope.constants.ACTION_STOP : $scope.constants.ACTION_START;
                }, function(error) {
                    alert($scope.constants.ERROR_TXT + error.statusText)
                });
            }
        });
    }
    // *** Removes selected campaign from the list *** //
    $scope.rmvCamp = function() {
        var value = confirm($scope.constants.ALERT_DEL_MSG);
        if (value === true) {
            var id = selctd_id;
            fortinetCampaignService.removeCampaign(id).then(function(response) {
                angular.forEach($scope.allCampaigns, function(cmp) {
                    if (cmp.id == id) {
                        delete cmp;
                        $scope.getAllCampaigns();
                        $scope.selectedRow = null;
                        $scope.edit = false;
                    }
                })
            }, function(error) {
                alert($scope.constants.ERROR_TXT + error.statusText)
            });
        }

    }
    // *** Removes all campaigns *** //
    $scope.rmvAllCmps = function() {
        var value = confirm($scope.constants.ALERT_DEL_ALL_MSG);
        if (value === true) {
            fortinetCampaignService.removeAllCampaigns().then(function(response) {
                $scope.allCampaigns.length = 0;
            }, function(error) {
                alert($scope.constants.ERROR_TXT + error.statusText)
            });
        }
    }
    $scope.newCamp = function() {
        $scope.addCmp = true;
    };
    // Bacl to campaigns list page functionality.
    $scope.goBack = function() {
        $scope.addCmp = false;
        $scope.update = false;
        $scope.getAllCampaigns();
    };
    $scope.availableDateOptions = {
        formatYear: 'yy',
        startingDay: 1
        //maxDate: new Date()
    };
    $scope.availableDatePopup = {
        opened: false
    };
    $scope.OpenAvailableDate = function() {
        $scope.availableDatePopup.opened = !$scope.availableDatePopup.opened;
    };
    $scope.setTimeOpt = function() {
        if ($scope.newCampaign.trigger === $scope.constants.TRIGGER_T2) {
            $scope.newCampaign.timeDelay = $scope.constants.TIME_SPEC;
            $scope.deliveryTimeDisable = true;
            $scope.newCampaign.messConf = $scope.constants.MSG_CUSTOM;
        } else if ($scope.newCampaign.trigger === $scope.constants.TRIGGER_T4) {
            $scope.newCampaign.timeDelay = $scope.constants.TIME_IMM;
            $scope.deliveryTimeDisable = true;
            $scope.newCampaign.messConf = $scope.constants.MSG_FIXED;
        } else {
            $scope.deliveryTimeDisable = false;
        }
    }
    $scope.stepsModel = [];
    $scope.imageUpload = function(element) {
        var reader = new FileReader();
        reader.onload = $scope.imageIsLoaded;
        reader.readAsDataURL(element.files[0]);
        $scope.imageUrl = element.files[0];
    }
    $scope.imageIsLoaded = function(e) {
        $scope.$apply(function() {
            $scope.stepsModel.push(e.target.result);
        });
    }
    // *** Validates and Creates new Campaign *** //
    $scope.saveCampaign = function(d, t) {
        $scope.checkPostParams($scope.newCampaign, function(err, res) {
            if (err) {
                alert(err);
            } else if (res) {
                var campData = $scope.newCampaign;
                var enrichData = {};
                enrichData.timeToSend = moment(t).utc().format($scope.constants.TIME_FORMAT);
                if (campData.trigger === $scope.constants.TRIGGER_T1) {
                    var option = $scope.constants.OPTS_ALL_ACNTS;
                    var listData = $scope.lookupList(campData.recipient, option);
                    enrichData.from = listData.from;
                    enrichData.fromListId = listData.listId;
                    enrichData.startDateTime = $scope.newCampaign.startDateTime.toISOString().slice(0, 10);
                    enrichData.endDateTime = enrichData.startDateTime;
                } else if (campData.trigger === $scope.constants.TRIGGER_T4) {
                    var tgrOpt = $scope.constants.OPTS_ALL_ACNTS,
                        recOpt = $scope.constants.OPTS_PRSN_TGRD;
                    var tgrData = $scope.lookupList(campData.tgrPersons, tgrOpt);
                    enrichData.from = tgrData.from;
                    enrichData.fromListId = tgrData.listId;
                    var recData = $scope.lookupList(campData.recipient, recOpt);
                    enrichData.audienc = recData.from;
                    enrichData.audienceListID = recData.listId;
                    enrichData.areaInfo = campData.areaInfo;
                    enrichData.campaignAreas = $scope.getAreasInfo(campData.areaInfo, campData.aList);
                } else if (campData.trigger === $scope.constants.TRIGGER_T2) {
                    enrichData.areaInfo = campData.store;
                    if (campData.store == $scope.constants.OPTS_SLCTD_STORES) {
                        enrichData.campaignAreas = $scope.getStoreInfo(campData.storeVal);
                    } else enrichData.campaignAreas = null;
                }
                if (campData.trigger === $scope.constants.TRIGGER_T2 || campData.trigger === $scope.constants.TRIGGER_T4) {
                    enrichData.startDateTime = moment(d.startDate).utc().startOf('day').format($scope.constants.DATE_FORMAT);
                    enrichData.endDateTime = moment(d.endDate).utc().startOf('day').format($scope.constants.DATE_FORMAT);
                }
                // *** Prepare POST campaign object *** //
                var postCamp = {
                    "triggerNames": $scope.constants.TRIGGER_NAMES,
                    "name": $scope.newCampaign.name,
                    "timezone": moment.tz.guess(),
                    "startDateTime": enrichData.startDateTime,
                    "timeToSend": enrichData.timeToSend,
                    "from": enrichData.from ? enrichData.from : null,
                    "actions": campData.actions,
                    "audienc": enrichData.audienc ? enrichData.audienc : null,
                    "trigger": campData.trigger,
                    "timeDelay": campData.timeDelay,
                    "campaignAreas": enrichData.campaignAreas ? enrichData.campaignAreas : null,
                    "messageFrom": campData.messageFrom ? campData.messageFrom : null,
                    "messageSubject": campData.messageSubject ? campData.messageSubject : null,
                    "messageUnsubscribe": campData.messageUnsubscribe,
                    "status": $scope.constants.STATUS_START, //constant
                    "audienceListID": enrichData.audienceListID ? enrichData.audienceListID : null,
                    "lastTriggered": new Date().toISOString(),
                    "rules": campData.rules ? campData.rules : null,
                    "messageFromSMS": null, //constant
                    "messageUnsubscribeSMS": campData.messageUnsubscribeSMS,
                    "delay": null,
                    "fromListId": enrichData.fromListId ? enrichData.fromListId : null,
                    "threshold": null,
                    "areaInfo": enrichData.areaInfo ? enrichData.areaInfo : null,
                    "messConf": campData.messConf ? campData.messConf : null,
                    "endDateTime": enrichData.endDateTime
                }
                // *** Call new campaign POST request service ***
                fortinetCampaignService.createCampaign(postCamp).then(function(response) {
                    $scope.addCmp = false;
                    $scope.getAllCampaigns();
                }, function(error) {
                    alert($scope.constants.ERROR_TXT + error.statusText);
                });
            }
        });
    }

    // *** Shows all campaign values for update campaign *** //
    $scope.editCampValues = function() {
        $scope.update = true;
        var id = selctd_id;
        angular.forEach($scope.allCampaigns, function(camp) {
            if (camp.id == id) {
                $scope.editCamp = camp;
            }
        })
        if ($scope.editCamp.timeToSend) {
            var aryVals = $scope.editCamp.timeToSend.split(":");
            $scope.tmVal = new Date();
            $scope.tmVal.setHours(parseInt(aryVals[0]));
            $scope.tmVal.setMinutes(parseInt(aryVals[1]));
        }
        $scope.fortinetNewCmpDates = {
            startDate: $scope.editCamp.startDateTime,
            endDate: $scope.editCamp.endDateTime
        };
        if ($scope.editCamp.trigger === $scope.constants.TRIGGER_T1) {
            $scope.fixName = true;
            $scope.editCamp.recipient = $scope.editCamp.fromListId ? $scope.lookupListId($scope.editCamp.fromListId) : $scope.editCamp.from;
        } else if ($scope.editCamp.trigger === $scope.constants.TRIGGER_T4) {
            $scope.fixName = false;
            $scope.editCamp.tgrPersons = $scope.editCamp.fromListId ? $scope.lookupListId($scope.editCamp.fromListId) : $scope.editCamp.from;
            $scope.editCamp.recipient = $scope.editCamp.audienceListID ? $scope.lookupListId($scope.editCamp.audienceListID) : $scope.constants.OPTS_PRSN_TGRD;
            if ($scope.editCamp.messConf == 'Edit massage') { // Client is validating for 'Edit massage' (spelling error) value
                $scope.editCamp.messConf = $scope.constants.MSG_CUSTOM;
            } else if ($scope.editCamp.messConf == 'Fixed massage') { // Client is validating for 'Fixed massage' value
                $scope.editCamp.messConf = $scope.constants.MSG_FIXED;
            }
        } else if ($scope.editCamp.trigger === $scope.constants.TRIGGER_T2) {
            $scope.fixName = false;
            $scope.editCamp.store = $scope.editCamp.areaInfo;
        }
    }

    // *** Processes and posts update campaign data *** //
    $scope.updateCampaign = function(dt, tme) {
        if (tme) $scope.editCamp.timeToSend = moment(tme).utc().format($scope.constants.TIME_FORMAT);
        if ($scope.editCamp.trigger === $scope.constants.TRIGGER_T4) {
            var tgrOpt = $scope.constants.OPTS_ALL_ACNTS,
                recOpt = $scope.constants.OPTS_PRSN_TGRD;
            var tgrData = $scope.lookupList($scope.editCamp.tgrPersons, tgrOpt);
            $scope.editCamp.from = tgrData.from;
            $scope.editCamp.fromListId = tgrData.listId;
            var recData = $scope.lookupList($scope.editCamp.recipient, recOpt);
            $scope.editCamp.audienc = recData.from;
            $scope.editCamp.audienceListID = recData.listId;
            $scope.editCamp.areaInfo = $scope.editCamp.areaInfo;
            $scope.editCamp.campaignAreas = $scope.getAreasInfo($scope.editCamp.areaInfo, $scope.editCamp.aList);
        } else if ($scope.editCamp.trigger === $scope.constants.TRIGGER_T2) {
            $scope.editCamp.areaInfo = $scope.editCamp.store;
            if ($scope.editCamp.store == $scope.constants.OPTS_SLCTD_STORES) {
                $scope.editCamp.campaignAreas = $scope.getStoreInfo($scope.editCamp.storeVal);
            } else $scope.editCamp.campaignAreas = null;
        }
        if ($scope.editCamp.trigger === $scope.constants.TRIGGER_T2 || $scope.editCamp.trigger === $scope.constants.TRIGGER_T4) {
            $scope.editCamp.startDateTime = moment(dt.startDate).utc().startOf('day').format($scope.constants.DATE_FORMAT);
            $scope.editCamp.endDateTime = moment(dt.endDate).utc().startOf('day').format($scope.constants.DATE_FORMAT);
        }
        // *** Prepare UPDATE campaign object *** //
        var camp = {
            "id": $scope.editCamp.id,
            "triggerNames": $scope.constants.TRIGGER_NAMES,
            "name": $scope.editCamp.name,
            "timezone": $scope.editCamp.timezone,
            "startDateTime": $scope.editCamp.startDateTime,
            "timeToSend": $scope.editCamp.timeToSend,
            "from": $scope.editCamp.from ? $scope.editCamp.from : null,
            "actions": $scope.editCamp.actions,
            "audienc": $scope.editCamp.audienc ? $scope.editCamp.audienc : null,
            "trigger": $scope.editCamp.trigger,
            "timeDelay": $scope.editCamp.timeDelay,
            "campaignAreas": $scope.editCamp.campaignAreas ? $scope.editCamp.campaignAreas : null,
            "messageFrom": $scope.editCamp.messageFrom ? $scope.editCamp.messageFrom : null,
            "messageSubject": $scope.editCamp.messageSubject ? $scope.editCamp.messageSubject : null,
            "messageUnsubscribe": $scope.editCamp.messageUnsubscribe,
            "status": $scope.editCamp.status,
            "audienceListID": $scope.editCamp.audienceListID ? $scope.editCamp.audienceListID : null,
            "lastTriggered": $scope.editCamp.lastTriggered, //new DatenrichDae().toISOString(),
            "rules": $scope.editCamp.rules ? $scope.editCamp.rules : null,
            "messageFromSMS": $scope.editCamp.messageFromSMS, //null, //constant
            "messageUnsubscribeSMS": $scope.editCamp.messageUnsubscribeSMS,
            "delay": $scope.editCamp.delay, //null,
            "fromListId": $scope.editCamp.fromListId ? $scope.editCamp.fromListId : null,
            "threshold": $scope.editCamp.threshold, //null,
            "areaInfo": $scope.editCamp.areaInfo ? $scope.editCamp.areaInfo : null,
            "messConf": $scope.editCamp.messConf ? $scope.editCamp.messConf : null,
            "endDateTime": $scope.editCamp.endDateTime
        }
        // *** Call campaign UPDATE service *** //
        fortinetCampaignService.updateCampaign(camp).then(function(response) {
            $scope.addCmp = false;
            $scope.update = false;
            $scope.getAllCampaigns();
        }, function(error) {
            alert($scope.constants.ERROR_TXT + error.statusText);
        });
    }

    // *** Validates create campaign parameters *** //
    $scope.checkPostParams = function(params, cb) {
        var errMsg = null,
            res = false;
        if (!$scope.isNotNull(params.name)) {
            errMsg = "Please provide Campaign name";
            return cb(errMsg, res);
        }
        angular.forEach($scope.allCampaigns, function(campaign) {
            if (campaign.name == params.name) {
                errMsg = "Campaign name already exists.";
            }
        });
        if (!params.messConf || params.messConf === $scope.constants.MSG_CUSTOM) {
            if ((params.actions === $scope.constants.ACTION_SMS || params.actions === $scope.constants.ACTION_BOTH) && !$scope.isNotNull(params.messageUnsubscribeSMS)) {
                errMsg = "Please provide the message body";
                return cb(errMsg, res);
            }
            if ((params.actions === $scope.constants.ACTION_EMAIL || params.actions === $scope.constants.ACTION_BOTH)) {
                if (!$scope.isNotNull(params.messageFrom)) {
                    errMsg = "Please provide 'From'";
                    return cb(errMsg, res);
                }
                if (params.messageFrom.indexOf("@") == -1 || params.messageFrom.indexOf(".") == -1) {
                    errMsg = "Please provide valid id";
                    return cb(errMsg, res);
                }
                if (!$scope.isNotNull(params.messageSubject)) {
                    errMsg = "Please provide 'Subject'";
                    return cb(errMsg, res);
                }
                if (!$scope.isNotNull($scope.imageUrl)) {
                    errMsg = "Please select a Coupon";
                    return cb(errMsg, res);
                }
            }
        }
        if (params.actions === $scope.constants.ACTION_BOTH && !$scope.isNotNull(params.rules)) {
            errMsg = "Please select preferred sending option";
            return cb(errMsg, res);
        }
        if (params.trigger === $scope.constants.TRIGGER_T2) {
            if (!$scope.isNotNull(params.store)) {
                errMsg = "Please select Store";
                return cb(errMsg, res);
            }
            if (params.store === $scope.constants.OPTS_SLCTD_STORES && !$scope.isNotNull(params.storeVal)) {
                errMsg = "Please select Store value";
                return cb(errMsg, res);
            }
        }
        if (params.trigger === $scope.constants.TRIGGER_T4) {
            if (!$scope.isNotNull(params.areaInfo) || !$scope.isNotNull(params.aList)) {
                errMsg = "Please provide every option that is required";
                return cb(errMsg, res);
            }
        }
        res = true;
        return cb(errMsg, res);
    }

    // *** Check for null or undefined values *** //
    $scope.isNotNull = function(param) {
        if (param === undefined || param === null || param === "" || param === "null") {
            return false;
        } else return true;
    }

    // *** Get list values by name *** //
    $scope.lookupList = function(data, option) {
        var result = {};
        if (data === option) {
            result.from = data;
            result.listId = null;
        } else {
            $scope.campDetails.lists.forEach(function(list) {
                if (list.name === data) {
                    result.from = "List";
                    result.listId = list.id;
                }
            });
        }
        return result;
    }

    // *** Get List name by id *** //
    $scope.lookupListId = function(id) {
        var result;
        $scope.campDetails.lists.forEach(function(list) {
            if (list.id == id) {
                result = list.name;
            }
        });
        return result;
    }

    // *** Get Areas info by area type *** //
    $scope.getAreasInfo = function(category, list) {
        var result = [],
            key;
        if (category === "Area Type") {
            key = "areaType";
            $scope.campDetails[key].forEach(function(element) {
                result.push({
                    "typeId": element.id
                });
            })
        } else if (category === "Area") {
            key = "areas";
            $scope.campDetails[key].forEach(function(element) {
                result.push({
                    "areaId": element.id
                });
            })
        } else if (category === "Area Interest Category") {
            key = "areaCategory";
            $scope.campDetails[key].forEach(function(element) {
                result.push({
                    "categoryId": element.id
                });
            })
        }
        return result;
    }

    // *** Get store info by store name *** //
    $scope.getStoreInfo = function(strVal) {
        var result = [];
        $scope.campDetails['stores'].forEach(function(element) {
            if (element.storeName === strVal) {
                result.push({
                    "storeId": element.id
                });
            }
        })
        return result;
    }
});

/***/ }),
/* 109 */
/***/ (function(module, exports) {

﻿/*
This controller uses fortinetCampaignService to provide campaign results data to the view
*/
angular.module('lsi').controller('fortinentcampresultCtrl', function($scope, fortinetCampaignService) {
    // *** Constant values specific to the controller *** //
    $scope.constants = {
        "TRIGGER_NAMES": {
            "t1": "Once",
            "t3": "WiFi logins today",
            "t2": "First time in Store today",
            "t4": "First time in Area today",
            "t5": "Daily dwell-time per Area exceeded"
        },
        "TGR_CALL_VAL": {
            "t1": "getOnce",
            "t3": "getInStoreToday",
            "t2": "getFirstTimeInStoreToday",
            "t4": "getFirstTimeInAreaToday",
            "t5": "getDwellTimeInAreaExceed"
        },
        "CMP_RSLT_DT_FRMT": "YYYY-MM-DD HH:mm",
        "ERROR_TXT": "Error processing data: "
    };
    $scope.showData = false;
    $scope.showSumry = false;
    $scope.exDtails = false;
    // *** Fetch campaign results and display as a table *** //
    $scope.getCampResults = function(trigger) {
        $scope.showData = true;
        $scope.showSumry = false;
        $scope.exDtails = false;
        $scope.activeTgr = trigger;
        fortinetCampaignService.getCampaignResults(trigger).then(function(response) {
            if (response.data) {
                response = response.data;
                if (response && response.header) {
                    $scope.tableHeaders = [];
                    $scope.results = response.data;
                    var tz = moment().utc().tz(moment.tz.guess()).format('Z');
                    angular.forEach(response.header, function(header) {
                        if (header == "Date" || header == "Start date") {
                            header = header + " [GMT" + tz + "]";
                        }
                        if (header == "Messages sent via") {
                            $scope.tableHeaders.push({
                                "text": header,
                                "cols": 2,
                                "rows": null
                            })
                        } else {
                            $scope.tableHeaders.push({
                                "text": header,
                                "cols": null,
                                "rows": 2
                            })
                        }
                    });
                    angular.forEach($scope.results, function(result) {
                        fortinetCampaignService.getCampaignCoupon(result.campaignId).then(function(resp) {
                            resp = resp.data;
                            if (resp.status != "failure") {
                                result.couponUrl = "data:image/png;base64," + resp;
                            } else result.couponUrl = null;

                        }, function(error) {
                            alert($scope.constants.ERROR_TXT + error.statusText);
                        });
                        if (result.date)
                            result.date = moment.utc(result.date + " " + result.time).zone(tz).format($scope.constants.CMP_RSLT_DT_FRMT);
                    });
                    $scope.button_text = (trigger == $scope.constants.TGR_CALL_VAL.t1) ? ("Execution details") : ("Daily summary");
                    // *** Set pagination values of campaign results table *** //
                    $scope.mainPageOptions = [10, 20, 30];
                    $scope.viewbyM = 10;
                    $scope.totalMainItems = $scope.results.length;
                    $scope.currentMainPage = 1;
                    $scope.itemsPerMainPage = $scope.viewbyM;
                    $scope.maxSize = 3;
                }
            }
        }, function(error) {
            alert($scope.constants.ERROR_TXT + error.statusText);
        });
    }

    // *** Fetch execution details of each camapign and display as a table *** //
    $scope.getExecDetails = function(campaign, trigger, id) {
        $scope.showSumry = true;
        $scope.exDtails = false;
        $scope.campName = campaign;
        var range = "perDay";
        switch (trigger) {
            case $scope.constants.TRIGGER_NAMES.t1:
                range = "perMsg";
                trigger = $scope.constants.TRIGGER_NAMES.t1;
                break;
            case $scope.constants.TRIGGER_NAMES.t3:
                trigger = $scope.constants.TGR_CALL_VAL.t3;
                break;
            case $scope.constants.TRIGGER_NAMES.t2:
                trigger = $scope.constants.TGR_CALL_VAL.t2;
                break;
            case $scope.constants.TRIGGER_NAMES.t4:
                trigger = $scope.constants.TGR_CALL_VAL.t4;
                break;
            case $scope.constants.TRIGGER_NAMES.t5:
                trigger = $scope.constants.TGR_CALL_VAL.t5;
                break;
        }
        $scope.range = range;
        $scope.trigger = trigger;
        $scope.id = id;
        fortinetCampaignService.getCampaignExeInfo(range, trigger, id).then(function(response) {
            $scope.smryHdrs = [];
            $scope.smryData = [];
            $scope.tz = null;
            response = response.data;
            if (response.status != "failure" && response.data) {
                $scope.fields = $scope.getValues(trigger, response.header);
                $scope.smryHdrs = response.header;
                var tz = moment().utc().tz(moment.tz.guess()).format('Z');
                $scope.tz = " [GMT" + tz + "]";
                angular.forEach(response.data, function(data) {
                    if (data.deliveryTime != undefined) {
                        data.deliveryTime = moment(data.deliveryTime).format($scope.constants.CMP_RSLT_DT_FRMT);
                    }
                    if (data.timeSent != undefined) {
                        data.timeSent = moment(data.timeSent).format("YYYY-MM-DD");
                    }
                    if (data.opened != undefined) {
                        data.opened = (data.opened == true) ? 'Yes' : 'No';
                    }
                    if (data.unsubscribed != undefined) {
                        data.unsubscribed = (data.unsubscribed == true) ? 'Yes' : 'No';
                    }
                })
                $scope.smryData = response.data;
                $scope.setPaginationVals($scope.smryData);
            }
        }, function(error) {
            alert($scope.constants.ERROR_TXT + error.statusText);
        });
    }

    // *** Set no. of items per page for pagination of execution details table *** //
    $scope.setItemsPerPage = function(num) {
        $scope.itemsPerPage = num;
        $scope.currentPage = 1; //reset to first page
    }
    // *** Form values for Execution details table according to the trigger *** //
    $scope.getValues = function(trigger, hdrs) {
        var fields;
        switch (trigger) {
            case $scope.constants.TRIGGER_NAMES.t1:
                fields = [{
                    value: 'deliveryTime',
                    header: hdrs[0]
                }, {
                    value: 'recipient',
                    header: hdrs[1]
                }, {
                    value: 'opened',
                    header: hdrs[2]
                }, {
                    value: 'unsubscribed',
                    header: hdrs[3]
                }];
                break;
            case $scope.constants.TGR_CALL_VAL.t3:
                fields = [{
                    value: 'timeSent',
                    header: hdrs[0]
                }, {
                    value: 'numberOfSms',
                    header: hdrs[1]
                }, {
                    value: 'numberOfEmails',
                    header: hdrs[2]
                }, {
                    value: 'numberEmailsOpened',
                    header: hdrs[3]
                }, {
                    value: 'numberUnsubscribedViaEmail',
                    header: hdrs[4]
                }];
                break;
            case $scope.constants.TGR_CALL_VAL.t2:
                fields = [{
                    value: 'date',
                    header: hdrs[0]
                }, {
                    value: 'numberOfSms',
                    header: hdrs[1]
                }, {
                    value: 'numberOfEmails',
                    header: hdrs[2]
                }, {
                    value: 'numberEmailsOpened',
                    header: hdrs[3]
                }, {
                    value: 'numberUnsubscribedViaEmail',
                    header: hdrs[4]
                }];
                break;
            case $scope.constants.TGR_CALL_VAL.t4:
                fields = [{
                    value: 'date',
                    header: hdrs[0]
                }, {
                    value: 'numberOfSms',
                    header: hdrs[1]
                }, {
                    value: 'numberOfEmails',
                    header: hdrs[2]
                }, {
                    value: 'numberEmailsOpened',
                    header: hdrs[3]
                }, {
                    value: 'numberUnsubscribedViaEmail',
                    header: hdrs[4]
                }];
                break;
            case $scope.constants.TGR_CALL_VAL.t5:
                fields = [{
                    value: 'date',
                    header: hdrs[0]
                }, {
                    value: 'numberOfSms',
                    header: hdrs[1]
                }, {
                    value: 'numberOfEmails',
                    header: hdrs[2]
                }, {
                    value: 'numberEmailsOpened',
                    header: hdrs[3]
                }, {
                    value: 'numberUnsubscribedViaEmail',
                    header: hdrs[4]
                }];
                break;
        }
        return fields;
    }
    $scope.getDetails = function(timeSent, date) {
        $scope.exDtails = true;
        if ($scope.trigger == "getInStoreToday") {
            date = moment(timeSent).subtract(1, "days").format("YYYY-MM-DD");
        } else date = date;
        $scope.exDate = date;
        fortinetCampaignService.getCampaignSummaryDetails("perMsg", $scope.trigger, $scope.id, date).then(function(response) {
            $scope.execHdrs = [];
            $scope.execData = [];
            response = response.data;
            if (response.status != "failure" && response.data) {
                $scope.execFields = $scope.getExecValues(response.header);
                $scope.execHdrs = response.header;
                angular.forEach(response.data, function(data) {
                    if (data.timeSent != undefined) {
                        data.timeSent = moment.utc(data.timeSent).zone(moment.tz.guess()).format('hh:mm');
                        //data.timeSent = moment(data.timeSent).format("HH:mm");
                    }
                    if (data.unsubscribed != undefined) {
                        data.unsubscribed = (data.unsubscribed == true) ? 'Yes' : 'No';
                    }
                })
                $scope.execData = response.data;
                $scope.setPaginationVals($scope.execData);
            }
        });

    }
    // *** Form values for Execution details table according to the trigger *** //
    $scope.getExecValues = function(hdrs) {
        var fields;
        fields = [{
            value: 'timeSent',
            header: hdrs[0]
        }, {
            value: 'recipient',
            header: hdrs[1]
        }, {
            value: 'unsubscribed',
            header: hdrs[2]
        }];
        return fields;
    }

    // *** Set no. of items per page for pagination of campaign results table *** //
    $scope.setItemsPerMainPage = function(num) {
        $scope.itemsPerMainPage = num;
        $scope.currentMainPage = 1; //reset to first page
    }

    // *** Set all pagination parameters of table *** //
    $scope.setPaginationVals = function(pageData) {
        $scope.sortReverse = false; // set the default sort order
        $scope.pageOptions = [10, 20, 30];
        $scope.viewby = 10;
        $scope.totalItems = pageData.length;
        $scope.currentPage = 1;
        $scope.itemsPerPage = $scope.viewby;
        $scope.maxSize = 3;
    }
});

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/*
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 111 */
/***/ (function(module, exports) {

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

/***/ }),
/* 112 */
/***/ (function(module, exports) {

(function() {

    'use strict';
    angular.module('lsi')
        .factory('authService', function($http, $cookieStore, $rootScope, config, $q) {
            var service = {};
            var BASE_URL = config.API_URL;

            service.login = login;
            service.addUser = addUser;
            service.editUser = editUser;
            service.deleteUser = deleteUser;
            service.getAllUsers = getAllUsers;
            service.getUser = getUser;
            service.editPwd = editPwd;
            service.setCredentials = setCredentials;
            service.clearCredentials = clearCredentials;

            function login(emailId, password) {
                var deferred = $q.defer();
                return $http({
                    method: 'post',
                    url: BASE_URL + 'users/login',
                    data: {
                        emailId: emailId,
                        password: password
                    }
                }).success(function(response) {
                    deferred.resolve(response);
                }).error(function(error) {
                    console.log('auth error');
                    deferred.reject(error);
                });
            }
            //adding user details
            function addUser(addUserFormData) {
                var deferred = $q.defer();
                return $http({
                    method: 'post',
                    url: BASE_URL + 'users/createUser',
                    data: addUserFormData
                }).success(function(response) {
                    deferred.resolve(response);
                }).error(function(error) {
                    console.log('error');
                    deferred.reject(error);
                });
            }

            //editing user details
            function editUser(editUserFormData) {
                var deferred = $q.defer();
                return $http({
                    method: 'post',
                    url: BASE_URL + 'users/updateUser',
                    data: editUserFormData
                }).success(function(response) {
                    deferred.resolve(response);
                }).error(function(error) {
                    console.log('error');
                    deferred.reject(error);
                });
            }
            // To update the pwd of specific user
            function editPwd(changedPwd) {
                var deferred = $q.defer();
                return $http({
                    method: 'post',
                    url: BASE_URL + 'users/updatePwd',
                    data: changedPwd
                }).success(function(response) {
                    deferred.resolve(response);
                }).error(function(error) {
                    console.log('error');
                    deferred.reject(error);
                });
            }

            //deleting user
            function deleteUser(deleteUser) {
                var deferred = $q.defer();
                return $http({
                    method: 'post',
                    url: BASE_URL + 'users/deleteUser',
                    data: {
                        UserId: deleteUser
                    }
                }).success(function(response) {
                    deferred.resolve(response);
                }).error(function(error) {
                    console.log('error');
                    deferred.reject(error);
                });
            }

            function getAllUsers() {
                var deferred = $q.defer();
                return $http({
                    method: 'get',
                    url: BASE_URL + 'users/getAllUsers',
                }).success(function(response) {
                    deferred.resolve(response);
                }).error(function(error) {
                    console.log('auth error');
                    deferred.reject(error);
                });
            }

            function getUser(UserId) {
                var deferred = $q.defer();
                return $http({
                    method: 'post',
                    url: BASE_URL + 'users/getAUser',
                    data: {
                        UserId: UserId
                    }
                }).success(function(response) {
                    deferred.resolve(response);
                }).error(function(error) {
                    console.log('auth error');
                    deferred.reject(error);
                });
            }

            function setCredentials(email, userName, role, userId, cStoreAnalytics, cameraAnalytics, wifiAnalytics, CStoreAnalyticsLoadedStatus) {
                $rootScope.globals = {
                    currentUser: {
                        email: email,
                        userName: userName,
                        role: role,
                        userId: userId,
                        cStoreAnalytics: cStoreAnalytics,
                        cameraAnalytics: cameraAnalytics,
                        wifiAnalytics: wifiAnalytics,
                        CStoreAnalyticsLoadedStatus: CStoreAnalyticsLoadedStatus
                    }
                };
                $cookieStore.put('globals', $rootScope.globals);
            }

            function clearCredentials() {
                $rootScope.globals = {};
                $cookieStore.remove('globals');
            }

            return service;

        });
})();

/***/ }),
/* 113 */
/***/ (function(module, exports) {

angular.module('lsi')
    .factory("transformRequestAsFormPost", function() {
        // I prepare the request data for the form post.
        function transformRequest(data, getHeaders) {
            var headers = getHeaders();
            headers["Content-type"] = "application/x-www-form-urlencoded; charset=utf-8";
            //headers[ "Content-type" ] = "multipart/form-data; charset=utf-8";
            return (serializeData(data));
        }
        // Return the factory value.
        return (transformRequest);
        // ---
        // PRVIATE METHODS.
        // ---
        // I serialize the given Object into a key-value pair string. This
        // method expects an object and will default to the toString() method.
        // --
        // NOTE: This is an atered version of the jQuery.param() method which
        // will serialize a data collection for Form posting.
        // --
        // 
        function serializeData(data) {
            // If this is not an object, defer to native stringification.
            if (!angular.isObject(data)) {
                return ((data == null) ? "" : data.toString());
            }
            var buffer = [];
            // Serialize each key in the object.
            for (var name in data) {
                if (!data.hasOwnProperty(name)) {
                    continue;
                }
                var value = data[name];
                buffer.push(
                    encodeURIComponent(name) +
                    "=" +
                    encodeURIComponent((value == null) ? "" : value)
                );
            }
            // Serialize the buffer and clean it up for transportation.
            var source = buffer
                .join("&")
                .replace(/%20/g, "+");
            return (source);
        }
    });

/***/ }),
/* 114 */
/***/ (function(module, exports) {

﻿(function(angular) {
    "use strict";

    angular.module('lsi').factory('sparkflyService', sparkflyService)


    sparkflyService.$inject = ['$http', 'config', 'transformRequestAsFormPost', '$rootScope', '$cookieStore', '$window', '$location', '$q'];

    function sparkflyService($http, config, transformRequestAsFormPost, $rootScope, $cookieStore, $window, $location, $q) {

        var service = {};
        var BASE_URL = config.API_URL;

        var globals = {};
        service.getAuthKey = getAuthKey;
        service.postAuthKey = postAuthKey;
        service.getAccountLevel = getAccountLevel;
        service.getImpressionsLevel = getImpressionsLevel;
        service.getConversions = getConversions;
        service.getSparkflyAuthentication = getSparkflyAuthentication;

        return service;


        function getAuthKey() {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'sparkfly/auth',
                transformRequestAsFormPost: transformRequestAsFormPost
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('auth error');
                deferred.reject(error);
            });
        }

        function postAuthKey(authKey) {
            var deferred = $q.defer();
            return $http({
                method: 'post',
                url: BASE_URL + 'sparkfly/auth',
                transformRequestAsFormPost: transformRequestAsFormPost,
                data: {
                    authToken: authKey
                }
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('auth error');
                deferred.reject(error);
            });
        }

        function getAccountLevel(startDate, endDate) {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'sparkfly/account_level/' + startDate + '/' + endDate,
                transformRequestAsFormPost: transformRequestAsFormPost
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get account  error', error);
                deferred.reject(error);
            });
        }

        function getImpressionsLevel(startDate, endDate) {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'sparkfly/impressions/' + startDate + '/' + endDate,
                transformRequestAsFormPost: transformRequestAsFormPost
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get account  error', error);
                deferred.reject(error);
            });
        }

        function getConversions(startDate, endDate) {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'sparkfly/conversions/' + startDate + '/' + endDate,
                transformRequestAsFormPost: transformRequestAsFormPost
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get account  error', error);
                deferred.reject(error);
            });
        }


        function getSparkflyAuthentication(emailId) {
            var deferred = $q.defer();
            return $http({
                method: 'post',
                url: BASE_URL + 'sparkfly/getSparkflyAuthentication',
                data: {
                    emailId: emailId
                }
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('getSparkflyAuthentication error');
                deferred.reject(error);
            });
        }

    }
}(window.angular));

/***/ }),
/* 115 */
/***/ (function(module, exports) {

(function(angular) {
    "use strict";

    angular.module('lsi').factory('prismService', prismService)


    prismService.$inject = ['$http', 'config', 'transformRequestAsFormPost', '$rootScope', '$cookieStore', '$window', '$location', '$q'];

    function prismService($http, config, transformRequestAsFormPost, $rootScope, $cookieStore, $window, $location, $q) {

        var service = {};
        var BASE_URL = config.API_URL;

        service.getPrismTokenId = getPrismTokenId;
        service.getAllAccounts = getAllAccounts;
        service.getAllSites = getAllSites;
        service.getSitesById = getSitesById;
        service.getAllZones = getAllZones;
        service.getAnalyticsSites = getAnalyticsSites;
        service.getAllInsightConfig = getAllInsightConfig;
        service.getInsightConfig = getInsightConfig;
        service.getAllCameras = getAllCameras;
        service.getZoneCountChange = getZoneCountChange;
        service.getZoneCountDayHours = getZoneCountDayHours;

        return service;

        // Prism Api call started here

        function getPrismTokenId(emailId) {
            var deferred = $q.defer();
            return $http({
                method: 'post',
                url: BASE_URL + 'prism/generateToken',
                data: {
                    emailId: emailId
                }
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('auth error');
                deferred.reject(error);
            });
        }

        function getAllAccounts() {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'prism/accounts',
                transformRequestAsFormPost: transformRequestAsFormPost
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get sites  error', error);
                deferred.reject(error);
            });
        }

        function getAllSites(accountId) {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'prism/accounts/' + accountId + '/sites',
                transformRequestAsFormPost: transformRequestAsFormPost
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get sites  error', error);
                deferred.reject(error);
            });
        }

        function getSitesById(accountId, siteId) {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'prism/accounts/' + accountId + '/sites/' + siteId,
                transformRequestAsFormPost: transformRequestAsFormPost
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get sites  error', error);
                deferred.reject(error);
            });
        }

        function getAllZones(accountId) {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'prism/accounts/' + accountId + '/zones',
                transformRequestAsFormPost: transformRequestAsFormPost
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get sites  error', error);
                deferred.reject(error);
            });
        }

        function getAnalyticsSites(zoneId, siteId, change, count, hours, bussHrs, startTime, endTime) {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'prism/analytics/zones/' + zoneId + '/siteId/' + siteId + '/metricChange/' + change + '/metricCount/' + count + '/period/' + hours + '/bussHrs/' + bussHrs + '/start/' + startTime + '/stop/' + endTime,
                transformRequestAsFormPost: transformRequestAsFormPost
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get sites  error', error);
                deferred.reject(error);
            });
        }

        //Zone Count and Change values
        function getZoneCountChange(bussHrs, change, count, siteId, startTime, endTime, zoneId) {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'prism/data/bussHrs/' + bussHrs + '/metricChange/' + change + '/metricCount/' + count + '/siteId/' + siteId + '/start/' + startTime + '/stop/' + endTime + '/zones/' + zoneId,
                transformRequestAsFormPost: transformRequestAsFormPost
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get Zone Count and Change values error', error);
                deferred.reject(error);
            });
        }

        function getZoneCountDayHours(bussHrs, count, typical, periodValue, siteId, startTime, endTime, zoneId) {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'prism/data/byTime/bussHrs/' + bussHrs + '/metricCount/' + count + '/metricTypical/' + typical + '/period/' + periodValue + '/siteId/' + siteId + '/start/' + startTime + '/stop/' + endTime + '/zones/' + zoneId,
                transformRequestAsFormPost: transformRequestAsFormPost
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get Zone Count values for day and hours error', error);
                deferred.reject(error);
            });
        }


        function getAllInsightConfig(accountId) {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'prism/accounts/' + accountId + '/insight-configurations',
                transformRequestAsFormPost: transformRequestAsFormPost
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get sites  error', error);
                deferred.reject(error);
            });
        }
        //accounts/:accountId/insight-configurations/:insightConfigId/insights/pages/:pageNo
        function getInsightConfig(accountId, insightConfigId, pageNo) {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'prism/accounts/' + accountId + '/insight-configurations/' + insightConfigId + '/insights/pages/' + pageNo,
                transformRequestAsFormPost: transformRequestAsFormPost
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get sites  error', error);
                deferred.reject(error);
            });
        }

        function getAllCameras() {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'prism/accounts/' + accountId + '/cameras',
                transformRequestAsFormPost: transformRequestAsFormPost
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get sites  error', error);
                deferred.reject(error);
            });
        }
    }
}(window.angular));

/***/ }),
/* 116 */
/***/ (function(module, exports) {

﻿angular.module('lsi')
    .factory('fortinetService', function($http, config, $q) {

        var service = {};
        var BASE_URL = config.API_URL + 'fortinet/';

        service.getFortinetAuthentication = function(emailId) {
            var deferred = $q.defer();
            return $http({
                method: 'post',
                url: BASE_URL + 'getFortinetAuthentication',
                data: {
                    emailId: emailId
                }
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('Authentication error', error);
                deferred.reject(error);
            });
        };

        service.getFortinentTree = function() {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'tree'
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get getFortinentTree  error', error);
                deferred.reject(error);
            });
        };

        service.getCaptureRate = function(data) {
            var deferred = $q.defer();
            return $http({
                method: 'post',
                url: BASE_URL + 'personVisible/get/captureRate',
                data: data
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get getCaptureRate  error', error);
                deferred.reject(error);
            });
        };
        service.getDwellTime = function(data) {
            var deferred = $q.defer();
            return $http({
                method: 'post',
                url: BASE_URL + 'personVisible/get/dwellTime',
                data: data
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get getCaptureRate  error', error);
                deferred.reject(error);
            });
        };
        service.getNewVsRepeat = function(data) {
            var deferred = $q.defer();
            return $http({
                method: 'post',
                url: BASE_URL + 'personVisible/get/newVsRepeat',
                data: data
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get getCaptureRate  error', error);
                deferred.reject(error);
            });
        };

        service.getFrequency = function(data, recValue) {
            var deferred = $q.defer();
            return $http({
                method: 'post',
                url: BASE_URL + 'frequency/getFrequency/' + recValue,
                data: data
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('getFrequency error', error);
                deferred.reject(error);
            });
        };

        // customer kpi -> dwell time -> Distribution
        service.getDwellTimeDist = function(data, timeValue, optionValue) {
            var deferred = $q.defer();
            return $http({
                method: 'post',
                url: BASE_URL + 'positionAggregatedDwellTine/getDistribution/' + timeValue + '/' + optionValue,
                data: data
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get dwell time distribution error', error);
                deferred.reject(error);
            });
        };
        // customer kpi -> Recency -> Distribution
        service.getRecencyDist = function(data, hours) {
            var deferred = $q.defer();
            return $http({
                method: 'post',
                url: BASE_URL + 'recency/getRecency/' + hours,
                data: data
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get Recency distribution error', error);
                deferred.reject(error);
            });
        };

        service.getRecencyPerArea = function(data, hours) {
            var deferred = $q.defer();
            return $http({
                method: 'post',
                url: BASE_URL + 'recency/getRecencyPerArea/' + hours,
                data: data
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get Recency Per Area distribution error', error);
                deferred.reject(error);
            });
        };

        // customer kpi -> Frequency Distribution
        service.getFrequencyDist = function(data, recValue) {
            var deferred = $q.defer();
            return $http({
                method: 'post',
                url: BASE_URL + 'frequency/getFrequency/' + recValue,
                data: data
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get frequency distribution error', error);
                deferred.reject(error);
            });
        };

        service.getFrequencyPerArea = function(data, hours) {
            var deferred = $q.defer();
            return $http({
                method: 'post',
                url: BASE_URL + 'frequency/getFrequencyPerArea/' + hours,
                data: data
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get frequency Per Area distribution error', error);
                deferred.reject(error);
            });
        };


        // Real time -> Density heatmap
        service.getDensityHeatmap = function(projectId) {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'accessPoint/AccessPointsForCustomerProject/' + projectId
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get Density heatmap error', error);
                deferred.reject(error);
            });
        };

        service.getHeatmapFloorplan = function(planType, floorOrStoreId) {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'floorplan/getFloorplan/' + planType + '/' + floorOrStoreId
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get Density heatmap Floor plan error', error);
                deferred.reject(error);
            });
        };
        service.getDensityHeatmapAccessPoint = function(data) {
            var deferred = $q.defer();
            return $http({
                method: 'post',
                url: BASE_URL + 'accessPoint/DensityHeatmap',
                data: data
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get Density heatmap error', error);
                deferred.reject(error);
            });
        };

        // MAP -> cumulative  Dwell time Heatmap
        service.getCumulativeDwellTime = function(data, selectedDate) {
            var deferred = $q.defer();
            return $http({
                method: 'post',
                url: BASE_URL + 'accessPoint/CumulativeDwelltimeHeatmap/' + selectedDate,
                data: data
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get Cumulative Dwell time Heatmap error', error);
                deferred.reject(error);
            });
        };

        //MAP -> Cumulative persons per day Heatmap
        service.getCumulativePersons = function(data, selectedDate) {
            var deferred = $q.defer();
            return $http({
                method: 'post',
                url: BASE_URL + 'accessPoint/CumulativePersonsHeatmap/' + selectedDate,
                data: data
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get Cumulative persons per day Heatmap error', error);
                deferred.reject(error);
            });
        };

        //MAP -> Cumulative traffic per day Heatmap
        service.getCumulativeVisitor = function(data, selectedDate) {
            var deferred = $q.defer();
            return $http({
                method: 'post',
                url: BASE_URL + 'accessPoint/CumulativeVisitorHeatmap/' + selectedDate,
                data: data
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get Cumulative traffic per day Heatmap error', error);
                deferred.reject(error);
            });
        };
        //MAP -> Popularity Heatmaps
        service.getPopularityHotspotKPI = function(data, selectedDate) {
            var deferred = $q.defer();
            return $http({
                method: 'post',
                url: BASE_URL + 'accessPoint/PopularityHeatmaps/' + selectedDate,
                data: data
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get Popularity Heatmaps error', error);
                deferred.reject(error);
            });
        };


        service.getFloorplanImage = function(floorplanImage, floorOrStoreId) {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'floorplan/getFloorplanImage/' + floorplanImage + '/' + floorOrStoreId
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get Floor plan Image error', error);
                deferred.reject(error);
            });
        };

        // RealTime.. ->  Realtime tracking and Current Density Heatmap
        service.getAccessPointDetails = function() {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'accessPoint/accesspointsPullVsPush'
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get access points Pull Vs Push', error);
                deferred.reject(error);
            });
        };

        // RealTime.. ->  Calibration - get access points for store
        service.getAccessPointStore = function(storeId) {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'siteSurvey/accessPointsPerStore/' + storeId
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get access points for store', error);
                deferred.reject(error);
            });
        };
        // RealTime.. ->  Calibration - get access points for floor
        service.getAccessPointFloor = function(floorId) {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'floor/getAPsPerFloor/' + floorId
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get access points for floor', error);
                deferred.reject(error);
            });
        };

        // RealTime.. ->  Calibration - get real time values
        service.getRealTime = function(data) {
            var deferred = $q.defer();
            return $http({
                method: 'post',
                url: BASE_URL + 'realtime',
                data: data
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get real time values error', error);
                deferred.reject(error);
            });
        };
        // RealTime.. ->  Calibration - Employee And FixedEquipment details
        service.getEmpFixedEqu = function() {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'EmployeeAndFixedEquipment/table'
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get Employee And FixedEquipment details', error);
                deferred.reject(error);
            });
        };
        // RealTime.. ->  Calibration - stdDevAvgRssi details for AP
        service.getStdDevAvgRssi = function(accessPointId) {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'rssi/stdDevAvgRssi/' + accessPointId + '/2'
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get Employee And FixedEquipment details', error);
                deferred.reject(error);
            });
        };
        // RealTime.. -> Calibration - update RSSI value in DB
        service.updateRSSIAP = function(data) {
            var deferred = $q.defer();
            return $http({
                method: 'put',
                url: BASE_URL + 'accessPoint',
                data: data
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('Update RSSI access point error', error);
                deferred.reject(error);
            });
        };
        // RealTime.. ->  Realtime tracking  - positions
        service.getRTPositions = function(planType, planId) {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'positions/' + planType + '/' + planId,
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get Employee And FixedEquipment details', error);
                deferred.reject(error);
            });
        };
        // RealTime.. ->  Realtime tracking accounts For Tracking Map
        service.accountsForTrackingMap = function(data) {
            var deferred = $q.defer();
            return $http({
                method: 'post',
                url: BASE_URL + 'socialWifi/accountsForTrackingMap',
                data: data
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get real time accounts For Tracking Map values error', error);
                deferred.reject(error);
            });
        };
        // RealTime.. ->  Realtime tracking privacy hide details
        service.getPrivacyHide = function() {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'privacyHide/getPrivacy/'
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get privacy hide details', error);
                deferred.reject(error);
            });
        };

        return service;
    });

/***/ }),
/* 117 */
/***/ (function(module, exports) {

/*
 This page facilitates in creating and managing Angular related Servces for the Campaigns
 */

//Common service for all campaigns to be created and managed
angular.module('lsi')
    .factory('fortinetCampaignService', function($http, config, $q) {
        var service = {};
        var BASE_URL = config.API_URL + 'fortinet/';

        // Campaign -> Create Campaign tab
        service.getAllCampaigns = function() {
            var deferred = $q.defer();
            return $http({
                method: 'put',
                url: BASE_URL + 'CampaignNew/campaignByCustomerProjectId'
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get all Campaigns error', error);
                deferred.reject(error);
            });
        };

        // Campaign -> Create campaign tab -> campaigns meta data (Areas, store and list info)
        service.getCampaignData = function() {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'CampaignNew/campaingData'
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get Campaign data error', error);
                deferred.reject(error);
            });
        };

        // Campaign -> Create campaign tab - coupon image
        service.getCampaignCoupon = function(id) {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'CampaignNew/getCoupon/' + id
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get Campaign coupon error', error);
                deferred.reject(error);
            });
        };

        // Campaign -> Create Campaign button
        service.createCampaign = function(data) {
            var deferred = $q.defer();
            return $http({
                method: 'post',
                url: BASE_URL + 'CampaignNew/createCampaign',
                data: data
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('Post Campaign error', error);
                deferred.reject(error);
            });
        };

        // Campaign -> Edit Campaign button
        service.updateCampaign = function(data) {
            var deferred = $q.defer();
            return $http({
                method: 'post',
                url: BASE_URL + 'CampaignNew/updateCampaign',
                data: data
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('Update Campaign error', error);
                deferred.reject(error);
            });
        };

        // Campaign -> Action (Start/Stop) buttons
        service.setStatusCampaign = function(action, id, trigger) {
            var deferred = $q.defer();
            return $http({
                method: 'post',
                url: BASE_URL + 'CampaignNew/setStatus/' + action + '/' + id + '/' + trigger
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('Set status campaign error', error);
                deferred.reject(error);
            });
        };

        // Campaign -> Remove Campaign
        service.removeCampaign = function(campaignId) {
            var deferred = $q.defer();
            return $http({
                method: 'delete',
                url: BASE_URL + 'CampaignNew/deleteCampaign/' + campaignId
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('Delete Campaign error', error);
                deferred.reject(error);
            });
        };

        // Campaign -> Remove all Campaigns
        service.removeAllCampaigns = function() {
            var deferred = $q.defer();
            return $http({
                method: 'delete',
                url: BASE_URL + 'CampaignNew/removeAll'
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('Delete all Campaigns error', error);
                deferred.reject(error);
            });
        };

        // Campaign -> Result campaign tab
        service.getCampaignResults = function(trigger) {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + '/campaignResult/common/' + trigger
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get Campaign results error', error);
                deferred.reject(error);
            });
        };

        // Campaign -> Result campaign tab -> Execution details
        service.getCampaignExeInfo = function(range, tgr, id) {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'campaignResult/' + range + '/' + tgr + '/' + id
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get Campaign daily summary error', error);
                deferred.reject(error);
            });
        };

        // Campaign -> Result campaign tab -> Daily summary -> Execution details
        service.getCampaignSummaryDetails = function(range, tgr, id, date) {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'campaignResult/' + range + '/' + tgr + '/' + id + '/' + date
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get Campaign Execution details error', error);
                deferred.reject(error);
            });
        };

        return service;
    });

/***/ }),
/* 118 */
/***/ (function(module, exports) {

angular.module('lsi')
    // filter for roundup the decimal number for two digits
    .filter('roundup', function() {
        return function(value) {
            var a = value * 100;
            return Math.round(a);
        };
    })
    // filter for pagination of the table
    .filter('startForm', function() {
        return function(input, start) {
            if (!input || !input.length) {
                return;
            }

            start = +start;
            return input.slice(start);
        };
    });

/***/ }),
/* 119 */
/***/ (function(module, exports) {

angular.module('lsi')
    // Directive for generic chart, pass in chart options
    .directive('hcChart', function() {
        return {
            restrict: 'E',
            template: '<div class="chart"></div>',
            scope: {
                options: '='
            },
            link: function(scope, element) {
                Highcharts.chart(element[0], scope.options);
            }
        };
    });

/***/ })
]),[81]);