(function (angular) {
    "use strict";

    angular.module('lsi').factory('sparkflyService', sparkflyService)
 

    sparkflyService.$inject = ['$http', 'config', 'transformRequestAsFormPost','$rootScope', '$cookieStore', '$window', '$location'];

    function sparkflyService($http, config, transformRequestAsFormPost, $rootScope, $cookieStore, $window, $location) {

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


        function getAuthKey(callback) {
            return $http({
                method: 'get',
                url: BASE_URL+ 'sparkfly/auth',
                transformRequestAsFormPost: transformRequestAsFormPost
            }).success(function (response) {
                callback(response);
            }).error(function () {
                console.log('auth error');
            });
        }
        function postAuthKey(authKey, callback) {
            return $http({
                method: 'post',
                url: BASE_URL + 'sparkfly/auth',
                transformRequestAsFormPost: transformRequestAsFormPost,
                data: { authToken: authKey }
            }).success(function (response) {
                callback(response);
            }).error(function () {
                console.log('auth error');
            });
        }

        function getAccountLevel(startDate,endDate,callback) {
            return $http({
                method: 'get',
                url: BASE_URL + 'sparkfly/account_level/'+startDate+'/'+endDate,
                transformRequestAsFormPost: transformRequestAsFormPost
            }).success(function (response) {
                callback(response);
            }).error(function (error) {
                console.log('get account  error' , error);
            });
        }
        function getImpressionsLevel(startDate,endDate,callback) {
            return $http({
                method: 'get',
                url: BASE_URL + 'sparkfly/impressions/'+startDate+'/'+endDate,
                transformRequestAsFormPost: transformRequestAsFormPost
            }).success(function (response) {
                callback(response);
            }).error(function (error) {
                console.log('get account  error' , error);
            });
        }
        
        function getConversions(startDate,endDate,callback) {
            return $http({
                method: 'get',
                url: BASE_URL + 'sparkfly/conversions/'+startDate+'/'+endDate,
                transformRequestAsFormPost: transformRequestAsFormPost
            }).success(function (response) {
                callback(response);
            }).error(function (error) {
                console.log('get account  error' , error);
            });
        }

        
        function getSparkflyAuthentication(emailId,callback){
            return $http({
                method: 'post',
                url: BASE_URL+ 'sparkfly/getSparkflyAuthentication',
                data: { emailId: emailId}
            }).success(function (response) {
                callback(response);
            }).error(function () {
                console.log('getSparkflyAuthentication error');
            });
        }


    }


}(window.angular));

