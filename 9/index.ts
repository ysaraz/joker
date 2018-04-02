class Logger{
    trace(info:string){
        console.log(info);
    }
}

type constructorType = {
    gProjectDir:string,
    logger:Logger
}

class GooglePlay{
    constructor(params:constructorType){

    }
}

let gProjectDir = '';
let selfLogger:Logger = new Logger();
let logger2 = {};
new GooglePlay({gProjectDir,selfLogger});