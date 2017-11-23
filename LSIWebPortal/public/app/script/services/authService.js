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