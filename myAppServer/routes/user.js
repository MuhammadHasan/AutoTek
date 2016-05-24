//var session = require('express-session');
var Q = require('q');
//var _ = require('lodash');

exports.signup = function(req,res){

    var deferred = Q.defer();

            var id = 12;
            var display_Name= req.params.displayName;
            var user_email= req.params.user_email;
            var user_password= req.params.user_password;

        var data = {
            id:id,
            display_Name: display_Name,
            user_email: user_email,
            user_password: user_password
        };

    req.getConnection(function (err, connection) {

        var query = connection.query("INSERT INTO usertable set ? ", data, function (err, rows) {

            if (err) {
                console.log("Error inserting : %s ", err);
                deferred.reject(err);
            }

            console.log(rows);

            deferred.resolve({status:200});

            //res.sendStatus(200);

        });
    });
    return deferred.promise;

};

exports.login = function(req, res){

    var deferred = Q.defer();

    var user_email= req.params.user_email;
    var user_password= req.params.user_password;

    req.getConnection(function(err,connection){

        var query = connection.query('SELECT * FROM usertable WHERE user_email = ?',user_email,function(err,rows)     {

            if(err) {
                console.log("Error Selecting : %s ", err);
            }
            else if(rows) {

                //console.log(rows);
                req.session["isLogin"] = true;
                req.session.user = rows;
                console.log(rows[0].display_Name + " Login");
                console.log(req.session.user);

                /*
                req.session.user =  {
                    email : rows[0].user_email
                    //name : req.body.display_Name
                };
                console.log(req.session);
                */

                deferred.resolve({status:200,id:rows[0].id});

            }
            //res.render('customers',{page_title:"Customers - Node.js",data:rows});

        });

    });
    return deferred.promise;

};

exports.logout = function(req, res){

    var deferred = Q.defer();


    if(req.session) {

        console.log('***');
        console.log(req.session.user);

        req.session["isLogin"] = false;
        req.session.user = null;
        console.log("logout");

        deferred.resolve({status: 200});
    }
            //res.render('customers',{page_title:"Customers - Node.js",data:rows});

    return deferred.promise;

};

exports.getById = function(req,res){

    var deferred = Q.defer();

    var id = req.params.id;


    req.getConnection(function (err, connection) {

        var query = connection.query("SELECT * FROM usertable WHERE id = ?", id, function (err, rows) {

            if (err) {
                console.log("Error inserting : %s ", err);
                deferred.reject(err);
            }

            if (rows) {
                // return user (without hashed password)
                rows[0].display_Name;
                deferred.resolve(user={user_id : rows[0].id,display_Name: rows[0].display_Name,user_email : rows[0].user_email});
            }
        });
    });
    return deferred.promise;

};