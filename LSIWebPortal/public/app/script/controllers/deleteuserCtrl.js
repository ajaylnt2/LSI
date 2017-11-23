/*
This controller uses authService to delete users
*/
angular.module('lsi').controller('deleteuserCtrl', function($scope, $rootScope, close, authService, $window) {

    $scope.close = function(result) {
        close(result, 500); // close, but give 500ms for bootstrap to animate
    };


    $scope.deleteUser = function(id) {
        if (id == "1") {

            authService.deleteUser($rootScope.deleteUserId).then(function(response) {
                    if (response.data) {
                        response = response.data;
                        if (response.status == "success") {
                            $window.location.reload();
                        } else {
                            $scope.error_message = "User not deleted";
                        }
                    }
                },
                function(error) {
                    alert("Error retrieving API data, " + error.statusText);
                });
        }
    }

});