const evenNumbers = (numbers) =>{
  let evenNumber = []
  for (const element of numbers) {
    if (element % 2 === 0) {
        evenNumber.push(element)
    }
  }
  return evenNumber
}

const numbers = [1, 2, 3, 4, 5, 6]
const result = evenNumbers(numbers)
console.log(result);
