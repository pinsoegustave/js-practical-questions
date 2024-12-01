function squareSum(numbers) {
    return numbers.map((num) => Math.pow(num, 2)).reduce((acc, add) => add + acc, 0);
}

console.log(squareSum([1, 2]))