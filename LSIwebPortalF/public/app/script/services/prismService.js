(function (angular) {
    "use strict";

    angular.module('lsi').factory('prismService', prismService)
 

    prismService.$inject = ['$http', 'config', 'transformRequestAsFormPost','$rootScope', '$cookieStore', '$window', '$location'];

    function prismService($http, config, transformRequestAsFormPost, $rootScope, $cookieStore, $window, $location) {

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

        function getPrismTokenId(emailId,callback){
            return $http({
                method: 'post',
                url: BASE_URL+ 'prism/generateToken',
                data: { emailId: emailId}
            }).success(function (response) {
                callback(response);
            }).error(function () {
                console.log('auth error');
            });
        }

        function getAllAccounts(callback) {
            return $http({
                method: 'get',
                url: BASE_URL + 'prism/accounts',
                transformRequestAsFormPost: transformRequestAsFormPost
            }).success(function (response) {
                callback(response);
            }).error(function (error) {
                console.log('get sites  error' , error);
            });
        }

        function getAllSites(accountId,callback) {
            return $http({
                method: 'get',
                url: BASE_URL + 'prism/accounts/'+accountId+'/sites',
                transformRequestAsFormPost: transformRequestAsFormPost
            }).success(function (response) {
                callback(response);
            }).error(function (error) {
                console.log('get sites  error' , error);
            });
        }

        function getSitesById(accountId, siteId, callback) {
            return $http({
                method: 'get',
                url: BASE_URL + 'prism/accounts/' + accountId + '/sites/' + siteId,
                transformRequestAsFormPost: transformRequestAsFormPost
            }).success(function (response) {
                callback(response);
            }).error(function (error) {
                console.log('get sites  error', error);
            });
        }

        function getAllZones(accountId, callback) {
            return $http({
                method: 'get',
                url: BASE_URL + 'prism/accounts/' + accountId + '/zones',
                transformRequestAsFormPost: transformRequestAsFormPost
            }).success(function (response) {
                callback(response);
            }).error(function (error) {
                console.log('get sites  error', error);
            });
        }

        function getAnalyticsSites(zoneId,siteId,change,count,hours,bussHrs,startTime,endTime, callback) {
            return $http({
                method: 'get',
                url: BASE_URL + 'prism/analytics/zones/'+zoneId+'/siteId/'+siteId+'/metricChange/'+change+'/metricCount/'+count+'/period/'+hours+'/bussHrs/'+bussHrs+'/start/'+startTime+'/stop/'+endTime,
                transformRequestAsFormPost: transformRequestAsFormPost
            }).success(function (response) {
                callback(response);
            }).error(function (error) {
                console.log('get sites  error', error);
            });
        }

        //Zone Count and Change values
        function getZoneCountChange(bussHrs,change,count,siteId,startTime,endTime,zoneId, callback) {
            return $http({
                method: 'get',
                url: BASE_URL + 'prism/data/bussHrs/'+bussHrs+'/metricChange/'+change+'/metricCount/'+count+'/siteId/'+siteId+'/start/'+startTime+'/stop/'+endTime+'/zones/'+zoneId,
                transformRequestAsFormPost: transformRequestAsFormPost
            }).success(function (response) {
                callback(response);
            }).error(function (error) {
                console.log('get Zone Count and Change values error', error);
            });
        }

        function getZoneCountDayHours(bussHrs,count,typical,periodValue,siteId,startTime,endTime,zoneId, callback) {
            return $http({
                method: 'get',
                url: BASE_URL + 'prism/data/byTime/bussHrs/'+bussHrs+'/metricCount/'+count+'/metricTypical/'+typical+'/period/'+periodValue+'/siteId/'+siteId+'/start/'+startTime+'/stop/'+endTime+'/zones/'+zoneId,
                transformRequestAsFormPost: transformRequestAsFormPost
            }).success(function (response) {
                callback(response);
            }).error(function (error) {
                console.log('get Zone Count values for day and hours error', error);
            });
        }


        function getAllInsightConfig(accountId, callback) {                
            return $http({
                method: 'get',
                url: BASE_URL + 'prism/accounts/' + accountId + '/insight-configurations',
                transformRequestAsFormPost: transformRequestAsFormPost
            }).success(function (response) {
                callback(response);
            }).error(function (error) {
                console.log('get sites  error', error);
            });
        }
        //accounts/:accountId/insight-configurations/:insightConfigId/insights/pages/:pageNo
        function getInsightConfig(accountId,insightConfigId,pageNo,callback) {                
            return $http({
                method: 'get',
                url: BASE_URL + 'prism/accounts/' + accountId + '/insight-configurations/'+insightConfigId+'/insights/pages/'+pageNo,
                transformRequestAsFormPost: transformRequestAsFormPost
            }).success(function (response) {
                callback(response);
            }).error(function (error) {
                console.log('get sites  error', error);
            });
        }

        function getAllCameras(callback) {                
            return $http({
                method: 'get',
                url: BASE_URL + 'prism/accounts/' + accountId + '/cameras',
                transformRequestAsFormPost: transformRequestAsFormPost
            }).success(function (response) {
                callback(response);
            }).error(function (error) {
                console.log('get sites  error', error);
            });
        }



    }

    // Base64 encoding service used by AuthenticationService
    /*var Base64 = {

        keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',

        encode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            do {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);

                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;

                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }

                output = output +
                    this.keyStr.charAt(enc1) +
                    this.keyStr.charAt(enc2) +
                    this.keyStr.charAt(enc3) +
                    this.keyStr.charAt(enc4);
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
            } while (i < input.length);

            return output;
        },

        decode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
            var base64test = /[^A-Za-z0-9\+\/\=]/g;
            if (base64test.exec(input)) {
                window.alert("There were invalid base64 characters in the input text.\n" +
                    "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                    "Expect errors in decoding.");
            }
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

            do {
                enc1 = this.keyStr.indexOf(input.charAt(i++));
                enc2 = this.keyStr.indexOf(input.charAt(i++));
                enc3 = this.keyStr.indexOf(input.charAt(i++));
                enc4 = this.keyStr.indexOf(input.charAt(i++));

                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;

                output = output + String.fromCharCode(chr1);

                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }

                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";

            } while (i < input.length);

            return output;
        }
    };*/

}(window.angular));

