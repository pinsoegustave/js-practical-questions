// 5. Transform Array Elements
// To apply a transformation (e.g., square each number):

function squareNumbers(arr) {
    const squared = []

    for (const num of arr) {
        squared.push(num * num);
    }

    return squared;
}
const data = [1, 2, 3, 4];
console.log(squareNumbers(data)); // [1, 4, 9, 16]