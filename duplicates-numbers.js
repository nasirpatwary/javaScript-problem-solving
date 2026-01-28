const duplicateNumbers = (numbers) => {
    const duplicates = [...new Set(numbers)]
    return duplicates
}
const numbers = [1, 2, 2, 3, 4, 4]
const result = duplicateNumbers(numbers)
