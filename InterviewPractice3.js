//Given a string, write an algorithm to count the number of words in the string that are palindromes. The output must include a list of the palindromes and the number of palindromes.

const Input = "Dad gave mom a Tesla as a racecar";
function checkPalindrome(word) {
  let countCar = {};
  let carachters = Input.split("");
  for (i = 0; i < carachters.length; i++) {
    const char = characters[i];
    if (countCar[char]) {
      countCar[char]++;
    } else {
      countCar[char] = 1;
    }
  }
  Object.values();
}

function countWords(Input) {
  let counting = {};
  let words = Input.split(" ");

  for (i = 0; i < words.length; i++) {
    const palin = words[i];
  }
  console.log(JSON.stringify(counting));
  return counting;
}
countWords(Input);

//check Mario Git hub Check Data Structures
