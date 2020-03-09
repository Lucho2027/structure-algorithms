// //Given a sorted linked list, write an algorithm to delete all duplicate numbers from the sorted linked list.
// let head = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   }
// };

// function deleteDuplicate(head) {
//   let node = head;
//   //how we loop through a linked list
//   while (node) {
//     console.log(node.value);
//     //if you are in the end of the last node, making sure the next node exist
//     if (node.next && node.value == node.next.value) {
//       node.next = node.next.next;
//     }
//     node = node.next;
//   }
// }
// deleteDuplicate(head);
// console.log(JSON.stringify(head, null, 2));

//Given 2 linked lists, where each node in each linked list represents a character in a string, write a function compare() that compares the 2 strings, i.e., it returns 0 if both strings are the same, 1 if the 1st linked list is lexicographically greater, and -1 if the 2nd string is lexicographically greater.
// const linkList1 = {
//   value: "B",
//   next: {
//     value: "i",
//     next: {
//       value: "l",
//       next: {
//         value: "b",
//         next: {
//           value: "o",
//           next: {
//             value: "a"
//           }
//         }
//       }
//     }
//   }
// };
// const linkList2 = {
//   value: "B",
//   next: {
//     value: "i",
//     next: {
//       value: "l",
//       next: {
//         value: "b",
//         next: {
//           value: "o"
//         }
//       }
//     }
//   }
// };
// const linkList1 = {
//   value: "B",
//   next: {
//     value: "i",
//     next: {
//       value: "l",
//       next: {
//         value: "b",
//         next: {
//           value: "o",
//           next: {
//             value: "a"
//           }
//         }
//       }
//     }
//   }
// };
// const linkList2 = {
//   value: "B",
//   next: {
//     value: "i",
//     next: {
//       value: "l",
//       next: {
//         value: "b",
//         next: {
//           value: "o",
//           next: {
//             value: "b"
//           }
//         }
//       }
//     }
//   }
// };

// function compare(linkList1, linkList2) {
//   let node1 = linkList1;
//   let node2 = linkList2;

//   while (node1 && node2) {
//     if (node1.value > node2.value) {
//       return 1;
//     } else if (node1.value < node2.value) {
//       return -1;
//     }
//     if (!node1.next && node2.next) {
//       return -1;
//     }
//     if (!node2.next && node1.next) {
//       return 1;
//     }
//     node1 = node1.next;
//     node2 = node2.next;
//   }
//   return 0;
// }
// const value = compare(linkList1, linkList2);
// console.log(value);

//Linked List Round 2 --- Fight
// https://www.youtube.com/watch?v=ZBdE8DElQQU
//

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
const n1 = new Node(100);

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    //If empty, make head
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

  //insert at index

  insertAt(data, index) {
    //if index is out of range
    if (index > 0 && index > this.size) {
      return;
    }
    //If first index
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const node = new Node(data);
    let current, previous;
    //Set current to first
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current; //Node before index we want to insert
      count++;
      current = current.next; //Node after the index
    }
    node.next = current;
    previous.next = node;

    this.size++;
  }

  //Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  //Remove at index

  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;
    //Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  //clear list

  clearList() {
    this.head = null;
    this.size = 0;
  }

  //print list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  // Find middle of the linked list
  midPoint() {
    let slow = this.head;
    let fast = this.head;
    if (this.head != null) {
      while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
      }
      return console.log(
        "this is the data stored in the midpoint node:",
        slow.data
      );
    }
  }
}
const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(400);
ll.insertFirst(500);
ll.insertFirst(600);
ll.insertLast(700);
ll.insertLast(800);
// ll.clearList();
// ll.removeAt(22);
ll.printListData();
ll.midPoint();

// ll.getAt(0);
