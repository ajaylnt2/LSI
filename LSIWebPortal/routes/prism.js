var express = require('express');
var request = require('request');
var configDetails = require('../config');
var router = express.Router();
// var headersAuth = configDetails.prismToken;
var headersAuth = {};

/* To get the prism token from the database as per user's login*/

var sql = require('mssql');
var app = require('../app');


router.post('/generateToken', function(req, res) {
    var sqlRequest = new sql.Request();
    var userExist = false;
    console.log(app.dbConnectionStatus);
    sqlRequest.query('select * from userAuthenticationTable', function(err, recordset) {
        //console.log('recordset : ' , recordset);
        if (err) {
            res.status(400).json({
                "status": "error",
                "msg": "username and password is not maching"
            });
        }
        for (var attributename in recordset) {
            if (recordset[attributename].EmailId == req.body.emailId) {
                userExist = true;
                headersAuth = {
                    'Authorization': recordset[attributename].AuthorizationToken
                };
            }
        }
        if (userExist) {
            res.send({
                "status": "success",
                "msg": "Authentication is done"
            });
        } else res.send({
            "status": "error",
            "msg": "App Token is not matched"
        });

    });

});


/* To get the prism token from the database as per user's login*/


router.get('/accounts/', function(req, res) {
    request({
        url: configDetails.BASEURL_PRISM + 'accounts/',
        headers: headersAuth
    }, function(error, response, body) {
        if (error || !response) {
            senderror('Server error', res, error);
        }
        else if (!error && response.statusCode == 200 && body) {
            res.json(JSON.parse(body));
        } else {
            send404error('Internal address not found', res, response.statusCode);
        }
    });

});

router.get('/accounts/:accountId/sites', function(req, res) {
    request({
        url: configDetails.BASEURL_PRISM + 'accounts/' + req.params.accountId + '/sites',
        headers: headersAuth
    }, function(error, response, body) {
        if (error || !response) {
            senderror('Server error', res, error);
        }
        else if (!error && response.statusCode == 200 && body) {
            /*var data = JSON.parse(body);
            data.push({"status":"success"});*/
            res.json({
                "status": "success",
                "data": JSON.parse(body)
            });
        } else {
            send404error('Internal address not found', res, response.statusCode);
        }
    });

});

router.get('/accounts/:accountId/sites/:siteId', function(req, res) {
    request({
        url: configDetails.BASEURL_PRISM + 'accounts/' + req.params.accountId + '/sites/' + req.params.siteId + '',
        headers: headersAuth
    }, function(error, response, body) {
        if (error || !response) {
            senderror('Server error', res, error);
        }
        else if (!error && response.statusCode == 200 && body) {
            res.json(JSON.parse(body));
        } else {
            send404error('Internal address not found', res, response);
        }
    });
});

// to get camera detials for given account id
router.get('/accounts/:accountId/cameras', function(req, res) {
    request({
        url: configDetails.BASEURL_PRISM + 'accounts/' + req.params.accountId + '/cameras',
        headers: headersAuth
    }, function(error, response, body) {
        if (error || !response) {
            senderror('Server error', res, error);
        }
        else if (!error && response.statusCode == 200 && body) {
            res.json(JSON.parse(body));
        } else {
            send404error('Internal address not found', res, response);
        }
    });

});

router.get('/accounts/:accountId/zones', function(req, res) {
    request({
        url: configDetails.BASEURL_PRISM + 'accounts/' + req.params.accountId + '/zones',
        headers: headersAuth
    }, function(error, response, body) {
        if (error || !response) {
            senderror('Server error', res, error);
        }
        else if (!error && response.statusCode == 200 && body) {
            res.json(JSON.parse(body));
        } else {
            send404error('Internal address not found', res, response);
        }
    });
});

router.get('/accounts/:accountId/zones/:zoneId', function(req, res) {
    request({
        url: configDetails.BASEURL_PRISM + 'accounts/' + req.params.accountId + '/zones/' + req.params.zoneId + '',
        headers: headersAuth
    }, function(error, response, body) {
        if (error || !response) {
            senderror('Server error', res, error);
        }
        else if (!error && response.statusCode == 200 && body) {
            res.json(JSON.parse(body));
        } else {
            send404error('Internal address not found', res, response);
        }
    });
});

router.get('/analytics/zones/:zoneId/siteId/:siteId/metricChange/:metricChange/metricCount/:metricCount/bussHrs/:bussHrs/start/:start/stop/:stop', function(req, res) {

    request({ //matric = count period=miasdas bussHrs= true
        url: configDetails.BASEURL_PRISM + 'data/?zone_id=' + req.params.zoneId + '&site_id=' + req.params.siteId + '&metric=' + req.params.metricChange + '&metric=' + req.params.metricCount + '&business_hours_only=' + req.params.bussHrs + '&start=' + req.params.start + '&stop=' + req.params.stop + '',
        headers: headersAuth
    }, function(error, response, body) {
        if (error || !response) {
            senderror('Server error', res, error);
        }
        else if (!error && response.statusCode == 200 && body) {
            res.json(JSON.parse(body));
        } else {
            send404error('Internal address not found', res, response);
        }
    });
});


