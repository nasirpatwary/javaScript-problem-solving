const maximumNumber = (numbers) => {
  let max = numbers[0]
  for (const element of numbers) {
    if (element > max) {
        max = element
    }
  }
  return max
};

const numbers = [5, 1, 9, 3]
const result = maximumNumber(numbers);



