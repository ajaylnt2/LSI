/*
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