// Write a function called oddball_sum which takes in a list of numbers and returns the sum of all the odd elements.

function oddball_sum(numbers) {
    return numbers.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);
}
console.log(oddball_sum([1, 3, 5, 7]))