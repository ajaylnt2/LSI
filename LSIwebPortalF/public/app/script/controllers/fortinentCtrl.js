angular.module('lsi').controller("fortinentCtrl", function ($scope, fortinetService) {
    $scope.fortiErrorStatus = false;
    $scope.fortinetMainLoader = true;
    $scope.fortiSuccessStatus = false;
    

    // service to get tree structure status
  	fortinetService.getFortinentTree(function (res) {
        if(res.status == "failure"){
            $scope.fortiErrorStatus = true; 
            $scope.fortinetMainLoader = false;  
            $scope.fortiSuccessStatus = false;          
        }else{
            $scope.fortiErrorStatus = false; 
            $scope.fortinetMainLoader = false;
            $scope.fortiSuccessStatus = true;           
        }
    });


   
});

