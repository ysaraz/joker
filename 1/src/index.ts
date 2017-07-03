import * as _ from 'lodash';
let init = (num:number) => {
    let list = [];
    for(let i=0;i<=num;i++){
        list.push(false);
    }
    return list;
}

let formatCount = (list:boolean[])=>{
    let count = 0;
    let res = [];
    let key = 0;
    for(let record of list){
        if(key === 0){
            key++;
            continue;
        }
        if(record){
            count++;
            res.push(key);
        }
        key++;
    }
    // console.log(res);
    return count;
}
let Times = 0;
let run1 = (list:boolean[])=>{
    for(let i=1;i<list.length;i++){
        runSwitch(list,i);
        Times++;
    }
    let count = formatCount(list);
    console.log(count);
}

let run2 = (list:boolean[])=>{
    let max = Math.ceil(list.length / 2);
    for(let i=1;i<max;i++){
        runSwitch(list,i);
        Times++;
    }
    for(let j=max;j<list.length;j++){
        list[j] = !list[j];
        Times++;
    }
    let count = formatCount(list);
    console.log(count);
}

let runSwitch = (list:boolean[],index:number) => {
    _(list).forEach((record:boolean,k:number)=>{
        if( k % index === 0){
            record = !record;
            list[k] = record;
        }
        Times++;
    })
}

let run3 = (list:boolean[])=>{
    for(let i=1;i<=list.length;i++){
        runSwitch2(list,i);
        Times++;
    }
    let count = formatCount(list);
    console.log(count);
}
let run4 = (list:boolean[])=>{
    let max = Math.ceil(list.length / 2);
    for(let i=1;i<max;i++){
        runSwitch2(list,i);
        Times++;
    }
    for(let j=max;j<list.length;j++){
        list[j] = !list[j];
        Times++;
    }
    let count = formatCount(list);
    console.log(count);
}
let runSwitch2 = (list:boolean[],index:number)=>{
    let Multiple = 1;
    while(true){
        Times++;
        let targetIndex = Multiple * index;
        if(targetIndex>list.length){
            break;
        }
        if(typeof list[targetIndex] !== 'undefined'){
            list[targetIndex] = !list[targetIndex];
        }
        Multiple++;
    }
}

let list1:boolean[] = init(2015);
Times = 0;
run1(list1);
console.log(Times);

let list2:boolean[] = init(2015);
Times = 0;
run2(list2);
console.log(Times);

let list3:boolean[] = init(2015);
Times = 0;
run3(list3);
console.log(Times);

let list4:boolean[] = init(2015);
Times = 0;
run4(list4);
console.log(Times);