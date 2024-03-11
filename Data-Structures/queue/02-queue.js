class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }
  enqueue(item) {
    this.items[this.rear] = item;
    this.rear++;
  }
  dequeue(){
    const item = this.items[this.front];
    console.log("Intial item",item);
    delete this.items[this.front];
    this.front++;
    console.log("Front ", this.front);
    console.log("Final dequeue item",item);
    return item;
  }
  isEmpty(){
    return this.rear - this.front === 0;
  }
  peek(){
    return this.items[this.front];
  }

}
const queue = new Queue();
queue.enqueue(6),
queue.enqueue(7),
queue.enqueue(8),
queue.enqueue(9),


console.log(queue);
console.log(queue.dequeue());
console.log(queue.isEmpty());
console.log(queue.peek())


