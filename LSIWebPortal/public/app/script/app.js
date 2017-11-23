// app.js Document
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