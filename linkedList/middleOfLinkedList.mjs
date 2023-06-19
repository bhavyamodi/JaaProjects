import { LinkedList } from "./LinkedList.mjs";

export class middleOfLinkedList extends LinkedList {
  middleOfLinkedList() {
    let slowIndex = this.head;
    let fastIndex = this.head;
    let index = 0

    while(fastIndex && fastIndex.next){
        index ++
        fastIndex = fastIndex.next.next
        slowIndex = slowIndex.next
    }
    console.log(index)
  }
}

// Usage:
const linkedList = new middleOfLinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(44);
linkedList.append(5);
// linkedList.append(6);

linkedList.middleOfLinkedList(); // Output: [1, 3, 5]
console.log(linkedList.toArray()); // Output: [1, 2, 3]
