// 2. **Reduce for Summation:**
//     - Write a function that uses `reduce` to calculate the sum of all elements in an array of numbers.

function reduceSum(arr) {
    return arr.reduce((sum, acc) => sum + acc, 0);
}

console.log(reduceSum([12, 13, 14, 15, 16, 17, 18, 19, 20]));