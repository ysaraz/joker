import * as Fs from 'fs';
import * as Path from 'path';

export default class Log {
    filePath:string = '';
    log:string='';
    constructor(path:string){
        this.filePath = Path.resolve(__dirname,'../log/' + path);
    }

    writeLog(value:string){
        this.log += '\r\n' + value;
    }

    saveLog(){
        console.log(this.log);
        Fs.writeFile(this.filePath, this.log,null);
    }
}