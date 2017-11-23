/*
 This page facilitates in creating and managing Angular related Servces for the Campaigns
 */

//Common service for all campaigns to be created and managed
angular.module('lsi')
    .factory('fortinetCampaignService', function($http, config, $q) {
        var service = {};
        var BASE_URL = config.API_URL + 'fortinet/';

        // Campaign -> Create Campaign tab
        service.getAllCampaigns = function() {
            var deferred = $q.defer();
            return $http({
                method: 'put',
                url: BASE_URL + 'CampaignNew/campaignByCustomerProjectId'
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get all Campaigns error', error);
                deferred.reject(error);
            });
        };

        // Campaign -> Create campaign tab -> campaigns meta data (Areas, store and list info)
        service.getCampaignData = function() {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'CampaignNew/campaingData'
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get Campaign data error', error);
                deferred.reject(error);
            });
        };

        // Campaign -> Create campaign tab - coupon image
        service.getCampaignCoupon = function(id) {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'CampaignNew/getCoupon/' + id
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get Campaign coupon error', error);
                deferred.reject(error);
            });
        };

        // Campaign -> Create Campaign button
        service.createCampaign = function(data) {
            var deferred = $q.defer();
            return $http({
                method: 'post',
                url: BASE_URL + 'CampaignNew/createCampaign',
                data: data
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('Post Campaign error', error);
                deferred.reject(error);
            });
        };

        // Campaign -> Edit Campaign button
        service.updateCampaign = function(data) {
            var deferred = $q.defer();
            return $http({
                method: 'post',
                url: BASE_URL + 'CampaignNew/updateCampaign',
                data: data
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('Update Campaign error', error);
                deferred.reject(error);
            });
        };

        // Campaign -> Action (Start/Stop) buttons
        service.setStatusCampaign = function(action, id, trigger) {
            var deferred = $q.defer();
            return $http({
                method: 'post',
                url: BASE_URL + 'CampaignNew/setStatus/' + action + '/' + id + '/' + trigger
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('Set status campaign error', error);
                deferred.reject(error);
            });
        };

        // Campaign -> Remove Campaign
        service.removeCampaign = function(campaignId) {
            var deferred = $q.defer();
            return $http({
                method: 'delete',
                url: BASE_URL + 'CampaignNew/deleteCampaign/' + campaignId
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('Delete Campaign error', error);
                deferred.reject(error);
            });
        };

        // Campaign -> Remove all Campaigns
        service.removeAllCampaigns = function() {
            var deferred = $q.defer();
            return $http({
                method: 'delete',
                url: BASE_URL + 'CampaignNew/removeAll'
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('Delete all Campaigns error', error);
                deferred.reject(error);
            });
        };

        // Campaign -> Result campaign tab
        service.getCampaignResults = function(trigger) {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + '/campaignResult/common/' + trigger
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get Campaign results error', error);
                deferred.reject(error);
            });
        };

        // Campaign -> Result campaign tab -> Execution details
        service.getCampaignExeInfo = function(range, tgr, id) {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'campaignResult/' + range + '/' + tgr + '/' + id
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get Campaign daily summary error', error);
                deferred.reject(error);
            });
        };

        // Campaign -> Result campaign tab -> Daily summary -> Execution details
        service.getCampaignSummaryDetails = function(range, tgr, id, date) {
            var deferred = $q.defer();
            return $http({
                method: 'get',
                url: BASE_URL + 'campaignResult/' + range + '/' + tgr + '/' + id + '/' + date
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(error) {
                console.log('get Campaign Execution details error', error);
                deferred.reject(error);
            });
        };

        return service;
    });