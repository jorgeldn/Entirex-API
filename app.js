var custom_express = require('./config/custom-express');
var port = process.env.PORT || 8080;

var app = custom_express();
app.listen(port, function(){
    console.log("Online @ Port 8080");
});