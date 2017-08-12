//Dependencies

var express = require("express");
var path = require('path');
var app = express();
var bodyParser = require('body-parser');


var PORT = 3000;

var reservations = [{test: "one", test2: "two"}];
var waitList = [];

var firstCustomer = {
    customerName: "asdf",
    phoneNumber: "asdf",
    customerEmail: "asdf",
    customerID: 1355
}

/*
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
*/

// YOUR CODE GOES HERE
app.get("/api/reservations", function (req, res) {
    res.json(path.join(__dirname,reservations));
});

app.get("/api/wait-list", function (req, res) {
    res.json(path.join(__dirname,waitList));
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
    console.log(req.body.name);
});


// Listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
