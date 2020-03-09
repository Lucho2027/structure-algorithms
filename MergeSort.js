function midPoint(arr) {
  //stop condition
  if (arr.length < 2) {
    return arr;
  }
  let middle = MATH.floor(arr.length / 2);
  let leftSide = arr.slice(0, middle);
  let rightSide = arr.slice(middle, arr.length - 1);
  //recursion condition to iterate through array
  return mergeSort(midPoint(leftSide), midPoint(rightSide));
}

function mergeSort(leftSide, rightSide) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;

  while (leftIndex < leftSide.length && rightIndex < rightSide.arr) {
    if (leftSide[leftIndex] < rightSide[rightIndex]) {
      arr[outputIndex++] = leftSide[leftIndex++];
    } else {
      arr[outputIndex++] = rightSide[rightIndex++];
    }
  }
  for (i = leftIndex; i < leftSide.length; i++) {
    arr[outputIndex++] = leftSide[i];
  }
  for (i = rightIndex; i < rightSide.length; i++) {
    arr[outputIndex++] = rightSide[i];
  }
}
