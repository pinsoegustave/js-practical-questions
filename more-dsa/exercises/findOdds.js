// Create a function called findOddsNumbers that takes an array containing both strings and numbers, and returns odd numbers in the array.
// findOddsNumbers([1, 3, 'doe', 3, 10, 11, 'john']) // return [1, 3, 3, 11].
// findOddsNumbers([1, 2, 3, 4, 'cat', 'horse', 7, 'elephant']) => [1, 3, 5, 7]

function findOddsNumbers(array) {
    return array.filter(num => num % 2 !== 0 && num !== String(num));
}
console.log(findOddsNumbers([1, 2, 3, 4, 'cat', 'horse', 7, 'elephant']));
console.log(findOddsNumbers([1, 3, 'doe', 3, 10, 11, 'john']));