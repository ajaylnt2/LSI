/*
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