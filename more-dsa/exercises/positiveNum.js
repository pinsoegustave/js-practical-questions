function filterPositiveNumbers(arr) {
    return arr.filter((num) => num >= 0);
}

console.log(filterPositiveNumbers([-3, 5, -1, 0, 8, -4, 7]))
console.log(filterPositiveNumbers([-1, -2, -3, -4]))
console.log(filterPositiveNumbers([10, 20, 30, 40]))