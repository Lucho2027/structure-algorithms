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
const linkList1 = {
  value: "B",
  next: {
    value: "i",
    next: {
      value: "l",
      next: {
        value: "b",
        next: {
          value: "o",
          next: {
            value: "a"
          }
        }
      }
    }
  }
};
const linkList2 = {
  value: "B",
  next: {
    value: "i",
    next: {
      value: "l",
      next: {
        value: "b",
        next: {
          value: "o",
          next: {
            value: "b"
          }
        }
      }
    }
  }
};

function compare(linkList1, linkList2) {
  let node1 = linkList1;
  let node2 = linkList2;

  while (node1 && node2) {
    if (node1.value > node2.value) {
      return 1;
    } else if (node1.value < node2.value) {
      return -1;
    }
    if (!node1.next && node2.next) {
      return -1;
    }
    if (!node2.next && node1.next) {
      return 1;
    }
    node1 = node1.next;
    node2 = node2.next;
  }
  return 0;
}
const value = compare(linkList1, linkList2);
console.log(value);
