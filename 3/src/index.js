"use strict";
var fs = require("fs");
var Log = '';
var profit = function (sum) {
    var copies = Math.floor(sum / 75);
    var income = copies * 75 * 0.3;
    var newSum = sum + income;
    return { income: income, newSum: newSum };
};
var run = function (sum, days) {
    for (var i = 1; i <= days; i++) {
        if (i % 30 === 0) {
            sum = sum + 24;
            writeLog("Day\uFF1A" + i + "-\u8FFD\u52A0\u65E5-\u6708\u8FFD\u52A024\u4E07-\u603B\u91D1\u989D\uFF1A" + sum);
        }
        if (i % 10 === 0) {
            var _a = profit(sum), income = _a.income, newSum = _a.newSum;
            sum = newSum;
            writeLog("Day\uFF1A" + i + "-\u8FD4\u5229\u65E5-\u6536\u76CA\uFF1A" + income + "-\u603B\u91D1\u989D\uFF1A" + sum);
        }
    }
};
var writeLog = function (value) {
    // console.log(value);
    Log += '\r\n' + value;
};
run(375, 230);
fs.writeFile('./joker/3/log.txt', Log, null);
