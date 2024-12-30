// 1. **Number Formatting:**
//     - Write a function that takes a number as input and returns it formatted with two decimal places using `toFixed`. Example: `formatNumber(123.456)` should return `"123.46"`.

function formatNumber(num) {
    return num.toFixed(2);
}
console.log(formatNumber(123.456));