class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  isSize() {
    return this.size;
  }
  prepand(value) {      ///Constant time complexity o(1)
    const node = new Node(value);
    if (this.isEmpty()) {
      // console.log("Empty cond. run");
      this.head = node;
    } else {
      console.log("else cond. run");
      node.next = this.head;
      console.log("next value", this.next);
      this.head = node;
    }
    this.size++;
  }
  append(value){    //Time complexity linear = O(n)
    const node = new Node(value);
    if(this.isEmpty()){
      this.head = node;
    }else{
      let prev = this.head;
      while(prev.next){
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  print() {
    if (this.isEmpty()) {
      console.log("List is empty !");
    } else {
      let current = this.head;
      // console.log("current before:", current);
      let listValues = '';
      while(current){
        listValues += `${current.value} `;
        current = current.next;
      }
      // console.log("current after:", current);
      console.log(listValues);
    }
  }
}

const list = new LinkedList();

console.log("Size of the list is : ", list.isSize());
console.log(list);
list.prepand(10)
list.print();
list.append(50);
list.append(60);
list.append(80);
console.log(list);