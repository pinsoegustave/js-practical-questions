// Complete the function that

// accepts two integer arrays of equal length
// compares the value each member in one array to the corresponding member in the other
// squares the absolute value difference between those two values
// and returns the average of those squared absolute value difference between each member pair.

const solution = function(firstArray, secondArray) {
  let total = 0;
  const newArr = [];

  for (let i = 0; i < firstArray.length; i++ ) {
    const diff = Math.abs(firstArray[i] - secondArray[i]);

    total += diff * diff;
  }

  return total / firstArray.length;
}

console.log(solution([10, 20, 10, 2], [10, 25, 5, -2]));
console.log(solution([1, 2, 3], [4, 5, 6] ))
console.log(solution([-1, 0], [0, -1]));