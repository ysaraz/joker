"use strict";
var _ = require("lodash");
var levels = [
    { 'min': 100000, 'name': '元帅' },
    { 'min': 20000, 'name': '大将' },
    { 'min': 0, 'name': '新手' },
    { 'min': 1000, 'name': '少将' },
    { 'min': 50000, 'name': '上将' },
    { 'min': 10000, 'name': '中将' },
];
function getLevel(exp) {
    levels = _.orderBy(levels, function (info) { return info.min; });
    console.log(levels);
    var level = levels[0].name;
    for (var _i = 0, levels_1 = levels; _i < levels_1.length; _i++) {
        var info = levels_1[_i];
        if (exp < info.min) {
            break;
        }
        level = info.name;
    }
    return level;
}
console.log(getLevel(10000000000));
