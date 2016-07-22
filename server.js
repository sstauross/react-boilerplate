var express = require("express");
var config = require("./config");

var app = express();

app.listen(config.port, function(){
  console.log("Comments app started on port ",config.port);
});