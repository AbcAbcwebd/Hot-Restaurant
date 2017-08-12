//Dependencies

var express = require("express");
var path = require('path');
var app = express();
var bodyParser = require('body-parser');


var PORT = 3000;

var reservations = [];
var waitList = [];

var firstCustomer = {
    customerName: "asdf",
    phoneNumber: "asdf",
    customerEmail: "asdf",
    customerID: 1355
}


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


// YOUR CODE GOES HERE
app.get("/api/reservations", function (req, res) {
    res.json(reservations);
});

app.get("/api/wait-list", function (req, res) {
    res.json(waitList);
});

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'app/public/index.html'))
})

app.get('/reserve', function(req,res){
    res.sendFile(path.join(__dirname,'app/public/reserve.html'))
})

app.get('/tables', function(req,res){
    res.sendFile(path.join(__dirname,'app/public/tables.html'))
})

app.post('/recieve-reservation', function(req, res) {
    var localName = req.body.name;
    var localPhone = req.body.phone;
    var localEmail = req.body.email;
    var customerObj = {
    	name: localName,
    	phone: localPhone,
    	email: localEmail
    };
    if (reservations.length < 6){
    	reservations.push(customerObj);
    } else {
    	waitList.push(customerObj);
    };
    res.sendStatus(200);
});


// Listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
