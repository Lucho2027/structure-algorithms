//Bubble sort -> O(n)
// const arr = [1, 2, 3, 4, 2, 4, 3, 6, 5, 4, 7, 8, 6, 5, 4, 33, 4, 2, 111];

// function bubbleSort(arr) {
//   let temp;
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// console.log(bubbleSort(arr));

// Merge Sort -> O(n log n) -> https://repl.it/@Trip4077/TrickyForestgreenBucket

const mergeSort = array => {
  if (array.length < 2) return array;
  const middle = Math.floor(array.length / 2);
  const leftSide = array.slice(0, middle);
  const rightSide = array.slice(middle, array.length);
  return merge(mergeSort(leftSide), mergeSort(rightSide));
};

const merge = (left, right) => {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
};

console.log(mergeSort([5, 3, 7, 10, 4, 1, 5]));
