"use strict";
var _ = require("lodash");
var init = function (num) {
    var list = [];
    for (var i = 0; i <= num; i++) {
        list.push(false);
    }
    return list;
};
var formatCount = function (list) {
    var count = 0;
    var res = [];
    var key = 0;
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var record = list_1[_i];
        if (key === 0) {
            key++;
            continue;
        }
        if (record) {
            count++;
            res.push(key);
        }
        key++;
    }
    // console.log(res);
    return count;
};
var Times = 0;
var run1 = function (list) {
    for (var i = 1; i < list.length; i++) {
        runSwitch(list, i);
        Times++;
    }
    var count = formatCount(list);
    console.log(count);
};
var run2 = function (list) {
    var max = Math.ceil(list.length / 2);
    for (var i = 1; i < max; i++) {
        runSwitch(list, i);
        Times++;
    }
    for (var j = max; j < list.length; j++) {
        list[j] = !list[j];
        Times++;
    }
    var count = formatCount(list);
    console.log(count);
};
var runSwitch = function (list, index) {
    _(list).forEach(function (record, k) {
        if (k % index === 0) {
            record = !record;
            list[k] = record;
        }
        Times++;
    });
};
var run3 = function (list) {
    for (var i = 1; i <= list.length; i++) {
        runSwitch2(list, i);
        Times++;
    }
    var count = formatCount(list);
    console.log(count);
};
var run4 = function (list) {
    var max = Math.ceil(list.length / 2);
    for (var i = 1; i < max; i++) {
        runSwitch2(list, i);
        Times++;
    }
    for (var j = max; j < list.length; j++) {
        list[j] = !list[j];
        Times++;
    }
    var count = formatCount(list);
    console.log(count);
};
var runSwitch2 = function (list, index) {
    var Multiple = 1;
    while (true) {
        Times++;
        var targetIndex = Multiple * index;
        if (targetIndex > list.length) {
            break;
        }
        if (typeof list[targetIndex] !== 'undefined') {
            list[targetIndex] = !list[targetIndex];
        }
        Multiple++;
    }
};
var run5 = function (num) {
    var count = 0;
    for (var i = 1; i <= num; i++) {
        if (i * i <= 2015) {
            count++;
        }
        else {
            break;
        }
    }
    console.log(count);
};
var list1 = init(2015);
Times = 0;
run1(list1);
console.log(Times);
var list2 = init(2015);
Times = 0;
run2(list2);
console.log(Times);
var list3 = init(2015);
Times = 0;
run3(list3);
console.log(Times);
var list4 = init(2015);
Times = 0;
run4(list4);
console.log(Times);
run5(2015);
