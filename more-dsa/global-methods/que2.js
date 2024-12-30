// 2. **Radix Experimentation:**
//     - Implement a function that converts a string representation of a binary number (e.g., `"1011"`) to its decimal equivalent using `parseInt` with a radix of `2`.

function convertToBinary(num) {
    return parseInt(num, 2);
}
console.log(convertToBinary("1111", 2));