import * as fs from 'fs';
import * as _ from 'lodash';

let Log: string = '';
let profit = (sum:number)=>{
    let copies:number = Math.floor(sum / 75);
    let income:number = copies * 75 * 0.3;
    let newSum = sum + income;
    return {income,newSum};
}

let run = (sum:number,days:number) => {
    for(let i = 1;i<=days;i++){
        if( i % 30 ===0){
            sum = sum+24;
            writeLog(`Day：${i}-追加日-月追加24万-总金额：${sum}`)
        }
        if( i % 10 === 0){
            let {income,newSum} = profit(sum);
            sum = newSum;
            writeLog(`Day：${i}-返利日-收益：${income}-总金额：${sum}`);
        }
        // writeLog(`Day:${i} - Sum:${sum}`);
    }
}

let writeLog = (value: string) => {
    // console.log(value);
    Log += '\r\n' + value;
};

run(375,230);
fs.writeFile('./joker/3/log.txt', Log,null);