const manyVowels = (str) => {
 const vowels = ["a", "e", "i", "o", "u"]
 let sum = 0
 for (const element of str) {
    if (vowels.includes(element.toLowerCase())) {
       sum += element.length
    }
 }
 return sum
};

const str = "programming";
const result = manyVowels(str);
