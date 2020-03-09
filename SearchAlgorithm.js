let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// linear search works on sorted or unsorted arrays
// function linearSearch(arr, elem) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === elem) {
//       return i;
//     }
//   }
//   return "Not in array";
// }

// console.log(linearSearch(arr, 2));

// Binary Search works faster than linear search
//as it does not iterate through all of the items in the array.
//downside is that it only works on sorted arrays

// function binarySearch(arr, elem) {
//   let start = 0;
//   let end = arr.length - 1; //final point of the array
//   let middle = Math.floor((start + end) / 2);

//   while (arr[middle] !== elem && start <= end) {
//     if (arr[middle] < elem) start = middle + 1;
//     else end = middle - 1;
//     middle = Math.floor((start + end) / 2);
//   }
//   return arr[middle] === elem ? middle : "elem not in array";
// }
// console.log(binarySearch(arr, 8));

//In order
function inOrder(node) {
  if (!node) return;
  inOrder(node.left);
  console.log(node.value);
  inOrder(node.right);
}

//BreathFirst
function preOrder(node) {
  if (!node) return;
  console.log(node.value);
  preOrder(node.left);
  preOrder(node.right);
}

//DepthFirst
function postOrder(node) {
  if (!node) return;
  postOrder(node.left);
  postOrder(node.right);
  console.log(node.value);
}
