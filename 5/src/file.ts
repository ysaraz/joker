import * as Fs from 'fs';
import * as Path from 'path';
import Log from './log';

const FilePath = 'F:/DATA/下载/chrome/image';
export type ReadFileCallBack = (path:string)=>void;
export function ReadFile(FilePath:string,log:Log,callBack:ReadFileCallBack){
    Fs.readdir(FilePath,(err,files)=>{
        if(err){
            log.writeLog(err.message);
            return;
        }
        for(let file of files){
            let childPath:string =Path.join(FilePath,file);
            Fs.stat(childPath,(err,stats)=>{
                if (err) throw err;
                if(stats.isFile()){
                    callBack(childPath);
                }else if (stats.isDirectory()){
                    ReadFile(childPath,log,callBack);
                }
            });
        }
        log.saveLog();
    });
}

function FsStat(path:string){
    return new Promise((resolve,reject)=>{
        Fs.stat(path,(err,stats)=>{
            resolve(stats);
        })
    })
}

// function* ReadFile2(path:string){
//     console.log(1);
//     yield console.log(2);
//     // let stats = yield FsStat(path);
//     // console.log(stats);
// }

async function ReadFile3(path:string){
    let stats = await FsStat(path);
    console.log(stats);
}

// let log = new Log('file.log');
// ReadFile(FilePath,log);
ReadFile3(FilePath);