// Odd Squares
// You are given an array of numbers. Your task is to implement a function called oddSquares that filters out the even numbers from the array and then maps the remaining numbers to their squares.
// Example:
// oddSquares([1, 2, 3, 4, 5, 6]); // should return [1, 9, 25]
// oddSquares([10, 15, 20, 25, 30]); // should return [225, 625]

function oddSquares(array) {
    return array.filter(ele => ele % 2 === 1).map(num => num * num);
}
console.log(oddSquares([1, 2, 3, 4, 5, 6]));
console.log(oddSquares([10, 15, 20, 25, 30]));