
export enum State{
    end = 0,
    run = 1,
}
export class Queue<D>{
    list:D[] = [];
    state:State;
    call:(data:D,queue)=>void;

    constructor(call:(data:D,queue)=>void){
        this.state = State.end;
        this.call = call;
    }

    add(data:D){
        this.list.push(data);
        if(this.state === State.end){
            this.run();
        }
    }

    run(){
        this.state = State.run;
        if(this.list.length === 0){
            this.end();
            return;
        }else{
            let current:D = this.list.shift();
            this.call(current,this);
        }
    }

    next(){
        this.run();
    }

    end(){
        this.state = State.end;
    }
}