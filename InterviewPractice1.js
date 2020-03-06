//Given a document, implement an algorithm to count the number of word occurrences.

// const Input = `Hello there, how are you? Can you tell me how to get to the nearest Starbucks?`;

// function countWords(Input) {
//   let counting = {};
//   let words = Input.split(" ");

//   for (i = 0; i < words.length; i++) {
//     const word = words[i];
//     if (counting[word]) {
//       counting[word]++;
//     } else {
//       counting[word] = 1;
//     }
//   }
//   console.log(JSON.stringify(counting));
//   return counting;
// }
// countWords(Input);

// Longest word in string

const getLongestWord = str => {
  const strArr = str.split(" ");
  let max = 0;
  let result;
  for (let word of strArr) {
    if (word.length > max) {
      max = word.length;
      result = word;
    }
  }
  return result;
};

const str = "this is the string and the longest word is longest";
console.log(getLongestWord(str));
