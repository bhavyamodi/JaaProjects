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

  // Insert a node at the end of the linked list
  append(value) {
    const newNode = new Node(value);
    console.log(this.head)

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    console.log(this)
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
// console.log(linkedList)

linkedList.append(3);
linkedList.append(4);

// linkedList.printNextNodeReference();

// console.log(linkedList.toArray()); // Output: [1, 2, 3]
