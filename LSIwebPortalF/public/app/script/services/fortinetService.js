angular.module('lsi')
    .factory('fortinetService', function($http,config) {

        var service = {};
        var BASE_URL = config.API_URL+'fortinet/';        

        service.getFortinetAuthentication = function(emailId, callback) {
            return $http({
                method: 'post',
                url: BASE_URL + 'getFortinetAuthentication',
                data: {
                    emailId: emailId
                }
            }).success(function(response) {
                callback(response);
            }).error(function(error) {
                console.log('Authentication error', error);
            });
        };
 
        service.getFortinentTree = function(callback) {
            return $http({
                method: 'get',
                url: BASE_URL + 'tree'
            }).success(function(response) {
                callback(response);
            }).error(function(error) {
                console.log('get getFortinentTree  error', error);
            });
        };

        service.getCaptureRate = function(data, callback) {
            return $http({
                method: 'post',
                url: BASE_URL + 'personVisible/get/captureRate',
                data: data
            }).success(function(response) {
                callback(response);
            }).error(function(error) {
                console.log('get getCaptureRate  error', error);
            });
        };
        service.getDwellTime = function(data, callback) {
            return $http({
                method: 'post',
                url: BASE_URL + 'personVisible/get/dwellTime',
                data: data
            }).success(function(response) {
                callback(response);
            }).error(function(error) {
                console.log('get getCaptureRate  error', error);
            });
        };
        service.getNewVsRepeat = function(data, callback) {
            return $http({
                method: 'post',
                url: BASE_URL + 'personVisible/get/newVsRepeat',
                data: data
            }).success(function(response) {
                callback(response);
            }).error(function(error) {
                console.log('get getCaptureRate  error', error);
            });
        };

        service.getFrequency = function(data, recValue, callback) {
            return $http({
                method: 'post',
                url: BASE_URL + 'frequency/getFrequency/'+ recValue,
                data: data
            }).success(function(response) {
                callback(response);
            }).error(function(error) {
                console.log('getFrequency error', error);
            });
        };

        // customer kpi -> dwell time -> Distribution
        service.getDwellTimeDist = function(data, timeValue, optionValue, callback) {
            return $http({
                method: 'post',
                url: BASE_URL + 'positionAggregatedDwellTine/getDistribution/' + timeValue + '/' + optionValue,
                data: data
            }).success(function(response) {
                callback(response);
            }).error(function(error) {
                console.log('get dwell time distribution error', error);
            });
        };
        // customer kpi -> Recency -> Distribution
        service.getRecencyDist = function(data, hours, callback) {
            return $http({
                method: 'post',
                url: BASE_URL + 'recency/getRecency/' + hours,
                data: data
            }).success(function(response) {
                callback(response);
            }).error(function(error) {
                console.log('get Recency distribution error', error);
            });
        };

        service.getRecencyPerArea = function(data, hours, callback) {
            return $http({
                method: 'post',
                url: BASE_URL + 'recency/getRecencyPerArea/' + hours,
                data: data
            }).success(function(response) {
                callback(response);
            }).error(function(error) {
                console.log('get Recency Per Area distribution error', error);
            });
        };

        // customer kpi -> Frequency Distribution
        service.getFrequencyDist = function(data, recValue, callback) {
            return $http({
                method: 'post',
                url: BASE_URL + 'frequency/getFrequency/'+ recValue,
                data: data
            }).success(function(response) {
                callback(response);
            }).error(function(error) {
                console.log('get frequency distribution error', error);
            });
        };

        service.getFrequencyPerArea = function(data, hours, callback) {
            return $http({
                method: 'post',
                url: BASE_URL + 'frequency/getFrequencyPerArea/' + hours,
                data: data
            }).success(function(response) {
                callback(response);
            }).error(function(error) {
                console.log('get frequency Per Area distribution error', error);
            });
        };


        // Real time -> Density heatmap
        service.getDensityHeatmap = function(projectId, callback) {
            return $http({
                method: 'get',
                url: BASE_URL + 'accessPoint/AccessPointsForCustomerProject/' + projectId
            }).success(function(response) {
                callback(response);
            }).error(function(error) {
                console.log('get Density heatmap error', error);
            });
        };

        service.getHeatmapFloorplan = function(planType, floorOrStoreId, callback) {
            return $http({
                method: 'get',
                url: BASE_URL + 'floorplan/getFloorplan/' + planType + '/' + floorOrStoreId
            }).success(function(response) {
                callback(response);
            }).error(function(error) {
                console.log('get Density heatmap Floor plan error', error);
            });
        };
        service.getDensityHeatmapAccessPoint = function(data, callback) {
            return $http({
                method: 'post',
                url: BASE_URL + 'accessPoint/DensityHeatmap',
                data: data
            }).success(function(response) {
                callback(response);
            }).error(function(error) {
                console.log('get Density heatmap error', error);
            });
        };

        // MAP -> cumulative  Dwell time Heatmap
        service.getCumulativeDwellTime = function(data, selectedDate, callback) {
            return $http({
                method: 'post',
                url: BASE_URL + 'accessPoint/CumulativeDwelltimeHeatmap/' + selectedDate,
                data: data
            }).success(function(response) {
                callback(response);
            }).error(function(error) {
                console.log('get Cumulative Dwell time Heatmap error', error);
            });
        };

        //MAP -> Cumulative persons per day Heatmap
        service.getCumulativePersons = function(data, selectedDate, callback) {
            return $http({
                method: 'post',
                url: BASE_URL + 'accessPoint/CumulativePersonsHeatmap/' + selectedDate,
                data: data
            }).success(function(response) {
                callback(response);
            }).error(function(error) {
                console.log('get Cumulative persons per day Heatmap error', error);
            });
        };

        //MAP -> Cumulative traffic per day Heatmap
        service.getCumulativeVisitor = function(data, selectedDate, callback) {
            return $http({
                method: 'post',
                url: BASE_URL + 'accessPoint/CumulativeVisitorHeatmap/' + selectedDate,
                data: data
            }).success(function(response) {
                callback(response);
            }).error(function(error) {
                console.log('get Cumulative traffic per day Heatmap error', error);
            });
        };
        //MAP -> Popularity Heatmaps
        service.getPopularityHotspotKPI = function(data, selectedDate, callback) {
            return $http({
                method: 'post',
                url: BASE_URL + 'accessPoint/PopularityHeatmaps/' + selectedDate,
                data: data
            }).success(function(response) {
                callback(response);
            }).error(function(error) {
                console.log('get Popularity Heatmaps error', error);
            });
        };


        service.getFloorplanImage = function(floorplanImage, floorOrStoreId, callback) {
            return $http({
                method: 'get',
                url: BASE_URL + 'floorplan/getFloorplanImage/' + floorplanImage + '/' + floorOrStoreId
            }).success(function(response) {
                callback(response);
            }).error(function(error) {
                console.log('get Floor plan Image error', error);
            });
        };

        // RealTime.. ->  Realtime tracking and Current Density Heatmap
        service.getAccessPointDetails = function(callback) {
            return $http({
                method: 'get',
                url: BASE_URL + 'accessPoint/accesspointsPullVsPush'
            }).success(function(response) {
                callback(response);
            }).error(function(error) {
                console.log('get access points Pull Vs Push', error);
            });
        };

        // RealTime.. ->  Calibration - get access points for store
        service.getAccessPointStore = function(storeId, callback) {
            return $http({
                method: 'get',
                url: BASE_URL + 'siteSurvey/accessPointsPerStore/' + storeId
            }).success(function(response) {
                callback(response);
            }).error(function(error) {
                console.log('get access points for store', error);
            });
        };
        // RealTime.. ->  Calibration - get access points for floor
        service.getAccessPointFloor = function(floorId, callback) {
            return $http({
                method: 'get',
                url: BASE_URL + 'floor/getAPsPerFloor/' + floorId
            }).success(function(response) {
                callback(response);
            }).error(function(error) {
                console.log('get access points for floor', error);
            });
        };

        // RealTime.. ->  Calibration - get real time values
        service.getRealTime = function(data, callback) {
            return $http({
                method: 'post',
                url: BASE_URL + 'realtime',
                data: data
            }).success(function(response) {
                callback(response);
            }).error(function(error) {
                console.log('get real time values error', error);
            });
        };
        // RealTime.. ->  Calibration - Employee And FixedEquipment details
        service.getEmpFixedEqu = function(callback) {
            return $http({
                method: 'get',
                url: BASE_URL + 'EmployeeAndFixedEquipment/table'
            }).success(function(response) {
                callback(response);
            }).error(function(error) {
                console.log('get Employee And FixedEquipment details', error);
            });
        };
        // RealTime.. ->  Calibration - stdDevAvgRssi details for AP
        service.getStdDevAvgRssi = function(accessPointId, callback) {
            return $http({
                method: 'get',
                url: BASE_URL + 'rssi/stdDevAvgRssi/' + accessPointId +'/2'
            }).success(function(response) {
                callback(response);
            }).error(function(error) {
                console.log('get Employee And FixedEquipment details', error);
            });
        };
        // RealTime.. -> Calibration - update RSSI value in DB
        service.updateRSSIAP = function(data, callback) {
            return $http({
                method: 'put',
                url: BASE_URL + 'accessPoint',
                data:data
            }).success(function(response) {
                callback(response);
            }).error(function(error) {
                console.log('Update RSSI access point error', error);
            });
        };
        // RealTime.. ->  Realtime tracking  - positions
        service.getRTPositions = function(planType, planId, callback) {
            return $http({
                method: 'get',
                url: BASE_URL + 'positions/' + planType +'/' + planId,
            }).success(function(response) {
                callback(response);
            }).error(function(error) {
                console.log('get Employee And FixedEquipment details', error);
            });
        };
        // RealTime.. ->  Realtime tracking accounts For Tracking Map
        service.accountsForTrackingMap = function(data, callback) {
            return $http({
                method: 'post',
                url: BASE_URL + 'socialWifi/accountsForTrackingMap',
                data: data
            }).success(function(response) {
                callback(response);
            }).error(function(error) {
                console.log('get real time accounts For Tracking Map values error', error);
            });
        };
        // RealTime.. ->  Realtime tracking privacy hide details
        service.getPrivacyHide = function(callback) {
            return $http({
                method: 'get',
                url: BASE_URL + 'privacyHide/getPrivacy/'
            }).success(function(response) {
                callback(response);
            }).error(function(error) {
                console.log('get privacy hide details', error);
            });
        };
        
        return service;
    });
