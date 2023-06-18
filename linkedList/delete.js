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
  

  removeLast() {
    let temp = this.head;
    while (temp.next != this.tail) {
      temp = temp.next;
    }
    temp.next = null;
  }

  // Delete a node with a specific value from the linked list
  deleteByValue(value) {
    let temp = this.head;
    let previousNode = null;
    for (var i = 0; i < this.getSize(); i++) {
      if (temp.value == value) {
        if (i == 0) {
          //remove the value if it is present at 0 index
          this.head = temp.next;
          return;
        } else {
          previousNode.next = temp.next;
          return;
        }
      }
      previousNode = temp;
      temp = temp.next;
    }
    console.log("Value not found in Linked List");
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

  // Print the value and reference to the next node in the linked list
  printNextNodeReference() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(`Value: ${currentNode.value}`);
      console.log("Next Node: ", currentNode.next);

      currentNode = currentNode.next;
    }
  }
}

// Usage:
const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);

linkedList.deleteByValue(4);

// linkedList.printNextNodeReference();

console.log(linkedList.toArray()); // Output: [1, 2, 3]