router.get('/analytics/zones/:zoneId/siteId/:siteId/metricChange/:metricChange/metricCount/:metricCount/period/:period/bussHrs/:bussHrs/start/:start/stop/:stop', function(req, res) {

    request({ //matric = count period=miasdas bussHrs= true
        url: configDetails.BASEURL_PRISM + 'data/?zone_id=' + req.params.zoneId + '&site_id=' + req.params.siteId + '&metric=' + req.params.metricChange + '&metric=' + req.params.metricCount + '&period=' + req.params.period + '&business_hours_only=' + req.params.bussHrs + '&start=' + req.params.start + '&stop=' + req.params.stop + '',
        headers: headersAuth
    }, function(error, response, body) {
        if (error || !response) {
            senderror('Server error', res, error);
        }
        else if (!error && response.statusCode == 200 && body) {
            res.json(JSON.parse(body));
        } else {
            send404error('Internal address not found', res, response);
        }
    });
});


//get Zone Count and change values
router.get('/data/bussHrs/:bussHrs/metricChange/:metricChange/metricCount/:metricCount/siteId/:siteId/start/:start/stop/:stop/zones/:zoneId', function(req, res) {

    request({
        url: configDetails.BASEURL_PRISM + 'data/?business_hours_only=' + req.params.bussHrs + '&metric=' + req.params.metricChange + '&metric=' + req.params.metricCount + '&site_id=' + req.params.siteId + '&start=' + req.params.start + '&stop=' + req.params.stop + '&zone_id=' + req.params.zoneId,
        headers: headersAuth
    }, function(error, response, body) {
        if (error || !response) {
            senderror('Server error', res, error);
        }
        else if (!error && response.statusCode == 200 && body) {
            res.json(JSON.parse(body));
        } else {
            send404error('Internal address not found', res, response);
        }
    });
});

//get Zone Count values for day and hours
router.get('/data/byTime/bussHrs/:bussHrs/metricCount/:metricCount/metricTypical/:metricTypical/period/:periodValue/siteId/:siteId/start/:start/stop/:stop/zones/:zoneId', function(req, res) {

    request({
        url: configDetails.BASEURL_PRISM + 'data/by-time/?business_hours_only=' + req.params.bussHrs + '&metric=' + req.params.metricCount + '&metric=' + req.params.metricTypical + '&period=' + req.params.periodValue + '&site_id=' + req.params.siteId + '&start=' + req.params.start + '&stop=' + req.params.stop + '&zone_id=' + req.params.zoneId,
        headers: headersAuth
    }, function(error, response, body) {
        if (error || !response) {
            senderror('Server error', res, error);
        }
        else if (!error && response.statusCode == 200 && body) {
            res.json(JSON.parse(body));
        } else {
            send404error('Internal address not found', res, response);
        }
    });
});



//Visual Insights

router.get('/accounts/:accountId/insight-configurations', function(req, res) {

    request({ //matric = count period=miasdas bussHrs= true
        url: configDetails.BASEURL_PRISM + 'accounts/' + req.params.accountId + '/insight-configurations/',
        headers: headersAuth
    }, function(error, response, body) {
        if (error || !response) {
            senderror('Server error', res, error);
        }
        else if (!error && body) {
            res.json(JSON.parse(body));
        } else {
            send404error('Internal address not found', res, response);
        }
    });
});

router.get('/accounts/:accountId/insight-configurations/:insightConfigId/insights/pages/:pageNo', function(req, res) {

    request({ //matric = count period=miasdas bussHrs= true
        url: configDetails.BASEURL_PRISM + 'accounts/' + req.params.accountId + '/insight-configurations/' + req.params.insightConfigId + '/insights/?page=' + req.params.pageNo,
        headers: headersAuth
    }, function(error, response, body) {
        if (error || !response) {
            senderror('Server error', res, error);
        }
        else if (!error && body) {
            res.json(JSON.parse(body));
        } else {
            send404error('Internal address not found', res, response);
        }
    });
});



/* This is common function to send the error*/
function senderror(msg, res, error) {
    res.setHeader('Content-Type', 'application/json');
    res.status(500);
    res.send(JSON.stringify({
        status: 'failure',
        message: msg,
        error: error
    }, null, 3));
}
// If prism client url will get change then will get this error message
function send404error(msg, res, statusCode) {
    res.setHeader('Content-Type', 'application/json');
    //res.status(statusCode);
    res.send(JSON.stringify({
        status: 'failure',
        message: msg
    }, null, 3));
}

module.exports = router;