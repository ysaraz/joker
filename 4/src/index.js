"use strict";
var Https = require("https");
var AVGLE_CATEGORIES_API_URL = 'https://api.avgle.com/v1/categories'; //'http://www.baidu.com';//
var opt = {
    // protocol:'https',
    host: '127.0.0.1',
    port: '55390',
    method: 'POST',
    path: AVGLE_CATEGORIES_API_URL,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};
Https.request(AVGLE_CATEGORIES_API_URL, function (res) {
    console.log("statusCode: ", res.statusCode);
    console.log("headers: ", res.headers);
    // res.on('data', function(d) {
    //     process.stdout.write(d);
    // });
});
// request(AVGLE_CATEGORIES_API_URL, (error, response, body) => {
//     if (err) return console.log(err);
//     var response = JSON.parse(body);
//     console.log(response);
//     if (response.success) {
//         var categories = response.response.categories;
//         doSomethingWith(categories);
//     }
// }); 
