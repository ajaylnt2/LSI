angular.module('lsi').controller('edituserCtrl', function ($scope, close, $state,$rootScope, authService, $window) {

    $scope.close = function (result) {
        close(result, 500); // close, but give 500ms for bootstrap to animate
    };
    $scope.loadUser = function(){
        authService.getUser($rootScope.editUserId, function (response) {
            $scope.singleUser = response; 
        });
    };
    
    $scope.editUser = function (editUserFormData) {
        console.log("clicked", editUserFormData);
         if (editUserFormData.Password != editUserFormData.cPassword) {
            $scope.pNotMatching = "Password not Matching";
        }
        else{
            $scope.pNotMatching = "";
            authService.editUser(editUserFormData,function(res){
                console.log(res);
                if(res.status == "success"){
                      $window.location.reload();
                }
                else {
                    $scope.error_message = "User not updated";
                    console.log("please enter user details properly");
                }
            });
        }
    }
    $scope.loadUser();
});
