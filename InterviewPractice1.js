//Given a document, implement an algorithm to count the number of word occurrences.

const Input = `Hello there, how are you? Can you tell me how to get to the nearest Starbucks?`;

function countWords(Input) {
  let counting = {};
  let words = Input.split(" ");

  for (i = 0; i < words.length; i++) {
    const word = words[i];
    if (counting[word]) {
      counting[word]++;
    } else {
      counting[word] = 1;
    }
  }
  console.log(JSON.stringify(counting));
  return counting;
}
countWords(Input);
