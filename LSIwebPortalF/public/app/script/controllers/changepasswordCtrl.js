angular.module('lsi').controller('changepasswordCtrl', function ($scope, close ,$cookieStore ,authService,$window,$location) {
	
	$scope.currentUser = $cookieStore.get('globals').currentUser;
	console.log($scope.currentUser);
	$scope.changedpwdStatus = false;

    $scope.close = function (result) {
        close(result, 500); // close, but give 500ms for bootstrap to animate
    };

    $scope.updateUserPwd = function(){
    	console.log($scope.editPwdFormData);
    	if ($scope.editPwdFormData.Password != $scope.editPwdFormData.cPassword || $scope.editPwdFormData.Password == undefined || $scope.editPwdFormData.cPassword == undefined ) {
            $scope.pNotMatching = "Password not Matching";
        }        
        else {
            $scope.pNotMatching = "";
            $scope.changedPwd = {
									"UserId":$scope.currentUser.userId,
									"Password":$scope.editPwdFormData.Password
								};
            console.log($scope.changedPwd);
	    	authService.editPwd($scope.changedPwd,function(res){
	    		console.log(res);
	    		if(res.status == "success"){
	    			$scope.changedpwdStatus =true;
	    			$scope.changedpwd = "Password Changed Successfully.";
	    			setTimeout(function(){
	    				$scope.close();			                   		
				        authService.clearCredentials();
				        $location.path('/');
                   		$window.location.reload();	
	    			},2000);
	    			
                }
	    	});
    	}
    };
}); 