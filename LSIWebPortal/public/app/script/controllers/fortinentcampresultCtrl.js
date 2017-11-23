/*
This controller uses fortinetCampaignService to provide campaign results data to the view
*/
angular.module('lsi').controller('fortinentcampresultCtrl', function($scope, fortinetCampaignService) {
    // *** Constant values specific to the controller *** //
    $scope.constants = {
        "TRIGGER_NAMES": {
            "t1": "Once",
            "t3": "WiFi logins today",
            "t2": "First time in Store today",
            "t4": "First time in Area today",
            "t5": "Daily dwell-time per Area exceeded"
        },
        "TGR_CALL_VAL": {
            "t1": "getOnce",
            "t3": "getInStoreToday",
            "t2": "getFirstTimeInStoreToday",
            "t4": "getFirstTimeInAreaToday",
            "t5": "getDwellTimeInAreaExceed"
        },
        "CMP_RSLT_DT_FRMT": "YYYY-MM-DD HH:mm",
        "ERROR_TXT": "Error processing data: "
    };
    $scope.showData = false;
    $scope.showSumry = false;
    $scope.exDtails = false;
    // *** Fetch campaign results and display as a table *** //
    $scope.getCampResults = function(trigger) {
        $scope.showData = true;
        $scope.showSumry = false;
        $scope.exDtails = false;
        $scope.activeTgr = trigger;
        fortinetCampaignService.getCampaignResults(trigger).then(function(response) {
            if (response.data) {
                response = response.data;
                if (response && response.header) {
                    $scope.tableHeaders = [];
                    $scope.results = response.data;
                    var tz = moment().utc().tz(moment.tz.guess()).format('Z');
                    angular.forEach(response.header, function(header) {
                        if (header == "Date" || header == "Start date") {
                            header = header + " [GMT" + tz + "]";
                        }
                        if (header == "Messages sent via") {
                            $scope.tableHeaders.push({
                                "text": header,
                                "cols": 2,
                                "rows": null
                            })
                        } else {
                            $scope.tableHeaders.push({
                                "text": header,
                                "cols": null,
                                "rows": 2
                            })
                        }
                    });
                    angular.forEach($scope.results, function(result) {
                        fortinetCampaignService.getCampaignCoupon(result.campaignId).then(function(resp) {
                            resp = resp.data;
                            if (resp.status != "failure") {
                                result.couponUrl = "data:image/png;base64," + resp;
                            } else result.couponUrl = null;

                        }, function(error) {
                            alert($scope.constants.ERROR_TXT + error.statusText);
                        });
                        if (result.date)
                            result.date = moment.utc(result.date + " " + result.time).zone(tz).format($scope.constants.CMP_RSLT_DT_FRMT);
                    });
                    $scope.button_text = (trigger == $scope.constants.TGR_CALL_VAL.t1) ? ("Execution details") : ("Daily summary");
                    // *** Set pagination values of campaign results table *** //
                    $scope.mainPageOptions = [10, 20, 30];
                    $scope.viewbyM = 10;
                    $scope.totalMainItems = $scope.results.length;
                    $scope.currentMainPage = 1;
                    $scope.itemsPerMainPage = $scope.viewbyM;
                    $scope.maxSize = 3;
                }
            }
        }, function(error) {
            alert($scope.constants.ERROR_TXT + error.statusText);
        });
    }

    // *** Fetch execution details of each camapign and display as a table *** //
    $scope.getExecDetails = function(campaign, trigger, id) {
        $scope.showSumry = true;
        $scope.exDtails = false;
        $scope.campName = campaign;
        var range = "perDay";
        switch (trigger) {
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
                trigger = $scope.constants.TGR_CALL_VAL.t4;
                break;
            case $scope.constants.TRIGGER_NAMES.t5:
                trigger = $scope.constants.TGR_CALL_VAL.t5;
                break;
        }
        $scope.range = range;
        $scope.trigger = trigger;
        $scope.id = id;
        fortinetCampaignService.getCampaignExeInfo(range, trigger, id).then(function(response) {
            $scope.smryHdrs = [];
            $scope.smryData = [];
            $scope.tz = null;
            response = response.data;
            if (response.status != "failure" && response.data) {
                $scope.fields = $scope.getValues(trigger, response.header);
                $scope.smryHdrs = response.header;
                var tz = moment().utc().tz(moment.tz.guess()).format('Z');
                $scope.tz = " [GMT" + tz + "]";
                angular.forEach(response.data, function(data) {
                    if (data.deliveryTime != undefined) {
                        data.deliveryTime = moment(data.deliveryTime).format($scope.constants.CMP_RSLT_DT_FRMT);
                    }
                    if (data.timeSent != undefined) {
                        data.timeSent = moment(data.timeSent).format("YYYY-MM-DD");
                    }
                    if (data.opened != undefined) {
                        data.opened = (data.opened == true) ? 'Yes' : 'No';
                    }
                    if (data.unsubscribed != undefined) {
                        data.unsubscribed = (data.unsubscribed == true) ? 'Yes' : 'No';
                    }
                })
                $scope.smryData = response.data;
                $scope.setPaginationVals($scope.smryData);
            }
        }, function(error) {
            alert($scope.constants.ERROR_TXT + error.statusText);
        });
    }

    // *** Set no. of items per page for pagination of execution details table *** //
    $scope.setItemsPerPage = function(num) {
        $scope.itemsPerPage = num;
        $scope.currentPage = 1; //reset to first page
    }
    // *** Form values for Execution details table according to the trigger *** //
    $scope.getValues = function(trigger, hdrs) {
        var fields;
        switch (trigger) {
            case $scope.constants.TRIGGER_NAMES.t1:
                fields = [{
                    value: 'deliveryTime',
                    header: hdrs[0]
                }, {
                    value: 'recipient',
                    header: hdrs[1]
                }, {
                    value: 'opened',
                    header: hdrs[2]
                }, {
                    value: 'unsubscribed',
                    header: hdrs[3]
                }];
                break;
            case $scope.constants.TGR_CALL_VAL.t3:
                fields = [{
                    value: 'timeSent',
                    header: hdrs[0]
                }, {
                    value: 'numberOfSms',
                    header: hdrs[1]
                }, {
                    value: 'numberOfEmails',
                    header: hdrs[2]
                }, {
                    value: 'numberEmailsOpened',
                    header: hdrs[3]
                }, {
                    value: 'numberUnsubscribedViaEmail',
                    header: hdrs[4]
                }];
                break;
            case $scope.constants.TGR_CALL_VAL.t2:
                fields = [{
                    value: 'date',
                    header: hdrs[0]
                }, {
                    value: 'numberOfSms',
                    header: hdrs[1]
                }, {
                    value: 'numberOfEmails',
                    header: hdrs[2]
                }, {
                    value: 'numberEmailsOpened',
                    header: hdrs[3]
                }, {
                    value: 'numberUnsubscribedViaEmail',
                    header: hdrs[4]
                }];
                break;
            case $scope.constants.TGR_CALL_VAL.t4:
                fields = [{
                    value: 'date',
                    header: hdrs[0]
                }, {
                    value: 'numberOfSms',
                    header: hdrs[1]
                }, {
                    value: 'numberOfEmails',
                    header: hdrs[2]
                }, {
                    value: 'numberEmailsOpened',
                    header: hdrs[3]
                }, {
                    value: 'numberUnsubscribedViaEmail',
                    header: hdrs[4]
                }];
                break;
            case $scope.constants.TGR_CALL_VAL.t5:
                fields = [{
                    value: 'date',
                    header: hdrs[0]
                }, {
                    value: 'numberOfSms',
                    header: hdrs[1]
                }, {
                    value: 'numberOfEmails',
                    header: hdrs[2]
                }, {
                    value: 'numberEmailsOpened',
                    header: hdrs[3]
                }, {
                    value: 'numberUnsubscribedViaEmail',
                    header: hdrs[4]
                }];
                break;
        }
        return fields;
    }
    $scope.getDetails = function(timeSent, date) {
        $scope.exDtails = true;
        if ($scope.trigger == "getInStoreToday") {
            date = moment(timeSent).subtract(1, "days").format("YYYY-MM-DD");
        } else date = date;
        $scope.exDate = date;
        fortinetCampaignService.getCampaignSummaryDetails("perMsg", $scope.trigger, $scope.id, date).then(function(response) {
            $scope.execHdrs = [];
            $scope.execData = [];
            response = response.data;
            if (response.status != "failure" && response.data) {
                $scope.execFields = $scope.getExecValues(response.header);
                $scope.execHdrs = response.header;
                angular.forEach(response.data, function(data) {
                    if (data.timeSent != undefined) {
                        data.timeSent = moment.utc(data.timeSent).zone(moment.tz.guess()).format('hh:mm');
                        //data.timeSent = moment(data.timeSent).format("HH:mm");
                    }
                    if (data.unsubscribed != undefined) {
                        data.unsubscribed = (data.unsubscribed == true) ? 'Yes' : 'No';
                    }
                })
                $scope.execData = response.data;
                $scope.setPaginationVals($scope.execData);
            }
        });

    }
    // *** Form values for Execution details table according to the trigger *** //
    $scope.getExecValues = function(hdrs) {
        var fields;
        fields = [{
            value: 'timeSent',
            header: hdrs[0]
        }, {
            value: 'recipient',
            header: hdrs[1]
        }, {
            value: 'unsubscribed',
            header: hdrs[2]
        }];
        return fields;
    }

    // *** Set no. of items per page for pagination of campaign results table *** //
    $scope.setItemsPerMainPage = function(num) {
        $scope.itemsPerMainPage = num;
        $scope.currentMainPage = 1; //reset to first page
    }

    // *** Set all pagination parameters of table *** //
    $scope.setPaginationVals = function(pageData) {
        $scope.sortReverse = false; // set the default sort order
        $scope.pageOptions = [10, 20, 30];
        $scope.viewby = 10;
        $scope.totalItems = pageData.length;
        $scope.currentPage = 1;
        $scope.itemsPerPage = $scope.viewby;
        $scope.maxSize = 3;
    }
});