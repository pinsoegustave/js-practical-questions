// ### **Step 3: Array Methods**

// 1. **Filter and Map:**
//     - Create a function that takes an array of numbers as input, filters out the even numbers, and returns their squares in a new array.

function takeSquares(arr) {
    return arr.filter(num => num % 2 === 0).map((ele) => ele*ele);
}
console.log(takeSquares([12, 13, 14, 15, 16, 17, 18, 19, 20]));