var express = require('express');
var mysql = require('mysql');
var path = require('path');
//var bodyParser = require('body-parser'); // for reading POSTed form data into `req.body`
var session = require('express-session');
var cookieParser = require('cookie-parser'); // the session is stored in a cookie, so we use this to parse it
var bodyParser = require('body-parser');
var users = require('./routes/user');
//var config = require('./config.json');
var connection  = require('express-myconnection');
var app = express();


//app.use(express.static('../myApp/www'));

// must use cookieParser before expressSession
app.use(cookieParser());

app.use(session({
    genid: function(req) {
        return (Date.now().toString()); // use UUIDs for session IDs
    },
    secret: 'mynameishasan', resave: false, saveUninitialized: true
}));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//app.use(bodyParser());

app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Credentials", "true"); //false
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, apikey");
    next();

});


app.use(

    connection(mysql,{

        host: 'localhost',
        user: 'root',
        password : '',
        database:'authDB'
    },'request')
);

app.get('/test',function(req,res){
    res.send("WoW it working!");
})

//app.use('/', require('./routes/app.controller'));
app.post('/register/:displayName/:user_email/:user_password', signUp);

function signUp(req,res){
    users.signup(req)
        .then(function () {
            //res.sendStatus(200);
            res.send({status: 200});
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

//app.post('/login/:user_email/:user_password', users.login);
app.post('/login/:user_email/:user_password', logIn);

function logIn(req,res){
    users.login(req)
        .then(function (data) {
            //res.sendStatus(200);
            res.send(data);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

app.get('/logout', logout);

function logout(req,res){
    users.logout(req)
        .then(function (data) {
            res.send(data);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

app.get('/current/:id', getCurrentUser);

function getCurrentUser(req, res) {
    users.getById(req)
        .then(function (user) {
            if (user) {
                res.send(user);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}


//app.use(app.router);

app.listen(process.env.PORT||8080);
console.log('Server is running on port : 8080');