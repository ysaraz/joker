"use strict";
var Express = require("express");
var Path = require("path");
var app = Express();
var filePath = Path.resolve(__dirname + '/../../../../yak-dev-future/dist/index.html');
app.get('/', function (req, res) {
    // console.log
    res.sendFile(filePath);
});
var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
