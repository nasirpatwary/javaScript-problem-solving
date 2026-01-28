const sumOfNumbers = (numbers) => {
  let sum = 0;
  for (const element of numbers) {
    sum += element
    
  }
  return sum
};

const numbers = [1, 2, 3, 4];
const result = sumOfNumbers(numbers);
console.log(result);


