import * as _ from 'lodash';
let init = (num:number) => {
    let list = [];
    for(let i=0;i<num;i++){
        list.push(false);
    }
    return list;
}

let run = (list:boolean[])=>{
    _(list).forEach((record:boolean,key:number)=>{
        runSwitch(list,key);
    })
}

let runSwitch = (list:boolean[],key:number) => {
    let count = 0;
    let rsList = [];
    let index = key+1;
    // console.log(list);
    _(list).forEach((record:boolean,k:number)=>{
        if( (k+1) % index === 0){
            record = !record;
            list[k] = record;
        }
        if(record){
            count++;
            rsList.push(k+1);
        }
    })
    console.log(`${index} - ${count}`);
    console.log(rsList);
}

let list:boolean[] = init(2015);
run(list);