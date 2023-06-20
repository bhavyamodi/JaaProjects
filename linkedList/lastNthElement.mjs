import { LinkedList } from "./LinkedList.mjs";

export class LastNthElement extends LinkedList {
  getNthFromLast(n) {
    if (!this.head || n < 1) {
      return -1;
    }

    let fastIndex = this.head;
    let slowIndex = this.head;

    for (let i = 0; i < n; i++) {
      if (!fastIndex) {
        return -1;
      }
      fastIndex = fastIndex.next;
    }

    while (fastIndex) {
      slowIndex = slowIndex.next;
      fastIndex = fastIndex.next;
    }

    return slowIndex.value;
  }
}

// Usage:
const linkedList = new LastNthElement();

linkedList.append(6);
linkedList.append(5);
linkedList.append(4);
linkedList.append(6);
linkedList.append(5);
linkedList.append(4);
linkedList.append(6);
linkedList.append(55);
linkedList.append(4);


console.log(linkedList.getNthFromLast(2)); // Output: [1, 3, 5]
console.log(linkedList.toArray()); // Output: [1, 2, 3]
