class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  insertAtEnd(head, newData) {
    let newNode = new Node(newData);
    if (!head) {
      head = newNode;
    } else {
      let currentNode = head;
      while (currentNode) {
        if (currentNode.next == null) {
          currentNode.next = newNode;
          return head;
        }
        currentNode = currentNode.next;
      }
    }
    return head;
  }

  getNthFromLast(head, n) {
    if (!head || n < 1) {
      return -1;
    }

    let fastIndex = head;
    let slowIndex = head;
    let count = 1;

    while (count < n) {
      if (!fastIndex) {
        return -1;
      }
      fastIndex = fastIndex.next;
      count++;
    }

    while (fastIndex) {
      console.log(slowIndex)
      slowIndex = slowIndex.next;
      fastIndex = fastIndex.next;
    }
    return slowIndex.value;
  }

  // Insert a node at the end of the linked list
  append(head, newData) {
    const newNode = new Node(newData);

    if (!head) {
      head = newNode;
    } else {
      newNode.next = head;
      head = newNode;
    }
    return head;
  }
}

let head = null;
let linkedList = new LinkedList();
head = linkedList.append(head, 9);

head = linkedList.append(head, 8);
head = linkedList.insertAtEnd(head, 5);

console.log(linkedList.getNthFromLast(head,2))

console.log(head);
