/*
This controller uses authService to manage password change from the view
*/
angular.module('lsi').controller('changepasswordCtrl', function($scope, close, $cookieStore, authService, $window, $location) {

    $scope.currentUser = $cookieStore.get('globals').currentUser;
    $scope.changedpwdStatus = false;

    $scope.close = function(result) {
        close(result, 500); // close, but give 500ms for bootstrap to animate
    };

    $scope.updateUserPwd = function() {
        if ($scope.editPwdFormData.Password != $scope.editPwdFormData.cPassword || $scope.editPwdFormData.Password == undefined || $scope.editPwdFormData.cPassword == undefined) {
            $scope.pNotMatching = "Password not Matching";
        } else {
            $scope.pNotMatching = "";
            $scope.changedPwd = {
                "UserId": $scope.currentUser.userId,
                "Password": $scope.editPwdFormData.Password
            };
            authService.editPwd($scope.changedPwd).then(function(res) {
                    if (res.data) {
                        res = res.data
                        if (res.status == "success") {
                            $scope.changedpwdStatus = true;
                            $scope.changedpwd = "Password Changed Successfully.";
                            setTimeout(function() {
                                $scope.close();
                                authService.clearCredentials();
                                $location.path('/');
                                $window.location.reload();
                            }, 2000);

                        }
                    }
                },
                function(error) {
                    alert("Error retrieving API data, " + error.statusText);
                });
        }
    };
});