var express = require('express');
var request = require('request');
var configDetails = require('../config');
var router = express.Router(); 

// var auth = {'user': configDetails.FORT_USERNAME,'pass': configDetails.FORT_PWD };
var auth = {};

/* To get the prism token from the database as per user's login*/

var sql = require('mssql');
var app = require('../app');


router.post('/getFortinetAuthentication',function(req,res){
  var sqlRequest = new sql.Request();
  var userExist = false;
  sqlRequest.query('select * from userAuthenticationTable', function (err, recordset) {
    if (err){
      res.status(400).json({"status":"error","msg":"username and password is not maching"});
    } 
    for(var attributename in recordset){      
      if(recordset[attributename].EmailId == req.body.emailId){
        userExist = true;
        auth ={'user':recordset[attributename].WifiUserName,'pass':recordset[attributename].WifiPassword} ;
      }
    }
    if(userExist){
        res.send({"status":"success","msg":"Authentication is done"});
    } 
    else res.send({"status":"error","msg":"App Token is not matched"});
      
  });

});
/* To get the prism token from the database as per user's login*/

// common 

router.get('/tree',function(req,res){
  request({
      url: configDetails.BASEURL_FORTINET+'tree',
      proxy:configDetails.PROXY,
      method: 'get',
      auth: auth,
    },function(error,response,body){
      if(error || !response ){
        senderror('Server error', res , error);
      }
      else if(!error && response.statusCode == 200){
        res.send({"status":"success","data":JSON.parse(body)});

      }else{
        send404error('Server error',res);
      }

    });
});

