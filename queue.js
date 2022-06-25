class Queue{

    constructor(){
        this.item = []
    }

    enqueue(ele){
        this.item.push(ele)
    }

    dequeue(){
        this.item.shift()
    }
    /* shift:移除第一个元素
    splice（1，1）：从第二个元素开始，只删除一个元素 */

}