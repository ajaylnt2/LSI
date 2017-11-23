(function(angular) {
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