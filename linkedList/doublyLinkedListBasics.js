class Node {
  constructor(value) {
    this.previous = null;
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  insertAtFirst(head, newData) {
    let newNode = new Node(newData);

    if (!head) {
      head = newNode;
    } else {
      newNode.next = head;
      head.previous = newNode;
      head = newNode;
    }
    return head;
  }

  insertAtLast(head, newData) {
    let newNode = new Node(newData);

    if (!head) {
      head = newNode;
    } else {
      let currentNode = head;
      while (currentNode) {
        if (currentNode.next == null) {
          currentNode.next = newNode;
          newNode.previous = currentNode;
          return head;
        }
        currentNode = currentNode.next;
      }
    }
  }

  //Delete a node in linked list by position x
  deleteNode(head, x) {
    let currentNode = head;
    let temp = null;
    let index = 1;
    while (currentNode) {
      if (index == x) {
        temp = currentNode.previous;
        if (!temp) {
          head = currentNode.next; // remove first element
          return head;
        }
        if (!currentNode.next) {
          temp.next = currentNode.next; // remove last element
          return head;
        }

        temp.next = currentNode.next;
        currentNode.next = temp;
        return head;
      }
      index++;
      currentNode = currentNode.next;
    }
    return head;
  }

  // Reverse the linked list by changing the links between nodes
  reverseByChangingLinks(head) {
    let currentNode = head;
    let nextNode = null;

    while (currentNode) {
      nextNode = currentNode.previous;
      currentNode.previous = currentNode.next;
      currentNode.next = nextNode;

      currentNode = currentNode.previous;
    }
    if (nextNode) {
      head = nextNode.previous;
    }
    return head;
  }

  // Convert the linked list to an array
  toArray(head) {
    const result = [];
    let currentNode = head;
    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return result;
  }
}

let head = null;
let linkedList = new LinkedList();
head = linkedList.insertAtFirst(head, 3);
head = linkedList.insertAtFirst(head, 2);
head = linkedList.insertAtLast(head, 4);
head = linkedList.insertAtLast(head, 5);
head = linkedList.insertAtFirst(head, 1);
head = linkedList.insertAtLast(head, 6);

head = linkedList.deleteNode(head, 1);
// head = linkedList.reverseByChangingLinks(head);

console.log(linkedList.toArray(head));
