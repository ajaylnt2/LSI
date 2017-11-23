(function () {

'use strict';
angular.module('lsi')
    .factory('authService', function ($http,$cookieStore,$rootScope, config) {
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

        function login(emailId,password,callback) { 
            return $http({
                method: 'post',
                url: BASE_URL+ 'users/login',
                data: { emailId: emailId , password:password }
            }).success(function (response) {
                callback(response);
            }).error(function () {
                console.log('auth error');
            });
        }
        //adding user details
        function addUser(addUserFormData,callback) { 
            return $http({
                method: 'post',
                url: BASE_URL+ 'users/createUser',
               data: addUserFormData
            }).success(function (response) {
                callback(response);
            }).error(function () {
                console.log('error');
            });
        }

        //editing user details
         function editUser(editUserFormData,callback) { 
            return $http({
                method: 'post',
                url: BASE_URL+ 'users/updateUser',
               data: editUserFormData
            }).success(function (response) {
                callback(response);
            }).error(function () {
                console.log('error');
            });
        }
        // To update the pwd of specific user
         function editPwd(changedPwd,callback) { 
            return $http({
                method: 'post',
                url: BASE_URL+ 'users/updatePwd',
               data: changedPwd
            }).success(function (response) {
                callback(response);
            }).error(function () {
                console.log('error');
            });
        }

        //deleting user
        function deleteUser(deleteUser,callback) { 
            return $http({
                method: 'post',
                url: BASE_URL+ 'users/deleteUser',
               data: {UserId : deleteUser}
            }).success(function (response) {
                callback(response);
            }).error(function () {
                console.log('error');
            });
        }

        function getAllUsers(callback) {
            return $http({
                method: 'get',
                url: BASE_URL+ 'users/getAllUsers',
            }).success(function (response) {
                callback(response);
            }).error(function () {
                console.log('auth error');
            });
        }

        function getUser(UserId, callback) {
            return $http({
                method: 'post',
                url: BASE_URL+ 'users/getAUser',
                data: {UserId: UserId}
            }).success(function (response) {
                callback(response);
            }).error(function () {
                console.log('auth error');
            });
        }

        function setCredentials(email,userName,role,userId,cStoreAnalytics,cameraAnalytics,wifiAnalytics,CStoreAnalyticsLoadedStatus){
            $rootScope.globals = {
                currentUser: {
                    email:email,
                    userName:userName,
                    role:role,
                    userId:userId,
                    cStoreAnalytics:cStoreAnalytics,
                    cameraAnalytics:cameraAnalytics,
                    wifiAnalytics:wifiAnalytics,
                    CStoreAnalyticsLoadedStatus:CStoreAnalyticsLoadedStatus
                }
            };
            $cookieStore.put('globals', $rootScope.globals);        
        }

        function clearCredentials(){
            $rootScope.globals = {};
            $cookieStore.remove('globals'); 
        }

        return service;

     });
})();
