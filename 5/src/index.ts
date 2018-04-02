import * as Aip from '../../../third/aip-node/src';
import * as Fs from 'fs';
import * as File from './file';
import Log from './log';
import * as Queue from './queue';

let AppId = '9997604';
let ApiKey = '5ByOHo8ty4r03viwQ5s8wNt8';
let SecretKey = 'rw6XFlHCmKCe2HMzqwYNc0kZXfmGeqhk';


let checkImg = (path:string,log:Log,client:any,queue)=>{
    console.log(path);
    let image = Fs.readFileSync(path);
    let base64Img = new Buffer(image).toString('base64');
    let promise = client.antiPorn(base64Img);
    promise.then((result)=>{
        log.writeLog(path);
        log.writeLog(JSON.stringify(result));
        log.writeLog('————————————————————————————————');
        queue.next();
        log.saveLog();
    })
    image = null;
    base64Img = null;
}

var client = new Aip.imageCensor(AppId,ApiKey,SecretKey);
const Path = 'F:/DATA/下载/chrome/image/bak';
let log = new Log('main.log');
let queueCall = (path:string,queue)=>{
    checkImg(path,log,client,queue);
}
let queue = new Queue.Queue<string>(queueCall);
let callBack:File.ReadFileCallBack = (path:string)=>{
    queue.add(path);
}
File.ReadFile(Path,log,callBack);