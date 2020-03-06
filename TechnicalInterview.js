//FizzBuzz
// 100 3 , fizz, 5 buzz, 3 &5 fizzbuzz

const compose = (a, b) => data => a(b(data));

const fizzBuzz = num => {
  const result = [];
  for (let i = 0; i <= num; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      result.push(i);
    }
  }
  return result;
};

const getThird = arr => {
  return arr[2];
};

const composedFizzbuzz = compose(getThird, fizzBuzz);
console.log(composedFizzbuzz(100));
