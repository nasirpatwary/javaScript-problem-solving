const palindrome = (str) =>{
 str = str.toLowerCase().replace(/\s+/g, "") //  extra validation
 let rev = ""
 for (let i = str.length - 1; i >= 0; i--) rev += str[i]
 return str === rev
}
const result = palindrome("madam")

