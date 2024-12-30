// 1. **Parsing Strings:**
//     - Write a function that takes a mixed string input (e.g., `"123px"`, `"45% sugar"`) and extracts the numeric value using `parseInt` or `parseFloat`. If the input doesn’t contain a number, return `NaN`.
function getNumber(str) {
    return parseFloat(str);
    // return parseInt(str);
}
console.log(getNumber("123px"));
console.log(getNumber("45% sugar"));
console.log(getNumber("d23px"));