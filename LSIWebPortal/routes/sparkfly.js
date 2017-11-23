var express = require('express');
var http = require('https');
var configDetails = require('../config');
var router = express.Router();

var authToken = {},
    header = {};


/* To get the prism token from the database as per user's login*/

var sql = require('mssql');
var app = require('../app');


router.post('/getSparkflyAuthentication', function(req, res) {
    var sqlRequest = new sql.Request();
    var userExist = false;
    console.log("app.dbConnectionStatus = " + app.dbConnectionStatus);
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
                header = {
                    'X-Auth-Identity': recordset[attributename].XAuthIdentity,
                    'X-Auth-Key': recordset[attributename].XAuthKey
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

router.get('/auth', function(req, res) {
    console.log("header = " + header);
    var optionsget = {
        host: configDetails.BASEURL_SPARKFLY, // here only the domain name (no http/https !)
        path: '/auth', // the rest of the url with parameters if needed
        method: 'GET', // do GET
        headers: header
    };
    var reqGet = http.request(optionsget, function(res1) {
        if (res1.headers['x-auth-token'] == undefined) {
            res.json({
                status: "error",
                msg: "Authentication Error"
            });
        } else {
            var authKey = {
                authToken: res1.headers['x-auth-token']
            };
            res.json(authKey);
            console.log("check authKey: ", authKey);
        }


    });
    reqGet.end();
    reqGet.on('error', function(e) {
        senderror('Server error', res, e);
    });

});

router.post('/auth', function(req, res) {
    authToken = req.body.authToken;
    if (authToken == '' || authToken === null || authToken === undefined) {
        console.log("error in authentication");
        res.json({
            status: "error",
            msg: "Authentication Error"
        });
    } else {
        console.log("auth done");
        res.json({
            status: "success"
        });
    }


});


router.get('/account_level/:startDate/:endDate', function(req, res) {
    console.log('account authToken : ', authToken);
    if (authToken === undefined) {
        res.json({
            status: "error",
            msg: "Authentication Error"
        });
    } else {
        var requGet = http.request({
                host: configDetails.BASEURL_SPARKFLY,
                path: '/v1.0/reports/account_level.json?from=' + req.params.startDate + '&to=' + req.params.endDate,
                method: 'GET',
                headers: {
                    'X-Auth-Token': authToken,
                    'Content-Type': 'application/json'
                }

            },
            function(response) {
                if (response.statusCode == 200) {
                    var dataQueue = "";
                    response.on("data", function(d) {
                        dataQueue += d;
                    });
                    response.on("end", function() {
                        res.json({
                            "status": "success",
                            "sData": JSON.parse(dataQueue)
                        });
                    });
                }
            }
        );
        requGet.end();
        requGet.on('error', function(e) {
            console.error(e);
            senderror('Server error', res, e);
        });
    }

});

router.get('/impressions/:startDate/:endDate', function(req, res) {
    if (authToken === undefined) {
        res.json({
            status: "error",
            msg: "Authentication Error"
        });
    } else {
        var requGet = http.request({
                host: configDetails.BASEURL_SPARKFLY,
                path: '/v1.0/merchants/0/reports/impressions.json?from=' + req.params.startDate + '&to=' + req.params.endDate,
                method: 'GET',
                headers: {
                    'X-Auth-Token': authToken,
                    'Content-Type': 'application/json'
                }

            },
            function(response) {
                var dataQueue = "";
                response.on("data", function(d) {
                    dataQueue += d;
                });
                response.on("end", function() {
                    if(dataQueue) {
                        res.json(JSON.parse(dataQueue));
                    }
                });
            }
        );
        requGet.end();
        requGet.on('error', function(e) {
            senderror('Server error', res, e);
        });
    }
});

router.get('/conversions/:startDate/:endDate', function(req, res) {
    if (authToken === undefined) {
        res.json({
            status: "error",
            msg: "Authentication Error"
        });
    } else {
        var requGet = http.request({
                host: configDetails.BASEURL_SPARKFLY,
                path: '/v1.0/merchants/0/reports/conversions.json?from=' + req.params.startDate + '&to=' + req.params.endDate,
                method: 'GET',
                headers: {
                    'X-Auth-Token': authToken,
                    'Content-Type': 'application/json'
                }

            },
            function(response) {
                var dataQueue = "";
                response.on("data", function(d) {
                    dataQueue += d;
                });
                response.on("end", function() {
                    console.log(JSON.parse(dataQueue));
                    res.json(JSON.parse(dataQueue));
                });
            }
        );
        requGet.end();
        requGet.on('error', function(e) {
            senderror('Server error', res, e);
        });
    }
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
module.exports = router;