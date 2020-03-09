// Bubble sort -> O(n)
const arr = [1, 2, 3, 4, 2, 4, 3, 6, 5, 4, 7, 8, 6, 5, 4, 33, 4, 2, 111];

function bubbleSort(arr) {
  let swap = false;
  do {
    swap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = true;
      }
    }
  } while (swap);

  return arr;
}

console.log(bubbleSort(arr));

// Merge Sort -> O(n log n) -> https://repl.it/@Trip4077/TrickyForestgreenBucket

// const mergeSort = array => {
//   if (array.length < 2) return array;
//   const middle = Math.floor(array.length / 2);
//   const leftSide = array.slice(0, middle);
//   const rightSide = array.slice(middle, array.length);
//   return merge(mergeSort(leftSide), mergeSort(rightSide));
// };

// const merge = (left, right) => {
//   const result = [];

//   while (left.length && right.length) {
//     if (left[0] <= right[0]) {
//       result.push(left.shift());
//     } else {
//       result.push(right.shift());
//     }
//   }
//   while (left.length) result.push(left.shift());
//   while (right.length) result.push(right.shift());
//   return result;
// };

// console.log(mergeSort([5, 3, 7, 10, 4, 1, 5]));
