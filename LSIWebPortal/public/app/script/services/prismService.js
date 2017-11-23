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