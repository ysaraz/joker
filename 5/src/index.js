"use strict";
var Aip = require("../../../third/aip-node/src");
var Fs = require("fs");
var File = require("./file");
var log_1 = require("./log");
var Queue = require("./queue");
var AppId = '9997604';
var ApiKey = '5ByOHo8ty4r03viwQ5s8wNt8';
var SecretKey = 'rw6XFlHCmKCe2HMzqwYNc0kZXfmGeqhk';
var checkImg = function (path, log, client, queue) {
    console.log(path);
    var image = Fs.readFileSync(path);
    var base64Img = new Buffer(image).toString('base64');
    var promise = client.antiPorn(base64Img);
    promise.then(function (result) {
        log.writeLog(path);
        log.writeLog(JSON.stringify(result));
        log.writeLog('————————————————————————————————');
        queue.next();
        log.saveLog();
    });
    image = null;
    base64Img = null;
};
var client = new Aip.imageCensor(AppId, ApiKey, SecretKey);
var Path = 'F:/DATA/下载/chrome/image/bak';
var log = new log_1["default"]('main.log');
var queueCall = function (path, queue) {
    checkImg(path, log, client, queue);
};
var queue = new Queue.Queue(queueCall);
var callBack = function (path) {
    queue.add(path);
};
File.ReadFile(Path, log, callBack);
