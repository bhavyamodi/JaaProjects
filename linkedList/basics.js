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

  // Insert a node at a specific position in the linked list
  insertAtPosition(value, position) {
    const newNode = new Node(value);

    if (position < 0 || position > this.getSize()) {
        console.log("Position out of range");
    } else if (position == 0) {
        this.prepend(value);
    } else if (position == this.getSize()) {
        this.append(value);
    } else {
      let temp = this.head;
      for (var i = 1; i <= position - 1; i++) {
        temp = temp.next;
      }
      newNode.next = temp.next;
      temp.next = newNode;
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

console.log(linkedList); // Output: [1, 2, 3]

linkedList.prepend(0);

// console.log(linkedList.toArray()); // Output: [0, 1, 2, 3]


console.log(linkedList.insertAtPosition(222, 2));
console.log(linkedList.toArray()); // Output: [0, 1, 3]

// console.log(linkedList.search(1)); // Output: Node { value: 1, next: Node { value: 3, next: null } }
