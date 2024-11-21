// Create a function that filters out negative numbers from an array.
// Examples:
// Example 1
// Input: [-3, 5, -1, 0, 8, -4, 7]
// Output: [5, 0, 8, 7]

// Example 2
// Input: [-1, -2, -3, -4]
// Output: [0]

// Example 3
// Input: [10, 20, 30, 40]
// Output: [10, 20, 30, 40]
function getNegative(arr) {
    return arr.filter((ele) => ele > 0);
}
console.log(getNegative([-1, -2, -3, -4]))
console.log(getNegative([10, 20, 30, 40]))
console.log(getNegative([-3, 5, -1, 0, 8, -4, 7]))