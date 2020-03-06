//given  a list of integers find the mode and the frequency of the mode. The mode in a list of numbers is the value that occurs the most often. If no number in the list is repeated, then there is no mode for the list.

function mode(string) {
  const numCount = {};
  const numArr = string.split(",");
  let mode = "";
  let modeFreq = 0;

  for (i = 0; i < numArr.length; i++) {
    const value = numArr[i];
    if (numCount[value]) {
      numCount[value]++;
    } else {
      numCount[value] = 1;
    }
    if (numCount[value] > modeFreq) {
      mode = value;
      modeFreq = numCount[value];
    }
  }
  return { mode, modeFreq };
}
console.log(
  mode(
    `1, 2, 3, 6, 10, 3, 5, 6, 3, 3,6,7,8,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7`
  )
);
