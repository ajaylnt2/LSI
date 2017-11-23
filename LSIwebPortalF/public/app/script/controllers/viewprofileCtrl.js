angular.module('lsi').controller('viewprofileCtrl', function ($scope, $cookieStore, close) {
	
	$scope.currentUser = $cookieStore.get('globals').currentUser;
	console.log($scope.currentUser);
    $scope.close = function (result) {
        close(result, 500); // close, but give 500ms for bootstrap to animate
    };

});