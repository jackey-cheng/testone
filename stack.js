
class Stack{

    constructor(){
        this.items = []
    }

    push(ele){
        this.items.push(ele)
    }

    pop(){
        return this.items.pop()
    }

    peak(){
        return this.items[this.items.length-1]
    }

    clear(){
        this.items.length = 0
    }
}

const sta = new Stack()
sta.push(111)
console.log(sta.peak());


