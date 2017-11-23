/*
This controller uses authService to edit user details from the view
*/
angular.module('lsi').controller('edituserCtrl', function($scope, close, $state, $rootScope, authService, $window) {

    $scope.close = function(result) {
        close(result, 500); // close, but give 500ms for bootstrap to animate
    };
    $scope.loadUser = function() {
        authService.getUser($rootScope.editUserId).then(function(response) {
                if (response.data) {
                    response = response.data;
                    $scope.singleUser = response;
                }
            },
            function(error) {
                alert("Error retrieving API data, " + error.statusText);
            });
    };

    $scope.editUser = function(editUserFormData) {
        if (editUserFormData.Password != editUserFormData.cPassword) {
            $scope.pNotMatching = "Password not Matching";
        } else {
            $scope.pNotMatching = "";
            authService.editUser(editUserFormData).then(function(res) {
                    if (res.data) {
                        res = res.data;
                        if (res.status == "success") {
                            $window.location.reload();
                        } else {
                            $scope.error_message = "User not updated";
                            console.log("please enter user details properly");
                        }
                    }
                },
                function(error) {
                    alert("Error retrieving API data, " + error.statusText);
                });
        }
    }
    $scope.loadUser();
});