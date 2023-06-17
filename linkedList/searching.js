class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Get the size or length of the linked list
  getSize() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  searchFirst(){
    if(this.getSize() == 0){
      return ('Linked List is empty')
    }
    return this.head.value
  }

  searchLast(){
    if(this.getSize() == 0){
      return ('Linked List is empty')
    }
    return this.tail.value
    
  }

  // Search for a node with a specific index in the linked list
  searchByIndex(index) {
    if (index < 0 || index > this.getSize() - 1) {
      return ("Index out of range");
    }else if(index == 0){
      return this.searchFirst()
    }else if(index == this.getSize() - 1){
      return this.searchLast()
    }else{
      let temp = this.head;
      for (var i = 1; i <= index ; i++) {
        temp = temp.next;
      }
      return temp.value
    }
  }

  // Search for a node with a specific value in the linked list
  searchByValue(value) {
    let temp = this.head;
      for (var i = 0; i < this.getSize(); i++) {
        if(temp.value == value){
          return i
        }
        temp = temp.next;
      }
      return ('Value not found in Linked List')
  }

  // Convert the linked list to an array
  toArray() {
    const result = [];
    let currentNode = this.head;
    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return result;
  }
}

// Usage:
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

console.log(linkedList.searchFirst())
console.log(linkedList.searchLast())

console.log(linkedList.searchByIndex(-1));
console.log(linkedList.searchByIndex(5));
console.log(linkedList.searchByIndex(0));

console.log(linkedList.searchByValue(4));

console.log(linkedList.toArray()); // Output: [0, 1, 3]
