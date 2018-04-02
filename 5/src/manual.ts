import * as Https from 'https';
import * as QueryString from 'querystring';

const AIP_URL = 'aip.baidubce.com';
type AccessTokenArgsType = {
    grant_type:string,
    client_id:string,
    client_secret:string,
}
let getAccessTokenArgs:AccessTokenArgsType = {
    grant_type:'client_credentials',
    client_id:'5ByOHo8ty4r03viwQ5s8wNt8',
    client_secret:'rw6XFlHCmKCe2HMzqwYNc0kZXfmGeqhk'
}
let getAccessTokenPostData = QueryString.stringify(getAccessTokenArgs);
console.log(getAccessTokenPostData);
console.log(Buffer.byteLength(getAccessTokenPostData));
let requestOption:Https.RequestOptions={
    host:AIP_URL,
    port:443,
    path:'/oauth/2.0/token',
    method:'POST',//这里是发送的方法
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(getAccessTokenPostData)
    }  
}
let body:string='';
let request = Https.request(requestOption,(res:Https.IncomingMessage)=>{
    console.log("Got response: " + res.statusCode);
    res.on('data',(data)=>{
        body += data;
    }).on('end',()=>{
        console.log(res.headers);
        console.log(body);
    })
})
request.write(getAccessTokenPostData);
request.end();