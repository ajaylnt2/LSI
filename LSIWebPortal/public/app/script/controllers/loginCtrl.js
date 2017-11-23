/*
This controller uses authService,sparkflyService,prismService,fortinetService to manage user login from the view
*/
angular.module('lsi').controller("loginCtrl", function($scope, $state, authService, sparkflyService, prismService, fortinetService) {

    // function to login into the app w.r.t the access of the user
    $scope.login = function(emailId, pwd) {
        authService.login(emailId, pwd).then(function(res) {
                if (res.data) {
                    res = res.data;
                    if (res.status == "success") {
                        sparkflyService.getSparkflyAuthentication(emailId).then(function(response) {
                                if (response.data) {
                                    response = response.data;
                                    sparkflyService.getAuthKey().then(function(response) {
                                            if (response.data) {
                                                response = response.data;
                                                if (response.authToken == '' || response.authToken == undefined) {
                                                    $scope.CStoreAnalyticsLoadedStatus = false;
                                                    authService.setCredentials(res.EmailId, res.UserName, res.role, res.UserId, res.CStoreAnalytics, res.CameraAnalytics, res.WifiAnalytics, $scope.CStoreAnalyticsLoadedStatus);
                                                    $state.go('dashboard');
                                                } else {
                                                    sparkflyService.postAuthKey(response.authToken).then(function(response) {
                                                            if (response.data) {
                                                                response = response.data;
                                                                $scope.CStoreAnalyticsLoadedStatus = true;
                                                                authService.setCredentials(res.EmailId, res.UserName, res.role, res.UserId, res.CStoreAnalytics, res.CameraAnalytics, res.WifiAnalytics, $scope.CStoreAnalyticsLoadedStatus);
                                                                $state.go('dashboard');
                                                            }
                                                        },
                                                        function(error) {
                                                            alert("Error retrieving API data, " + error.statusText);
                                                        });
                                                }
                                            }
                                        },
                                        function(error) {
                                            alert("Error retrieving API data, " + error.statusText);
                                        });
                                }
                            },
                            function(error) {
                                alert("Error retrieving API data, " + error.statusText);
                            });
                        prismService.getPrismTokenId(emailId).then(function(response) {}, function(error) {
                            alert("Error retrieving API data, " + error.statusText);
                        });
                        fortinetService.getFortinetAuthentication(emailId).then(function(response) {}, function(error) {
                            alert("Error retrieving API data, " + error.statusText);
                        });
                    } else {
                        $scope.error_message = "Enter valid Email Id and Password.";
                    }
                }
            },
            function(error) {
                alert("Error retrieving API data, " + error.statusText);
            });
    }

});