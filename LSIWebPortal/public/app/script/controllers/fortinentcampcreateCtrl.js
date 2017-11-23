/*
This controller uses fortinetCampaignService to manage create, delete and update campaigns from the view
*/
angular.module('lsi').controller('fortinentcampcreateCtrl', function($scope, fortinetCampaignService) {
    // *** Constant values specific to the controller *** //
    $scope.constants = {
        "ALERT_DEL_MSG": "Do you want to delete the selected Campaign? This action cannot be undone and campaign details will be lost.",
        "ALERT_DEL_ALL_MSG": "Do you want to delete all the Campaigns? This action cannot be undone and campaigns details will be lost.",
        "TRIGGER_T1": "Once",
        "TRIGGER_T2": "WiFi logins today",
        "TRIGGER_T4": "First time in Area today",
        "ACTION_SMS": "SMS",
        "ACTION_EMAIL": "Email",
        "ACTION_BOTH": "Email/SMS",
        "DATE_FORMAT": "YYYY-MM-DD",
        "TIME_FORMAT": "HH:mm:ss",
        "TRIGGER_NAMES": {
            "t1": "Once",
            "t3": "WiFi logins today",
            "t2": "First time in Store today",
            "t4": "First time in Area today",
            "t5": "Daily dwell-time per Area exceeded"
        },
        "STATUS_START": "started",
        "STATUS_STOP": "stopped",
        "ACTION_START": "Start",
        "ACTION_STOP": "Stop",
        "DEFAULT_COUPON": "images/message.png",
        "TIME_SPEC": "Specific time",
        "TIME_IMM": "Immediately",
        "MSG_CUSTOM": "Customized message",
        "MSG_FIXED": "Fixed message",
        "MSG_UNSUB": "Click to unsubscribe",
        "OPTS_ALL_ACNTS": "All accounts",
        "OPTS_PRSN_TGRD": "Person that triggered",
        "OPTS_SLCTD_STORES": "Selected Stores",
        "ERROR_TXT": "Error processing data: "
    }
    // *** Scope variables declaration *** //
    $scope.editCamp = {};
    $scope.edit = false;
    $scope.update = false;
    $scope.addCmp = false;
    $scope.dt = new Date();
    $scope.dt.setHours(00);
    $scope.dt.setMinutes(00);
    $scope.mytimepick = $scope.dt;
    $scope.selectedRow = null;
    $scope.deliveryTimeDisable = false;
    $scope.imageUrl = null;
    var selctd_id = null;

    // *** set default values to date and time pickers *** //
    $scope.fortinetNewCmpDates = {
        startDate: moment(),
        endDate: moment().add(7, 'day')
    };


    // ***  Call Get all campaigns service to display *** //
    $scope.getAllCampaigns = function() {
        $scope.newCampaign = {};
        $scope.newCampaign.startDateTime = new Date();
        $scope.newCampaign.actions = $scope.constants.ACTION_SMS;
        $scope.newCampaign.timeDelay = $scope.constants.TIME_SPEC;
        $scope.newCampaign.messageUnsubscribe = $scope.constants.MSG_UNSUB;
        $scope.newCampaign.timeToSend = moment().utc().format($scope.constants.TIME_FORMAT);
        $scope.selectedRow = null;
        $scope.edit = false;
        fortinetCampaignService.getAllCampaigns().then(function(response) {
            if (response.data) {
                angular.forEach(response.data, function(campaign) {
                    if (campaign.couponUrl === null) {
                        campaign.couponUrl = $scope.constants.DEFAULT_COUPON;
                    } else if (campaign.couponUrl) {
                        var arrVals = (campaign.couponUrl).split("/coupon/");
                        arrVals = arrVals[1].split(".");
                        arrVals = arrVals[0].split("coupon")
                        var cpnId = arrVals[1];
                        fortinetCampaignService.getCampaignCoupon(cpnId).then(function(res) {
                            if (res.data) {
                                campaign.couponUrl = "data:image/png;base64," + res.data;
                            }
                        }, function(error) {
                            alert($scope.constants.ERROR_TXT + error.statusText)
                        });
                    }
                    $scope.timezone = moment().utc().tz(campaign.timezone).format('Z');
                    if (campaign.timeToSend) {
                        var tm = moment.utc(campaign.startDateTime + " " + campaign.timeToSend).zone($scope.timezone).format('HH:mm');
                        campaign.timeToSend = tm;
                    }
                    campaign.startDateTime = moment.utc(campaign.startDateTime).zone($scope.timezone).format($scope.constants.DATE_FORMAT);
                    if (campaign.status === $scope.constants.STATUS_START) {
                        campaign.action = $scope.constants.ACTION_STOP;
                    } else if (campaign.status === $scope.constants.STATUS_STOP) {
                        campaign.action = $scope.constants.ACTION_START;
                    }
                })
                $scope.allCampaigns = response.data;
                $scope.sortReverse = false; // set the default sort order
                $scope.pageOptions = [10, 20, 30];
                $scope.viewby = 10;
                $scope.totalItems = $scope.allCampaigns.length;
                $scope.currentPage = 1;
                $scope.itemsPerPage = $scope.viewby;
                $scope.maxSize = 3;
            }
        }, function(error) {
            alert($scope.constants.ERROR_TXT + error.statusText);
        });
    }
    $scope.setItemsPerPage = function(num) {
        $scope.itemsPerPage = num;
        $scope.currentPage = 1; //reset to first paghe
    }
    $scope.getAllCampaigns();
    // *** get campaigns meta data (Areas, store and list info) *** //
    fortinetCampaignService.getCampaignData().then(function(response) {
        if (response.data) {
            $scope.campDetails = response.data;
        }
    }, function(error) {
        alert($scope.constants.ERROR_TXT + error.statusText)
    });
    $scope.setClickedRow = function(index, id) {
        $scope.edit = true;
        $scope.selectedRow = index;
        selctd_id = id;
    };
    // *** Changes campaign status - To start or stop the campaign *** //
    $scope.setStatus = function(id) {
        angular.forEach($scope.allCampaigns, function(campaign) {
            if (id == campaign.id) {
                var cmpId = campaign.id,
                    action = (campaign.status === $scope.constants.STATUS_START) ? $scope.constants.STATUS_STOP : $scope.constants.STATUS_START,
                    trigger = campaign.trigger;
                fortinetCampaignService.setStatusCampaign(action, cmpId, trigger).then(function(response) {
                    campaign.status = action;
                    campaign.action = (action === $scope.constants.STATUS_START) ? $scope.constants.ACTION_STOP : $scope.constants.ACTION_START;
                }, function(error) {
                    alert($scope.constants.ERROR_TXT + error.statusText)
                });
            }
        });
    }
    // *** Removes selected campaign from the list *** //
    $scope.rmvCamp = function() {
        var value = confirm($scope.constants.ALERT_DEL_MSG);
        if (value === true) {
            var id = selctd_id;
            fortinetCampaignService.removeCampaign(id).then(function(response) {
                angular.forEach($scope.allCampaigns, function(cmp) {
                    if (cmp.id == id) {
                        delete cmp;
                        $scope.getAllCampaigns();
                        $scope.selectedRow = null;
                        $scope.edit = false;
                    }
                })
            }, function(error) {
                alert($scope.constants.ERROR_TXT + error.statusText)
            });
        }

    }
    // *** Removes all campaigns *** //
    $scope.rmvAllCmps = function() {
        var value = confirm($scope.constants.ALERT_DEL_ALL_MSG);
        if (value === true) {
            fortinetCampaignService.removeAllCampaigns().then(function(response) {
                $scope.allCampaigns.length = 0;
            }, function(error) {
                alert($scope.constants.ERROR_TXT + error.statusText)
            });
        }
    }
    $scope.newCamp = function() {
        $scope.addCmp = true;
    };
    // Bacl to campaigns list page functionality.
    $scope.goBack = function() {
        $scope.addCmp = false;
        $scope.update = false;
        $scope.getAllCampaigns();
    };
    $scope.availableDateOptions = {
        formatYear: 'yy',
        startingDay: 1
        //maxDate: new Date()
    };
    $scope.availableDatePopup = {
        opened: false
    };
    $scope.OpenAvailableDate = function() {
        $scope.availableDatePopup.opened = !$scope.availableDatePopup.opened;
    };
    $scope.setTimeOpt = function() {
        if ($scope.newCampaign.trigger === $scope.constants.TRIGGER_T2) {
            $scope.newCampaign.timeDelay = $scope.constants.TIME_SPEC;
            $scope.deliveryTimeDisable = true;
            $scope.newCampaign.messConf = $scope.constants.MSG_CUSTOM;
        } else if ($scope.newCampaign.trigger === $scope.constants.TRIGGER_T4) {
            $scope.newCampaign.timeDelay = $scope.constants.TIME_IMM;
            $scope.deliveryTimeDisable = true;
            $scope.newCampaign.messConf = $scope.constants.MSG_FIXED;
        } else {
            $scope.deliveryTimeDisable = false;
        }
    }
    $scope.stepsModel = [];
    $scope.imageUpload = function(element) {
        var reader = new FileReader();
        reader.onload = $scope.imageIsLoaded;
        reader.readAsDataURL(element.files[0]);
        $scope.imageUrl = element.files[0];
    }
    $scope.imageIsLoaded = function(e) {
        $scope.$apply(function() {
            $scope.stepsModel.push(e.target.result);
        });
    }
    // *** Validates and Creates new Campaign *** //
    $scope.saveCampaign = function(d, t) {
        $scope.checkPostParams($scope.newCampaign, function(err, res) {
            if (err) {
                alert(err);
            } else if (res) {
                var campData = $scope.newCampaign;
                var enrichData = {};
                enrichData.timeToSend = moment(t).utc().format($scope.constants.TIME_FORMAT);
                if (campData.trigger === $scope.constants.TRIGGER_T1) {
                    var option = $scope.constants.OPTS_ALL_ACNTS;
                    var listData = $scope.lookupList(campData.recipient, option);
                    enrichData.from = listData.from;
                    enrichData.fromListId = listData.listId;
                    enrichData.startDateTime = $scope.newCampaign.startDateTime.toISOString().slice(0, 10);
                    enrichData.endDateTime = enrichData.startDateTime;
                } else if (campData.trigger === $scope.constants.TRIGGER_T4) {
                    var tgrOpt = $scope.constants.OPTS_ALL_ACNTS,
                        recOpt = $scope.constants.OPTS_PRSN_TGRD;
                    var tgrData = $scope.lookupList(campData.tgrPersons, tgrOpt);
                    enrichData.from = tgrData.from;
                    enrichData.fromListId = tgrData.listId;
                    var recData = $scope.lookupList(campData.recipient, recOpt);
                    enrichData.audienc = recData.from;
                    enrichData.audienceListID = recData.listId;
                    enrichData.areaInfo = campData.areaInfo;
                    enrichData.campaignAreas = $scope.getAreasInfo(campData.areaInfo, campData.aList);
                } else if (campData.trigger === $scope.constants.TRIGGER_T2) {
                    enrichData.areaInfo = campData.store;
                    if (campData.store == $scope.constants.OPTS_SLCTD_STORES) {
                        enrichData.campaignAreas = $scope.getStoreInfo(campData.storeVal);
                    } else enrichData.campaignAreas = null;
                }
                if (campData.trigger === $scope.constants.TRIGGER_T2 || campData.trigger === $scope.constants.TRIGGER_T4) {
                    enrichData.startDateTime = moment(d.startDate).utc().startOf('day').format($scope.constants.DATE_FORMAT);
                    enrichData.endDateTime = moment(d.endDate).utc().startOf('day').format($scope.constants.DATE_FORMAT);
                }
                // *** Prepare POST campaign object *** //
                var postCamp = {
                    "triggerNames": $scope.constants.TRIGGER_NAMES,
                    "name": $scope.newCampaign.name,
                    "timezone": moment.tz.guess(),
                    "startDateTime": enrichData.startDateTime,
                    "timeToSend": enrichData.timeToSend,
                    "from": enrichData.from ? enrichData.from : null,
                    "actions": campData.actions,
                    "audienc": enrichData.audienc ? enrichData.audienc : null,
                    "trigger": campData.trigger,
                    "timeDelay": campData.timeDelay,
                    "campaignAreas": enrichData.campaignAreas ? enrichData.campaignAreas : null,
                    "messageFrom": campData.messageFrom ? campData.messageFrom : null,
                    "messageSubject": campData.messageSubject ? campData.messageSubject : null,
                    "messageUnsubscribe": campData.messageUnsubscribe,
                    "status": $scope.constants.STATUS_START, //constant
                    "audienceListID": enrichData.audienceListID ? enrichData.audienceListID : null,
                    "lastTriggered": new Date().toISOString(),
                    "rules": campData.rules ? campData.rules : null,
                    "messageFromSMS": null, //constant
                    "messageUnsubscribeSMS": campData.messageUnsubscribeSMS,
                    "delay": null,
                    "fromListId": enrichData.fromListId ? enrichData.fromListId : null,
                    "threshold": null,
                    "areaInfo": enrichData.areaInfo ? enrichData.areaInfo : null,
                    "messConf": campData.messConf ? campData.messConf : null,
                    "endDateTime": enrichData.endDateTime
                }
                // *** Call new campaign POST request service ***
                fortinetCampaignService.createCampaign(postCamp).then(function(response) {
                    $scope.addCmp = false;
                    $scope.getAllCampaigns();
                }, function(error) {
                    alert($scope.constants.ERROR_TXT + error.statusText);
                });
            }
        });
    }

    // *** Shows all campaign values for update campaign *** //
    $scope.editCampValues = function() {
        $scope.update = true;
        var id = selctd_id;
        angular.forEach($scope.allCampaigns, function(camp) {
            if (camp.id == id) {
                $scope.editCamp = camp;
            }
        })
        if ($scope.editCamp.timeToSend) {
            var aryVals = $scope.editCamp.timeToSend.split(":");
            $scope.tmVal = new Date();
            $scope.tmVal.setHours(parseInt(aryVals[0]));
            $scope.tmVal.setMinutes(parseInt(aryVals[1]));
        }
        $scope.fortinetNewCmpDates = {
            startDate: $scope.editCamp.startDateTime,
            endDate: $scope.editCamp.endDateTime
        };
        if ($scope.editCamp.trigger === $scope.constants.TRIGGER_T1) {
            $scope.fixName = true;
            $scope.editCamp.recipient = $scope.editCamp.fromListId ? $scope.lookupListId($scope.editCamp.fromListId) : $scope.editCamp.from;
        } else if ($scope.editCamp.trigger === $scope.constants.TRIGGER_T4) {
            $scope.fixName = false;
            $scope.editCamp.tgrPersons = $scope.editCamp.fromListId ? $scope.lookupListId($scope.editCamp.fromListId) : $scope.editCamp.from;
            $scope.editCamp.recipient = $scope.editCamp.audienceListID ? $scope.lookupListId($scope.editCamp.audienceListID) : $scope.constants.OPTS_PRSN_TGRD;
            if ($scope.editCamp.messConf == 'Edit massage') { // Client is validating for 'Edit massage' (spelling error) value
                $scope.editCamp.messConf = $scope.constants.MSG_CUSTOM;
            } else if ($scope.editCamp.messConf == 'Fixed massage') { // Client is validating for 'Fixed massage' value
                $scope.editCamp.messConf = $scope.constants.MSG_FIXED;
            }
        } else if ($scope.editCamp.trigger === $scope.constants.TRIGGER_T2) {
            $scope.fixName = false;
            $scope.editCamp.store = $scope.editCamp.areaInfo;
        }
    }

    // *** Processes and posts update campaign data *** //
    $scope.updateCampaign = function(dt, tme) {
        if (tme) $scope.editCamp.timeToSend = moment(tme).utc().format($scope.constants.TIME_FORMAT);
        if ($scope.editCamp.trigger === $scope.constants.TRIGGER_T4) {
            var tgrOpt = $scope.constants.OPTS_ALL_ACNTS,
                recOpt = $scope.constants.OPTS_PRSN_TGRD;
            var tgrData = $scope.lookupList($scope.editCamp.tgrPersons, tgrOpt);
            $scope.editCamp.from = tgrData.from;
            $scope.editCamp.fromListId = tgrData.listId;
            var recData = $scope.lookupList($scope.editCamp.recipient, recOpt);
            $scope.editCamp.audienc = recData.from;
            $scope.editCamp.audienceListID = recData.listId;
            $scope.editCamp.areaInfo = $scope.editCamp.areaInfo;
            $scope.editCamp.campaignAreas = $scope.getAreasInfo($scope.editCamp.areaInfo, $scope.editCamp.aList);
        } else if ($scope.editCamp.trigger === $scope.constants.TRIGGER_T2) {
            $scope.editCamp.areaInfo = $scope.editCamp.store;
            if ($scope.editCamp.store == $scope.constants.OPTS_SLCTD_STORES) {
                $scope.editCamp.campaignAreas = $scope.getStoreInfo($scope.editCamp.storeVal);
            } else $scope.editCamp.campaignAreas = null;
        }
        if ($scope.editCamp.trigger === $scope.constants.TRIGGER_T2 || $scope.editCamp.trigger === $scope.constants.TRIGGER_T4) {
            $scope.editCamp.startDateTime = moment(dt.startDate).utc().startOf('day').format($scope.constants.DATE_FORMAT);
            $scope.editCamp.endDateTime = moment(dt.endDate).utc().startOf('day').format($scope.constants.DATE_FORMAT);
        }
        // *** Prepare UPDATE campaign object *** //
        var camp = {
            "id": $scope.editCamp.id,
            "triggerNames": $scope.constants.TRIGGER_NAMES,
            "name": $scope.editCamp.name,
            "timezone": $scope.editCamp.timezone,
            "startDateTime": $scope.editCamp.startDateTime,
            "timeToSend": $scope.editCamp.timeToSend,
            "from": $scope.editCamp.from ? $scope.editCamp.from : null,
            "actions": $scope.editCamp.actions,
            "audienc": $scope.editCamp.audienc ? $scope.editCamp.audienc : null,
            "trigger": $scope.editCamp.trigger,
            "timeDelay": $scope.editCamp.timeDelay,
            "campaignAreas": $scope.editCamp.campaignAreas ? $scope.editCamp.campaignAreas : null,
            "messageFrom": $scope.editCamp.messageFrom ? $scope.editCamp.messageFrom : null,
            "messageSubject": $scope.editCamp.messageSubject ? $scope.editCamp.messageSubject : null,
            "messageUnsubscribe": $scope.editCamp.messageUnsubscribe,
            "status": $scope.editCamp.status,
            "audienceListID": $scope.editCamp.audienceListID ? $scope.editCamp.audienceListID : null,
            "lastTriggered": $scope.editCamp.lastTriggered, //new DatenrichDae().toISOString(),
            "rules": $scope.editCamp.rules ? $scope.editCamp.rules : null,
            "messageFromSMS": $scope.editCamp.messageFromSMS, //null, //constant
            "messageUnsubscribeSMS": $scope.editCamp.messageUnsubscribeSMS,
            "delay": $scope.editCamp.delay, //null,
            "fromListId": $scope.editCamp.fromListId ? $scope.editCamp.fromListId : null,
            "threshold": $scope.editCamp.threshold, //null,
            "areaInfo": $scope.editCamp.areaInfo ? $scope.editCamp.areaInfo : null,
            "messConf": $scope.editCamp.messConf ? $scope.editCamp.messConf : null,
            "endDateTime": $scope.editCamp.endDateTime
        }
        // *** Call campaign UPDATE service *** //
        fortinetCampaignService.updateCampaign(camp).then(function(response) {
            $scope.addCmp = false;
            $scope.update = false;
            $scope.getAllCampaigns();
        }, function(error) {
            alert($scope.constants.ERROR_TXT + error.statusText);
        });
    }

    // *** Validates create campaign parameters *** //
    $scope.checkPostParams = function(params, cb) {
        var errMsg = null,
            res = false;
        if (!$scope.isNotNull(params.name)) {
            errMsg = "Please provide Campaign name";
            return cb(errMsg, res);
        }
        angular.forEach($scope.allCampaigns, function(campaign) {
            if (campaign.name == params.name) {
                errMsg = "Campaign name already exists.";
            }
        });
        if (!params.messConf || params.messConf === $scope.constants.MSG_CUSTOM) {
            if ((params.actions === $scope.constants.ACTION_SMS || params.actions === $scope.constants.ACTION_BOTH) && !$scope.isNotNull(params.messageUnsubscribeSMS)) {
                errMsg = "Please provide the message body";
                return cb(errMsg, res);
            }
            if ((params.actions === $scope.constants.ACTION_EMAIL || params.actions === $scope.constants.ACTION_BOTH)) {
                if (!$scope.isNotNull(params.messageFrom)) {
                    errMsg = "Please provide 'From'";
                    return cb(errMsg, res);
                }
                if (params.messageFrom.indexOf("@") == -1 || params.messageFrom.indexOf(".") == -1) {
                    errMsg = "Please provide valid id";
                    return cb(errMsg, res);
                }
                if (!$scope.isNotNull(params.messageSubject)) {
                    errMsg = "Please provide 'Subject'";
                    return cb(errMsg, res);
                }
                if (!$scope.isNotNull($scope.imageUrl)) {
                    errMsg = "Please select a Coupon";
                    return cb(errMsg, res);
                }
            }
        }
        if (params.actions === $scope.constants.ACTION_BOTH && !$scope.isNotNull(params.rules)) {
            errMsg = "Please select preferred sending option";
            return cb(errMsg, res);
        }
        if (params.trigger === $scope.constants.TRIGGER_T2) {
            if (!$scope.isNotNull(params.store)) {
                errMsg = "Please select Store";
                return cb(errMsg, res);
            }
            if (params.store === $scope.constants.OPTS_SLCTD_STORES && !$scope.isNotNull(params.storeVal)) {
                errMsg = "Please select Store value";
                return cb(errMsg, res);
            }
        }
        if (params.trigger === $scope.constants.TRIGGER_T4) {
            if (!$scope.isNotNull(params.areaInfo) || !$scope.isNotNull(params.aList)) {
                errMsg = "Please provide every option that is required";
                return cb(errMsg, res);
            }
        }
        res = true;
        return cb(errMsg, res);
    }

    // *** Check for null or undefined values *** //
    $scope.isNotNull = function(param) {
        if (param === undefined || param === null || param === "" || param === "null") {
            return false;
        } else return true;
    }

    // *** Get list values by name *** //
    $scope.lookupList = function(data, option) {
        var result = {};
        if (data === option) {
            result.from = data;
            result.listId = null;
        } else {
            $scope.campDetails.lists.forEach(function(list) {
                if (list.name === data) {
                    result.from = "List";
                    result.listId = list.id;
                }
            });
        }
        return result;
    }

    // *** Get List name by id *** //
    $scope.lookupListId = function(id) {
        var result;
        $scope.campDetails.lists.forEach(function(list) {
            if (list.id == id) {
                result = list.name;
            }
        });
        return result;
    }

    // *** Get Areas info by area type *** //
    $scope.getAreasInfo = function(category, list) {
        var result = [],
            key;
        if (category === "Area Type") {
            key = "areaType";
            $scope.campDetails[key].forEach(function(element) {
                result.push({
                    "typeId": element.id
                });
            })
        } else if (category === "Area") {
            key = "areas";
            $scope.campDetails[key].forEach(function(element) {
                result.push({
                    "areaId": element.id
                });
            })
        } else if (category === "Area Interest Category") {
            key = "areaCategory";
            $scope.campDetails[key].forEach(function(element) {
                result.push({
                    "categoryId": element.id
                });
            })
        }
        return result;
    }

    // *** Get store info by store name *** //
    $scope.getStoreInfo = function(strVal) {
        var result = [];
        $scope.campDetails['stores'].forEach(function(element) {
            if (element.storeName === strVal) {
                result.push({
                    "storeId": element.id
                });
            }
        })
        return result;
    }
});