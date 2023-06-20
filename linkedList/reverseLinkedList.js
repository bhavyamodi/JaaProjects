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

  // Append a node at the end of the linked list
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

  // Prepend a node at the beginning of the linked list
  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // Reverse the linked list by reversing the data values only
  reverseDataOnly() {
    let currentNode = this.head;
    const values = this.toArray();

    currentNode = this.head;
    while (currentNode) {
      currentNode.value = values.pop();
      currentNode = currentNode.next;
    }
  }

  // Reverse the linked list by changing the links between nodes
  reverseByChangingLinks() {
    let previousNode = null;
    let currentNode = this.head;

    while (currentNode) {
      const nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }

    this.head = previousNode;
  }

  // Print the linked list in reverse order without actually reversing it
  printReverse(node = this.head) {
    if (!node) {
      return;
    }

    this.printReverse(node.next);
    console.log(node.value);
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

console.log(linkedList.toArray()); // Output: [1, 2, 3, 4]

linkedList.reverseByChangingLinks();

console.log(linkedList.toArray());  // Output: [4, 3, 2, 1]

// linkedList.reverseDataOnly();

// console.log(linkedList.toArray()); // Output: [1, 2, 3, 4]

// linkedList.printReverse(); // Output: 4, 3, 2, 1

// console.log(linkedList.toArray()); // Output: [1, 2, 3, 4] 
