angular.module('lsi').controller('deleteuserCtrl', function ($scope, $rootScope,close,authService,$window) {

    $scope.close = function (result) {
        close(result, 500); // close, but give 500ms for bootstrap to animate
    };

   
   $scope.deleteUser=function(id){
   	console.log(id);
   	if(id=="1"){
      console.log($rootScope);
      console.log($rootScope.deleteUserId);
   			authService.deleteUser($rootScope.deleteUserId,function(res){
   				console.log('delete Id ' +$rootScope.deleteUserId);
   				
            console.log(res);
            if(res.status == "success"){                
              $window.location.reload();
            }
            else {
                $scope.error_message = "User not deleted";
                console.log("please enter admin, lsilsi");
            }
        });
   		}
   }

});