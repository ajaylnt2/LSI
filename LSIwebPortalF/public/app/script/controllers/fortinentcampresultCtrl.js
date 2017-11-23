angular.module('lsi').controller('fortinentcampresultCtrl', function ($scope, fortinetCampaignService) {
	// *** Constant values specific to the controller *** //
	$scope.constants = {
		"TRIGGER_NAMES" : { 
			"t1": "Once",
			"t3": "WiFi logins today",
			"t2": "First time in Store today", 
			"t4": "First time in Area today",
			"t5": "Daily dwell-time per Area exceeded" 
		},
		"TGR_CALL_VAL" : {
			"t1" : "getOnce",
			"t3" : "getInStoreToday",
			"t2" : "getFirstTimeInStoreToday",
			"t4" : "getFirstTimeInAreaToday",
			"t5" : "getDwellTimeInAreaExceed"
		},
		"CMP_RSLT_DT_FRMT" : "YYYY-MM-DD HH:mm"
	};
	$scope.showData = false;
	$scope.showSumry = false;
	// *** Fetch campaign results and display as a table *** //
	$scope.getCampResults = function (trigger) {
		$scope.showData = true;
		$scope.showSumry = false;
		fortinetCampaignService.getCampaignResults(trigger, function (response) {
			if(response && response.header) {
				$scope.tableHeaders = [];
				$scope.results = response.data;
				var tz = moment().utc().tz(moment.tz.guess()).format('Z');
				angular.forEach(response.header, function (header) {
					if(header == "Date" || header == "Start date") {
						header = header + " [GMT"+ tz +"]";
					}
					if(header == "Messages sent via") {
						$scope.tableHeaders.push({"text" : header, "cols":2, "rows":null})
					} else {
						$scope.tableHeaders.push({"text" : header, "cols":null, "rows":2})
					}
				});
				angular.forEach($scope.results, function (result) {
					fortinetCampaignService.getCampaignCoupon(result.campaignId, function (resp) {
						if(resp.status != "failure") {
							result.couponUrl = "data:image/png;base64," + resp;
						} else result.couponUrl = null;
						
					});
					if(result.date)
						result.date = moment.utc(result.date +" "+ result.time).zone(tz).format($scope.constants.CMP_RSLT_DT_FRMT);
						//result.date = moment(result.date+" " + result.time).utc().format($scope.constants.CMP_RSLT_DT_FRMT);
				});
				// *** Set pagination values of campaign results table *** //
				$scope.mainPageOptions = [1,2,3];
		        $scope.viewbyM = 1;
		        $scope.totalMainItems = $scope.results.length;
		        $scope.currentMainPage = 1;
		        $scope.itemsPerMainPage = $scope.viewbyM;
		        $scope.maxSize = 3;
			}
		})
	}

	// *** Fetch execution details of each camapign and display as a table *** //
	$scope.getExecDetails = function (campaign,trigger, id) {
		$scope.showSumry = true;
		$scope.campName = campaign;
		var range = "perDay";
		switch(trigger) {
			case $scope.constants.TRIGGER_NAMES.t1:
				range = "perMsg";
	            trigger = $scope.constants.TRIGGER_NAMES.t1;
	            break;
	        case $scope.constants.TRIGGER_NAMES.t3:
	            trigger = $scope.constants.TGR_CALL_VAL.t3;
	            break;
	        case $scope.constants.TRIGGER_NAMES.t2:
	            trigger = $scope.constants.TGR_CALL_VAL.t2;
	            break;
	        case $scope.constants.TRIGGER_NAMES.t4:
	            trigger = $scope.constants.TGR_CALL_VAL.t;
	            break;
	        case $scope.constants.TRIGGER_NAMES.t5:
	            trigger = $scope.constants.TGR_CALL_VAL.t5;
	            break;
		}
		fortinetCampaignService.getCampaignExeInfo(range, trigger, id, function (response) {
			$scope.smryHdrs = [];
			$scope.smryData = [];
			$scope.tz = null;
			if(response.status != "failure") {
				$scope.smryHdrs = response.header;
				$scope.smryData = response.data;
				var tz = moment().utc().tz(moment.tz.guess()).format('Z');
				$scope.tz =  " [GMT"+ tz +"]";
				angular.forEach($scope.smryData, function (data) {
					data.deliveryTime = moment(data.deliveryTime).format($scope.constants.CMP_RSLT_DT_FRMT);
					data.emailOpened = (data.opened == true) ? 'Yes' : 'No';
					data.unsub = (data.unsubscribed == true) ? 'Yes' : 'No';
				})
				$scope.setPaginationVals($scope.smryData);
			}
		});
	}

	// *** Set no of items per page for pagination of execution details table *** //
	$scope.setItemsPerPage = function(num) {
        $scope.itemsPerPage = num;
        $scope.currentPage = 1; //reset to first page
    }

    // *** Set no of items per page for pagination of campaign results table *** //
    $scope.setItemsPerMainPage = function(num) {
        $scope.itemsPerMainPage = num;
        $scope.currentMainPage = 1; //reset to first page
    }

    // *** Set all pagination parameters of table *** //
	$scope.setPaginationVals = function (pageData) {
        $scope.sortReverse  = false;  // set the default sort order
        $scope.pageOptions = [5,10,15];// [10,20,30];
        $scope.viewby = 5;
        $scope.totalItems = pageData.length;
        $scope.currentPage = 1;
        $scope.itemsPerPage = $scope.viewby;
        $scope.maxSize = 3;
	}
});
