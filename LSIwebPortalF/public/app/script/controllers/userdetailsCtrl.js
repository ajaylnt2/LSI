angular.module('lsi').controller('userdetailsCtrl', function ($scope, authService, ModalService,$rootScope) {

    $scope.loadAllUsers = function(){
        authService.getAllUsers( function (response) {
              console.log('data checked ',response);     
              $scope.userDetails = response;  

        });
    };
   
   $scope.addUser = function () {
        ModalService.showModal({
            templateUrl: 'views/adduser.html',
            controller: "adduserCtrl"
        }).then(function (modal) {
            modal.element.modal();
            modal.close.then(function (result) {
                /*$scope.message = "You said " + result;*/
            });
        });
    };

    $scope.editUser = function (UserId) {
      //  debugger;
      console.log(UserId);
        $rootScope.editUserId=UserId;
        ModalService.showModal({
            templateUrl: 'views/edituser.html',
            controller: "edituserCtrl"
        }).then(function (modal) {
            modal.element.modal();
            modal.close.then(function (result) {
                /*$scope.message = "You said " + result;*/
            });
        });

        
    };

    $scope.deleteUser = function (UserId) {
        //debugger;
        $rootScope.deleteUserId=UserId;
        ModalService.showModal({
            templateUrl: 'views/deleteuser.html',
            controller: "deleteuserCtrl"
        }).then(function (modal) {
            modal.element.modal();
            modal.close.then(function (result) {
                /*$scope.message = "You said " + result;*/
            });
        });
    };

    $scope.loadAllUsers();

});