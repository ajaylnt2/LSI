var express = require('express');
var router = express.Router(); 
var sql = require('mssql');
var configDetails = require('../config');


// To login
router.post('/login', function (req, res) {
        // create Request object
        var request = new sql.Request();
        var userExist = false;
        // query to the database and get the records
        request.query('select * from userAuthenticationTable', function (err, recordset) {
            
            if (err){
                res.status(400).json({"status":"error","msg":"username and password is not maching"});
            } 
          
            var data = recordset, role='',EmailId='',UserId='',UserName='',CStoreAnalytics='',CameraAnalytics='',WifiAnalytics='';
            for(var attributename in data){
                
                if(data[attributename].EmailId == req.body.emailId && data[attributename].Password == req.body.password){
                  console.log(data[attributename].EmailId ," login @ " ,new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''));
                    userExist = true;
                    role = data[attributename].Role;
                    EmailId = data[attributename].EmailId;
                    UserId = data[attributename].UserId;
                    UserName = data[attributename].UserName;
                    CStoreAnalytics = data[attributename].CStoreAnalytics;
                    CameraAnalytics = data[attributename].CameraAnalytics;
                    WifiAnalytics = data[attributename].WifiAnalytics;
                }
            }
            if(userExist){
                res.send({"status":"success","EmailId":EmailId,"UserName":UserName,"role":role,"UserId":UserId,"CStoreAnalytics":CStoreAnalytics,"CameraAnalytics":CameraAnalytics,"WifiAnalytics":WifiAnalytics});
            } 
            else res.send({"status":"error"});
            
    });
});


/* To get all users data */
router.get('/getAllUsers', function (req,res) {
    var request = new sql.Request();
    request.query("select * from userAuthenticationTable", function (err, recordset) {
        res.send(recordset);
    });
});

/* To get Single users data with User id*/
router.post('/getAUser', function (req,res) {
    var request = new sql.Request();
    request.query("select * from userAuthenticationTable where UserId = '"+req.body.UserId+"'", function (err, recordset) {
        res.send(recordset);
    });
});


// this method is use to add differnet users in to userAuthenticationTable
router.post('/createUser', function (req, res) {

    var transaction = new sql.Transaction();
    transaction.begin().then(function () {
        var request = new sql.Request(transaction);
        request.query("Insert into userAuthenticationTable (UserName,EmailId,Role,Password,CStoreAnalytics,CameraAnalytics,WifiAnalytics,XAuthIdentity,XAuthKey,AuthorizationToken,WifiUserName,WifiPassword) values ('"+req.body.UserName+"','"+req.body.EmailId+"','"+req.body.Role+"','"+req.body.Password+"','"+req.body.CStoreAnalytics+"','"+req.body.CameraAnalytics+"','"+req.body.WifiAnalytics+"','"+req.body.XAuthIdentity+"','"+req.body.XAuthKey+"','"+req.body.AuthorizationToken+"','"+req.body.WifiUserName+"','"+req.body.WifiPassword+"')")    
        .then(function () {
                transaction.commit().then(function (recordSet) {
                    console.log(recordSet);
                    res.send({"status":"success","message":"User added successfully"});
                }).catch(function (err) {
                    console.log("Error in Transaction Commit " + err);                   
                });
            }).catch(function (err) {
                res.send({"status":"error","message":"User is already exist !!!"});
                console.log("Error in Transaction Begin" + err);
            });
             
        }).catch(function (err) {
           console.log("error : ",err);
        });
 
});

// Edit User 
router.post('/updateUser', function (req, res) {
    var transaction = new sql.Transaction();

    transaction.begin().then(function () {
        var request = new sql.Request(transaction);
        request.query("update userAuthenticationTable set UserName = '"+req.body.UserName+"', EmailId ='"+req.body.EmailId+"', Role = '"+req.body.Role+"', Password= '"+req.body.Password+"', CStoreAnalytics = '"+req.body.CStoreAnalytics+"',CameraAnalytics = '"+req.body.CameraAnalytics+"',WifiAnalytics = '"+req.body.WifiAnalytics+"', XAuthIdentity ='"+req.body.XAuthIdentity+"', XAuthKey = '"+req.body.XAuthKey+"', AuthorizationToken= '"+req.body.AuthorizationToken+"', WifiUserName= '"+req.body.WifiUserName+"', WifiPassword= '"+req.body.WifiPassword+"' where UserId = '"+ req.body.UserId +"'")
        .then(function () {
                transaction.commit().then(function (recordSet) {
                    console.log(recordSet);
                    res.send({"status":"success","message":"Data Updated Successfully"});
                   
                }).catch(function (err) {
                    console.log("Error in Transaction Commit " + err);                   
                });
            }).catch(function (err) {
                res.send({"status":"error","message":"User data is not updated !!!"});
                console.log("Error in Transaction Begin" + err);
            });
             
        }).catch(function (err) {
           console.log("error : ",err);
        });
 
});
// Edit User 
router.post('/updatePwd', function (req, res) {
    var transaction = new sql.Transaction();

    transaction.begin().then(function () {
        var request = new sql.Request(transaction);
        request.query("update userAuthenticationTable set Password= '"+req.body.Password+"' where UserId = '"+ req.body.UserId +"'")
        .then(function () {
                transaction.commit().then(function (recordSet) {
                    console.log(recordSet);
                    res.send({"status":"success","message":"Data Updated Successfully"});
                   
                }).catch(function (err) {
                    console.log("Error in Transaction Commit " + err);                   
                });
            }).catch(function (err) {
                res.send({"status":"error","message":"User data is not updated !!!"});
                console.log("Error in Transaction Begin" + err);
            });
             
        }).catch(function (err) {
           console.log("error : ",err);
        });
 
});


// Delete user
router.post('/deleteUser', function (req, res) {
    var transaction = new sql.Transaction();
    transaction.begin().then(function () {
        var request = new sql.Request(transaction);
        request.query("delete from userAuthenticationTable where UserId = '"+ req.body.UserId +"'")
        .then(function () {
                transaction.commit().then(function (recordSet) {
                    console.log(recordSet);
                    res.send({"status":"success","message":"User deleted Successfully"});
                   
                }).catch(function (err) {
                    console.log("Error in Transaction Commit " + err);                   
                });
            }).catch(function (err) {
                res.send({"status":"error","message":"User already deleted !!!"});
                console.log("Error in Transaction Begin" + err);
            });
        }).catch(function (err) {
           console.log("error : ",err);
        });
});




module.exports = router;