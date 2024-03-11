class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    return this.items.push(item);
  }
  dequeue() {
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (!this.isEmpty()) return this.items[0];
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue("10");
queue.enqueue("String");
console.log(queue.isEmpty());

console.log(queue);
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue);
