import { LinkedList } from "./LinkedList.mjs";

export class palindrome extends LinkedList {
  isPalindrome() {
    let slowIndex = this.head;
    let fastIndex = this.head;
    let stack = [];

    while (fastIndex && fastIndex.next) {
      stack.push(slowIndex.value);
      slowIndex = slowIndex.next;
      fastIndex = fastIndex.next.next;
    }

    if (fastIndex) {
      slowIndex = slowIndex.next;
    }
    while (slowIndex) {
      if (slowIndex.value !== stack.pop()) {
        return false;
      }
      slowIndex = slowIndex.next;
    }

    return true;
  }
}

// Usage:
const linkedList = new palindrome();

linkedList.append(6);
linkedList.append(5);
linkedList.append(4);
linkedList.append(4);
linkedList.append(5);
linkedList.append(6);

console.log(linkedList.isPalindrome()); // Output: [1, 3, 5]
console.log(linkedList.toArray()); // Output: [1, 2, 3]
