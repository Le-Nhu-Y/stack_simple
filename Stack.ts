export  class Stack<T>{
    storage:T[]=[];
    constructor() {
    }
    push(data:T):void{
        this.storage.push(data);
    }
    pop():T{
        return this.storage.pop();
    }
    peek():T{
        return this.storage [this.size()-1]
    }
    size():number{
        return this.storage.length;
    }
}