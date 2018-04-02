"use strict";
var Fs = require("fs");
var Path = require("path");
var Log = (function () {
    function Log(path) {
        this.filePath = '';
        this.log = '';
        this.filePath = Path.resolve(__dirname, '../log/' + path);
    }
    Log.prototype.writeLog = function (value) {
        this.log += '\r\n' + value;
    };
    Log.prototype.saveLog = function () {
        console.log(this.log);
        Fs.writeFile(this.filePath, this.log, null);
    };
    return Log;
}());
exports.__esModule = true;
exports["default"] = Log;
