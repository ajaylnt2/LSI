angular.module('lsi').controller('adduserCtrl', function ($scope, close, $state, authService,$window) {
    $scope.addUserFormData = {};
    $scope.addUserFormData.CStoreAnalytics =false,
    $scope.addUserFormData.CameraAnalytics = false,
    $scope.addUserFormData.WifiAnalytics = false;

    $scope.addUser = function (addUserFormData) {
        if(addUserFormData.CStoreAnalytics){
            $scope.addUserFormData.XAuthIdentity = addUserFormData.XAuthIdentity;
            $scope.addUserFormData.XAuthKey = addUserFormData.XAuthKey;
        }
        else{
            $scope.addUserFormData.XAuthIdentity = '';
            $scope.addUserFormData.XAuthKey = '';
        }
        if(addUserFormData.CameraAnalytics){
            $scope.addUserFormData.AuthorizationToken = addUserFormData.AuthorizationToken;
        }
        else{
            $scope.addUserFormData.AuthorizationToken ='';
        }
        if(addUserFormData.WifiAnalytics){
            $scope.addUserFormData.WifiUserName = addUserFormData.WifiUserName;
            $scope.addUserFormData.WifiPassword = addUserFormData.WifiPassword;
        }
        else{
            $scope.addUserFormData.WifiUserName = '';
            $scope.addUserFormData.WifiPassword = '';
        }
        var obj = {
            UserName:addUserFormData.UserName,
            EmailId:addUserFormData.EmailId,
            Password:addUserFormData.Password,
            Role:addUserFormData.Role,
            CStoreAnalytics:$scope.addUserFormData.CStoreAnalytics,
            CameraAnalytics:$scope.addUserFormData.CameraAnalytics,
            WifiAnalytics:$scope.addUserFormData.WifiAnalytics,
            WifiPassword:$scope.addUserFormData.WifiPassword,
            WifiUserName:$scope.addUserFormData.WifiUserName,
            XAuthIdentity:$scope.addUserFormData.XAuthIdentity,
            XAuthKey:$scope.addUserFormData.XAuthKey,
            AuthorizationToken:$scope.addUserFormData.AuthorizationToken          
        }; 
        //console.log(obj);
        if (addUserFormData.Password != addUserFormData.cPassword) {
            $scope.pNotMatching = "Password not Matching";
        }        
        else {
            $scope.pNotMatching = "";
            authService.addUser(obj, function (res) {
                console.log(res);
                if (res.status == "success") {
                   $window.location.reload();
                }
                else {
                    $scope.errorMessage = res.message;
                    console.log("please enter user details properly");
                }
            });
                       
        }     
    }

});