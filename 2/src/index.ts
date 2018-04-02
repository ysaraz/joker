import * as fs from 'fs';
import * as _ from 'lodash';

let Log: string = '';

let remove = (path: string) => {
    let files: string[] = [];
    writeLog('Path:' + path);
    files = fs.readdirSync(path);
    for (let file of files){
        let filePath: string = path + '/' + file;
        let stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
            remove(filePath);
        }else {
            writeLog('File:' + file);
            fs.unlinkSync(filePath);
        }
    }
};

let writeLog = (value: string) => {
    console.log(value);
    Log += '\r\n' + value;
};

remove('./1.txt');
fs.writeFile('./2.txt', Log);
