import * as Https from 'https';
const AVGLE_CATEGORIES_API_URL = 'https://api.avgle.com/v1/categories';//'http://www.baidu.com';//

let opt = {
    // protocol:'https',
    host:'127.0.0.1',
    port:'55390',
    method:'POST',//这里是发送的方法
    path: AVGLE_CATEGORIES_API_URL,     //这里是访问的路径
    headers:{ //这里放期望发送出去的请求头
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

Https.request(AVGLE_CATEGORIES_API_URL,(res)=>{
    console.log("statusCode: ", res.statusCode);
    console.log("headers: ", res.headers);
    // res.on('data', function(d) {
    //     process.stdout.write(d);
    // });
})
// request(AVGLE_CATEGORIES_API_URL, (error, response, body) => {
//     if (err) return console.log(err);
//     var response = JSON.parse(body);
//     console.log(response);
//     if (response.success) {
//         var categories = response.response.categories;
//         doSomethingWith(categories);
//     }
// });