angular.module('lsi').controller("logoutCtrl", function ($scope,authService,$location,$cookies) {  
   
    $scope.logout = function(){      
        authService.clearCredentials();
        var cookies = $cookies.getAll();        
		angular.forEach(cookies, function (v, k) {
		    $cookies.remove(k);
		});
		$location.path('/');
    };
    
});