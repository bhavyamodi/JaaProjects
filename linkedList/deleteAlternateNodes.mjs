import { LinkedList } from "./LinkedList.mjs";

export class deleteAlternateNodes extends LinkedList {
  deleteAlternateEvenNodes() {
    let temp = this.head;
    let previousNode = null;

    for (var i = 0; i <= this.getSize(); i++) {
      if (previousNode) {
        previousNode.next = temp.next;
      }
      previousNode = temp;
      if (temp.next == this.tail) {
        temp.next = null;
      } else {
        temp = temp.next;
      }
    }
  }

  deleteAlternateOddNodes() {
    let temp = this.head;
    let previousNode = null;

    for (var i = 0; i <= this.getSize(); i++) {
      if (temp == this.head && i == 0) {
        this.head = temp.next;
        temp = this.head;
      } else {
        if (previousNode) {
          previousNode.next = temp.next;
        }
        previousNode = temp;
        if (temp.next == this.tail) {
          temp.next = null;
        } else {
          temp = temp.next;
        }
      }
    }
  }
}

// Usage:
const linkedList = new deleteAlternateNodes();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.append(6);

linkedList.deleteAlternateEvenNodes();  // Output: [1, 3, 5]
console.log(linkedList.toArray()); // Output: [1, 2, 3]

linkedList.deleteAlternateOddNodes(); // Output: [2, 4, 6]
console.log(linkedList.toArray()); // Output: [1, 2, 3]
