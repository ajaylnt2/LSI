angular.module('lsi')
    .factory('fortinetCampaignService', function($http,config) {
        var service = {};
        var BASE_URL = config.API_URL+'fortinet/';

        // Campaign -> Create Campaign tab
        service.getAllCampaigns = function (callback) {
            return $http({
                method: 'put',
                url: BASE_URL + 'CampaignNew/campaignByCustomerProjectId'
            }).success(function (response) {
                callback(response);
            }).error(function (error) {
                console.log('get all Campains error', error);
            });
        };

        // Campaign -> Create campaign tab
        service.getCampaignData = function (callback) {
            return $http({
                method: 'get',
                url: BASE_URL + 'CampaignNew/campaingData'
            }).success(function (response) {
                callback(response);
            }).error(function (error) {
                console.log('get Campain data error', error);
            });
        };

        // Campaign -> Create campaign tab - coupon image
        service.getCampaignCoupon = function (id, callback) {
            return $http({
                method: 'get',
                url: BASE_URL + 'CampaignNew/getCoupon/' + id 
            }).success(function (response) {
                callback(response);
            }).error(function (error) {
                console.log('get Campain coupon error', error);
            });
        };

        // Campaign -> Create Campaign button
        service.createCampaign = function (data, callback) {
            return $http({
                method: 'post',
                url: BASE_URL + 'CampaignNew/createCampaign',
                data: data
            }).success(function (response) {
                callback(response);
            }).error(function (error) {
                console.log('Post Campain error', error);
            });
        };

        // Campaign -> Edit Campaign button
        service.updateCampaign = function (data, callback) {
            return $http({
                method: 'post',
                url: BASE_URL + 'CampaignNew/updateCampaign',
                data: data
            }).success(function (response) {
                callback(response);
            }).error(function (error) {
                console.log('Update Campain error', error);
            });
        };

        // Campaign -> Action
        service.setStatusCampaign = function (action, id, trigger, callback) {
            return $http({
                method: 'post',
                url: BASE_URL + 'CampaignNew/setStatus/' + action + '/' + id  + '/' + trigger
            }).success(function (response) {
                callback(response);
            }).error(function (error) {
                console.log('Set status campaign error', error);
            });
        };

        // Campaign -> Remove Campaign
        service.removeCampaign = function (campaignId, callback) {
            return $http({
                method: 'delete',
                url: BASE_URL + 'CampaignNew/deleteCampaign/' + campaignId
            }).success(function (response) {
                callback(response);
            }).error(function (error) {
                console.log('Delete Campaign error', error);
            });
        };

        // Campaign -> Remove all Campaigns
        service.removeAllCampaigns = function (callback) {
            return $http({
                method: 'delete',
                url: BASE_URL + 'CampaignNew/removeAll'
            }).success(function (response) {
                callback(response);
            }).error(function (error) {
                console.log('Delete Campaign error', error);
            });
        };

        // Campaign -> Result campaign tab
        service.getCampaignResults = function (trigger, callback) {
            return $http({
                method: 'get',
                url: BASE_URL + '/campaignResult/common/' + trigger
            }).success(function (response) {
                callback(response);
            }).error(function (error) {
                console.log('get Campaign results error', error);
            });
        };

         // Campaign -> Result campaign tab -> Execution details
        service.getCampaignExeInfo = function (range, tgr, id, callback) {
            return $http({
                method: 'get',
                url: BASE_URL + 'campaignResult/' + range +'/'+ tgr +'/'+ id
            }).success(function (response) {
                callback(response);
            }).error(function (error) {
                console.log('get Campaign Execution details error', error);
            });
        };

        return service;
    });
