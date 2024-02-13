var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Welcome to Hello world App! <br/> This app is running on minikube cluster.");
});

app.listen(3000, () => {
    console.log("App is running on port 3000")
});

module.exports = app
