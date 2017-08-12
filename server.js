//Dependencies

var express = require("express");

var app = express();


var PORT = 3000;

//customerObjects
var firstCustomer = {
    customerName: "asdf",
    phoneNumber: "asdf",
    customerEmail: "asdf",
    customerID: 1355
}


// YOUR CODE GOES HERE
app.get("/firstCustomer", function (req, res) {
    res.json(firstCustomer);
});


// Listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
