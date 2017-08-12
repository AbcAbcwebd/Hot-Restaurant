//Dependencies

var express = require("express");
var path = require('path');
var app = express();


var PORT = 3000;

var reservations = [{test: "one", test2: "two"}];
var waitList = [];

var firstCustomer = {
    customerName: "asdf",
    phoneNumber: "asdf",
    customerEmail: "asdf",
    customerID: 1355
}


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


// Listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
