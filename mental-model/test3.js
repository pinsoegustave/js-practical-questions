// Description:
// Create a function squareNum that squares each number in an array.
// Examples:
// // Example 1
// Input: [2, 4, 6, 8, 10]
// Output: [4, 16, 36, 64, 100]

// // Example 2
// Input: [-1, 0, 1]
// Output: [1, 0, 1]

// // Example 3
// Input: [3, 2, 1]
// Output: [9, 4, 2]
function squareNum(arr) {
    return arr.filter((squ) => squ * squ);
}
console.log(squareNum([3, 2, 1]));
console.log(squareNum([-1, 0, 1]));
console.log(squareNum([2, 4, 6, 8, 10]));