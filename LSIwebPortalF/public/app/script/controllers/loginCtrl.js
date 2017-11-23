angular.module('lsi').controller("loginCtrl", function ($scope, $state,authService,sparkflyService,prismService,fortinetService) {

    // function to login into the app w.r.t the access of the user
    $scope.login = function (emailId, pwd) {        
        authService.login(emailId,pwd,function(res){
            if(res.status == "success"){
                sparkflyService.getSparkflyAuthentication(emailId,function(response){  
                    sparkflyService.getAuthKey(function (response) {
                        if(response.authToken == '' || response.authToken == undefined){
                            $scope.CStoreAnalyticsLoadedStatus = false;
                            authService.setCredentials(res.EmailId,res.UserName,res.role,res.UserId,res.CStoreAnalytics,res.CameraAnalytics,res.WifiAnalytics,$scope.CStoreAnalyticsLoadedStatus);
                            $state.go('dashboard');
                        }
                        else{
                            sparkflyService.postAuthKey(response.authToken, function (response) {
                                $scope.CStoreAnalyticsLoadedStatus = true;
                                authService.setCredentials(res.EmailId,res.UserName,res.role,res.UserId,res.CStoreAnalytics,res.CameraAnalytics,res.WifiAnalytics,$scope.CStoreAnalyticsLoadedStatus);
                                $state.go('dashboard');
                            });
                        }                
                    });
                });
                prismService.getPrismTokenId(emailId,function(response){});
                fortinetService.getFortinetAuthentication(emailId,function(response){});
            }
            else {
                $scope.error_message = "Enter valid Email Id and Password.";
            }
        });       
    }


});