router.get('/user/self',function(req,res){
  request({
      url: configDetails.BASEURL_FORTINET+'user/self',
      proxy:configDetails.PROXY,
      method: 'get',
      auth: auth,
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});

//dashboard

router.get('/customerProject/dwelltimeThresholds',function(req,res){
  request({
      url: configDetails.BASEURL_FORTINET+'customerProject/dwelltimeThresholds',
      proxy:configDetails.PROXY,
      method: 'get',
      auth: auth,
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});

router.get('/customerProject/getCustomerProjectType',function(req,res){
  request({
      url: configDetails.BASEURL_FORTINET+'customerProject/getCustomerProjectType',
      proxy:configDetails.PROXY,
      method: 'get',
      auth: auth,
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});


router.post('/personVisible/get/captureRate',function(req,res){
  request({
      url: configDetails.BASEURL_FORTINET+'personVisible/get/captureRate',
      proxy:configDetails.PROXY,
      method: 'post',
      auth: auth,
      json : req.body
    },function(error,response,body){
     if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});

router.post('/personVisible/get/dwellTime',function(req,res){
  request({
      url: configDetails.BASEURL_FORTINET+'personVisible/get/dwellTime',
      proxy:configDetails.PROXY,
      method: 'post',
      auth: auth,
      json : req.body
    },function(error,response,body){
     if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});

router.post('/personVisible/get/newVsRepeat',function(req,res){
  request({
      url: configDetails.BASEURL_FORTINET+'personVisible/get/newVsRepeat',
      proxy:configDetails.PROXY,
      method: 'post',
      auth: auth,
      json : req.body
    },function(error,response,body){
     if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});

router.post('/frequency/getFrequency/:recValue',function(req,res){
  
  request({
      url: configDetails.BASEURL_FORTINET+'frequency/getFrequency/'+req.params.recValue,
      proxy:configDetails.PROXY,
      method: 'post',
      auth: auth,
      json : req.body     
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});

// customer kpi -> dwell time -> Distribution


router.post('/positionAggregatedDwellTine/getDistribution/:timeValue/:optionValue',function(req,res){
  
  request({
      url: configDetails.BASEURL_FORTINET+'positionAggregatedDwellTine/getDistribution/'+req.params.timeValue+'/'+req.params.optionValue,
      proxy:configDetails.PROXY,
      method: 'post',
      auth: auth,
      json : req.body
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});

// customer kpi -> dwell time -> Trend

router.post('/positionAggregatedDwellTine/get',function(req,res){
 
  request({
      url: configDetails.BASEURL_FORTINET+'positionAggregatedDwellTine/get',
      proxy:configDetails.PROXY,
      method: 'post',
      auth: auth,
      json : req.body
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});


// customer kpi -> Recency -> distribution 

router.post('/recency/getRecency/:hours',function(req,res){
 
  request({
      url: configDetails.BASEURL_FORTINET+'recency/getRecency/'+req.params.hours,
      proxy:configDetails.PROXY,
      method: 'post',
      auth: auth,
      json : req.body
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});

router.post('/recency/getRecencyPerArea/:hours',function(req,res){
  
  request({
      url: configDetails.BASEURL_FORTINET+'recency/getRecencyPerArea/'+req.params.hours,
      proxy:configDetails.PROXY,
      method: 'post',
      auth: auth,
      json : req.body
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});

//customer kpi -> Recency -> trend


router.post('/recency/getRecencyOverTimePerArea/24',function(req,res){
  
  request({
      url: configDetails.BASEURL_FORTINET+'recency/getRecencyOverTimePerArea/24',
      proxy:configDetails.PROXY,
      method: 'post',
      auth: auth,
      json : req.body
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});


router.post('/recency/getRecencyOverTime/',function(req,res){

  request({
      url: configDetails.BASEURL_FORTINET+'recency/getRecencyOverTime/',
      proxy:configDetails.PROXY,
      method: 'post',
      auth: auth,
      json : req.body
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});

//customer kpi -> Recency -> Lost customers

router.post('/recency/getLost/',function(req,res){

  request({
      url: configDetails.BASEURL_FORTINET+'recency/getLost/',
      proxy:configDetails.PROXY,
      method: 'post',
      auth: auth,
      json : req.body
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});
// customer kpi -> Frequency distribution

router.post('/frequency/getFrequencyPerArea/:hours',function(req,res){

  request({
      url: configDetails.BASEURL_FORTINET+'frequency/getFrequencyPerArea/'+req.params.hours,
      proxy:configDetails.PROXY,
      method: 'post',
      auth: auth,
      json : req.body
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});

// RealTime.. -> Calibration

router.get('/privacyHide/getPrivacy',function(req,res){
  
  request({
      url: configDetails.BASEURL_FORTINET+'privacyHide/getPrivacy',
      proxy:configDetails.PROXY,
      method: 'get',
      auth: auth
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});

router.get('/area/areaType/listAreaType',function(req,res){
  
  request({
      url: configDetails.BASEURL_FORTINET+'area/areaType/listAreaType',
      proxy:configDetails.PROXY,
      method: 'get',
      auth: auth
    },function(error,response,body){
     if(error || !response){
        senderror('Server error', res , error);
      } else if(!error &&  response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});

router.get('/area/areaCategory/list',function(req,res){
  
  request({
      url: configDetails.BASEURL_FORTINET+'area/areaCategory/list',
      proxy:configDetails.PROXY,
      method: 'get',
      auth: auth
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});

router.get('/siteSurvey/accessPointsPerStore/:storeId',function(req,res){  
  request({
      url: configDetails.BASEURL_FORTINET+'siteSurvey/accessPointsPerStore/' + req.params.storeId,
      proxy:configDetails.PROXY,
      method: 'get',
      auth: auth
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});

router.post('/realtime',function(req,res){
   request({
      url: configDetails.BASEURL_FORTINET+'realtime',
      proxy:configDetails.PROXY,
      method: 'post',
      auth: auth,
      json: req.body
   },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
   });
});

router.post('/socialWifi/accountsForTrackingMap',function(req,res){
   request({
      url: configDetails.BASEURL_FORTINET+'socialWifi/accountsForTrackingMap',
      proxy:configDetails.PROXY,
      method: 'post',
      auth: auth,
      json: req.body
   },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
   });
});

router.get('/rssi/stdDevAvgRssi/:accessPointId/2',function(req,res){

  request({
      url: configDetails.BASEURL_FORTINET+'rssi/stdDevAvgRssi/' + req.params.accessPointId +'/2',
      proxy:configDetails.PROXY,
      method: 'get',
      auth: auth
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});
router.get('/EmployeeAndFixedEquipment/table',function(req,res){  
  request({
      url: configDetails.BASEURL_FORTINET+'EmployeeAndFixedEquipment/table',
      proxy:configDetails.PROXY,
      method: 'get',
      auth: auth,
      headers: {
        'Accept' : 'application/json'
      }
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});




// RealTime.. ->  Realtime tracking 

/*Location map tab*/
router.get('/siteSurvey/accessPointsPerStore/:storeId',function(req,res){

  request({
      url: configDetails.BASEURL_FORTINET+'siteSurvey/accessPointsPerStore/' + req.params.storeId,
      proxy:configDetails.PROXY,
      method: 'get',
      auth: auth
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});
/*density heatmap tab*/
router.get('/position/get/:storeId',function(req,res){
 
  request({
      url: configDetails.BASEURL_FORTINET_RealtimeDensityHeatMap+'position/get/' + req.params.storeId,
      proxy:configDetails.PROXY,
      method: 'get'
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});

/*Location map tab*/
router.get('/floor/getAPsPerFloor/:floorId',function(req,res){
 
  request({
      url: configDetails.BASEURL_FORTINET+'floor/getAPsPerFloor/' + req.params.floorId,
      proxy:configDetails.PROXY,
      method: 'get',
      auth: auth
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});

/*density heatmap tab*/
router.get('/floorPosition/get/:floorId',function(req,res){
 
  request({
      url: configDetails.BASEURL_FORTINET_RealtimeDensityHeatMap+'floorPosition/get/' + req.params.floorId,
      proxy:PROXY,
      method: 'get'
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});


router.get('/floorplan/getFloorplan/:planType/:floorOrStoreId',function(req,res){

  request({
      url: configDetails.BASEURL_FORTINET+'floorplan/getFloorplan/'+req.params.planType+'/' + req.params.floorOrStoreId,
      proxy:configDetails.PROXY,
      method: 'get',
      auth: auth
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});


// RealTime.. ->  Realtime tracking and Current Density Heatmap


router.get('/accessPoint/accesspointsPullVsPush',function(req,res){
 
  request({
      url: configDetails.BASEURL_FORTINET+'accessPoint/accesspointsPullVsPush',
      proxy:configDetails.PROXY,
      method: 'get',
      auth: auth
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});

router.get('/accessPoint/AccessPointsForCustomerProject/:projectId',function(req,res){
  
  request({
      url: configDetails.BASEURL_FORTINET+'accessPoint/AccessPointsForCustomerProject/'+ req.params.projectId,
      proxy:configDetails.PROXY,
      method: 'get',
      auth: auth
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error &&  response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});

router.post('/accessPoint/DensityHeatmap',function(req,res){
  
  request({
      url: configDetails.BASEURL_FORTINET+'accessPoint/DensityHeatmap',
      proxy:configDetails.PROXY,
      method: 'post',
      auth: auth,
      json: req.body
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error &&  response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});
router.get('/floorplan/getFloorplanImage/:floorplanImage/:floorOrStoreId',function(req,res){
  request({
      url: configDetails.BASEURL_FORTINET+'floorplan/getFloorplanImage/'+ req.params.floorplanImage +'/'+ req.params.floorOrStoreId,
      proxy:configDetails.PROXY,
      method: 'get',
      auth: auth,
      encoding: null
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        body = new Buffer(body, 'binary').toString('base64');
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});

// RealTime.. ->  Realtime tracking  - positions
router.get('/positions/:planType/:planId',function(req,res){  
  request({
      url: configDetails.BASEURL_FORTINET+'positions/'+ req.params.planType +'/' + req.params.planId,
      proxy:configDetails.PROXY,
      method: 'get',
      auth: auth
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error &&  response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});


//MAP -> cumulative  Dwell time Heatmap

router.post('/accessPoint/CumulativeDwelltimeHeatmap/:date',function(req,res){  
  request({
      url: configDetails.BASEURL_FORTINET+'accessPoint/CumulativeDwelltimeHeatmap/' + req.params.date,
      proxy:configDetails.PROXY,
      method: 'post',
      auth: auth,
      json: req.body
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});

//MAP -> Cumulative persons per day
router.post('/accessPoint/CumulativePersonsHeatmap/:date',function(req,res){  
  request({
      url: configDetails.BASEURL_FORTINET+'accessPoint/CumulativePersonsHeatmap/' + req.params.date,
      proxy:configDetails.PROXY,
      method: 'post',
      auth: auth,
      json: req.body
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});

//MAP -> Cumulative traffic per day
router.post('/accessPoint/CumulativeVisitorHeatmap/:date',function(req,res){  
  request({
      url: configDetails.BASEURL_FORTINET+'accessPoint/CumulativeVisitorHeatmap/' + req.params.date,
      proxy:configDetails.PROXY,
      method: 'post',
      auth: auth,
      json: req.body
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});

//MAP -> Popularity Heatmaps
router.post('/accessPoint/PopularityHeatmaps/:date',function(req,res){  
  request({
      url: configDetails.BASEURL_FORTINET+'accessPoint/PopularityHeatmaps/' + req.params.date,
      proxy:configDetails.PROXY,
      method: 'post',
      auth: auth,
      json: req.body
    },function(error,response,body){
      if(error || !response){
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200){
        res.send(body);        
      }else{
        send404error('Server error',res);
      }
    });
});

router.put('/accessPoint', function(req,res) {
  request({
      url: configDetails.BASEURL_FORTINET + 'accessPoint',
      proxy:configDetails.PROXY,
      method: 'put',
      auth: auth,
      json: req.body
    }, function(error,response,body) {
      if(error || !response) {
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200) {
        res.send(body);
      } else {
        send404error('Server error',res);
      }
    });
}); 

/**
  * Campaign APIs
  */

// To retrieve all campaigns
router.put('/CampaignNew/campaignByCustomerProjectId', function(req,res) {
  request({
      url: configDetails.BASEURL_FORTINET + 'CampaignNew/campaignByCustomerProjectId',
      proxy:configDetails.PROXY,
      method: 'put',
      auth: auth
    }, function(error,response,body) {
      if(error || !response) {
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200) {
        res.send(body);        
      } else {
        send404error('Server error',res);
      }
    });
});

//To get campaign data
router.get('/CampaignNew/campaingData', function(req,res) {
  request({
      url: configDetails.BASEURL_FORTINET + 'CampaignNew/campaingData',
      proxy:configDetails.PROXY,
      method: 'get',
      auth: auth
    }, function(error,response,body) {
      if(error || !response) {
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200) {
        res.send(body);        
      } else {
        send404error('Server error',res);
      }
    });
});

//To get campaign coupon
router.get('/CampaignNew/getCoupon/:id', function(req,res) {
  request({
      url: configDetails.BASEURL_FORTINET + 'CampaignNew/getCoupon/' + req.params.id,
      proxy:configDetails.PROXY,
      method: 'get',
      auth: auth,
      encoding: null
    }, function(error,response,body) {
      if(error || !response) {
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200) {
        body = new Buffer(body, 'binary').toString('base64');
        res.send(body);        
      } else {
        send404error('Server error',res);
      }
    });
});

// To create a campaign
router.post('/CampaignNew/createCampaign', function(req,res) {
  request({
      url: configDetails.BASEURL_FORTINET + 'CampaignNew/createCampaign',
      proxy:configDetails.PROXY,
      method: 'post',
      auth: auth,
      json: req.body
    }, function(error,response,body) {
      if(error || !response) {
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200) {
        res.send(body);        
      } else {
        send404error('Server error',res);
      }
    });
});

// To update a campaign
router.post('/CampaignNew/updateCampaign/', function(req,res) {
  request({
      url: configDetails.BASEURL_FORTINET + 'CampaignNew/updateCampaign/',
      proxy:configDetails.PROXY,
      method: 'post',
      auth: auth,
      headers : {
         'Accept': 'text/plain, */*'
      },
      json: req.body
    }, function(error,response,body) {
      if(error || !response) {
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200) {
        res.send(body);        
      } else {
        send404error('Server error',res);
      }
    });
});

//To start or stop campaign
router.post('/CampaignNew/setStatus/:action/:id/:trigger', function(req,res) {
  request({
      url: configDetails.BASEURL_FORTINET + 'CampaignNew/setStatus/'+req.params.action+'/'+req.params.id+'/'+req.params.trigger,
      proxy:configDetails.PROXY,
      method: 'post',
      auth: auth
    }, function(error,response,body) {
      if(error || !response) {
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200) {
        res.send(body);        
      } else {
        send404error('Server error',res);
      }
    });
});

// To delete a campaign
router.delete('/CampaignNew/deleteCampaign/:id', function(req,res) {
  request({
      url: configDetails.BASEURL_FORTINET + 'CampaignNew/deleteCampaign/' + req.params.id,
      proxy:configDetails.PROXY,
      method: 'delete',
      auth: auth
    }, function(error,response,body) {
      if(error || !response) {
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200) {
        res.send({"status" : "200 OK"});        
      } else {
        send404error('Server error',res);
      }
    });
});

// To remove all campaigns
router.delete('/CampaignNew/removeAll', function(req,res) {
  request({
      url: configDetails.BASEURL_FORTINET + 'CampaignNew/removeAll/',
      proxy:configDetails.PROXY,
      method: 'delete',
      auth: auth
    }, function(error,response,body) {
      if(error || !response) {
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200) {
        res.send({"status" : "200 OK"});        
      } else {
        send404error('Server error',res);
      }
    });
});

// To get campaign results data
router.get('/campaignResult/common/:trigger', function(req,res) {
  request({
      url: configDetails.BASEURL_FORTINET + 'campaignResult/common/'+ req.params.trigger,
      proxy:configDetails.PROXY,
      method: 'get',
      auth: auth
    }, function(error,response,body) {
      if(error || !response) {
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200) {
        res.send(body);        
      } else {
        send404error('Server error',res);
      }
    });
});

// To get campaign results - execution details
router.get('/campaignResult/:range/:tgr/:id', function(req,res) {
  request({
      url: configDetails.BASEURL_FORTINET + 'campaignResult/' + req.params.range +'/'+ req.params.tgr+'/'+ req.params.id,
      proxy:configDetails.PROXY,
      method: 'get',
      auth: auth
    }, function(error,response,body) {
      if(error || !response) {
        senderror('Server error', res , error);
      } else if(!error && response.statusCode == 200) {
        res.send(body);
      } else {
        send404error('Server error',res);
      }
    });
});

/* This is common function to send the error*/
function senderror(msg, res ,error) {
  console.log("in senderror")
  res.setHeader('Content-Type', 'application/json');
  res.status(500);
  res.send(JSON.stringify({ status: 'failure', message : msg ,error : error}, null, 3));
}
// If forinet client url will get change then will get this error message
function send404error(msg,res){
  console.log("in send404error");
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ status: 'failure', message : msg}));
}

module.exports = router;