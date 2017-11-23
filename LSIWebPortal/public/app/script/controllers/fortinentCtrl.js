/*
This controller uses fortinetService to manage the parent control for all the pages from the view
*/
angular.module('lsi').controller("fortinentCtrl", function($scope, fortinetService) {
    $scope.fortiErrorStatus = false;
    $scope.fortinetMainLoader = true;
    $scope.fortiSuccessStatus = false;

    // service to get tree structure status
    fortinetService.getFortinentTree().then(function(res) {
            if (res.data) {
                res = res.data;
                if (res.status == "failure") {
                    $scope.fortiErrorStatus = true;
                    $scope.fortinetMainLoader = false;
                    $scope.fortiSuccessStatus = false;
                } else {
                    $scope.fortiErrorStatus = false;
                    $scope.fortinetMainLoader = false;
                    $scope.fortiSuccessStatus = true;
                }
            }
        },
        function(error) {
            alert("Error retrieving API data, " + error.statusText);
        });

});