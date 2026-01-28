const factorialOfNumbers = (n) => {
    if(n === 0 || n === 1) return 1

    let result = 1
    for (let index = 1; index <= n; index++) {
        result *= index
    }
    return result
}

const result = factorialOfNumbers(5)
