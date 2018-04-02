import * as _ from 'lodash';
let levels = [
    {'min':100000,'name':'元帅'},
    {'min':20000,'name':'大将'},
    {'min':0,'name':'新手'},
    {'min':1000,'name':'少将'},
    {'min':50000,'name':'上将'},
    {'min':10000,'name':'中将'},
]
function getLevel(exp:number){
    levels = _.orderBy(levels,(info)=>{return info.min})
    console.log(levels);
    let level = levels[0].name;
    for( let info of levels){
        level = exp < info.min ? level : info.name;
    }
    return level
}

console.log(getLevel(10000000000));