// Write a function sumUnique that takes an array of numbers as an argument and returns the sum of the elements that appear only once in the array.

function sumUnique(arr) {
    return arr.filter((num) => arr.indexOf(num) === arr.lastIndexOf(num)).reduce((sum, num) => sum + num, 0);
}
console.log(sumUnique([1, 2, 2, 3, 4, 4, 5]));