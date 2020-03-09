class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //insert at top of linked list
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  //insert at bottom of linked list
  insertLast(data) {
    let node = new Node(data);
    let current;
    //if empty, make head

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  // Prints the content of the linked list

  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  // find middle point

  midPoint() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    current = this.head;
    for (i = 0; i < count / 2; i++) {
      current = current.next;
    }
    return current;
  }
}

const ll = new LinkedList();

ll.insertFirst(1200);
ll.insertFirst(120);
ll.insertLast(123123);
ll.printListData();
