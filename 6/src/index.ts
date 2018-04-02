import * as Express from 'express';
import * as Path from 'path';

let app = Express();

let filePath = Path.resolve(__dirname+'/../../../../yak-dev-future/dist/index.html');
app.get('/',(req,res)=>{
    // console.log
    res.sendFile(filePath);
})

let server = app.listen(8081,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})