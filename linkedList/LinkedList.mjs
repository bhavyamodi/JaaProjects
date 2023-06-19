import { Node } from './Node.mjs'

export class LinkedList{
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
