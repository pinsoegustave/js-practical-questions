// Write a function that filters words longer than 5 characters.
// Examples:
// Example 1
// Input: ['apple', 'banana', 'cherry', 'date', 'elderberry']
// Output: ['banana', 'elderberry']

// Example 2
// Input: ['cat', 'dog', 'elephant', 'fox', 'butterfly']
// Output: ['elephant', 'butterfly']

// Example 3
// Input: ['a', 'be', 'cat', 'dog', 'mouse']
// Output: []

function getLongWords(arr) {
    return arr.filter((word) => word.length > 5);
}

console.log(getLongWords(['a', 'be', 'cat', 'dog', 'mouse']))
console.log(getLongWords(['cat', 'dog', 'elephant', 'fox', 'butterfly']))
console.log(getLongWords(['apple', 'banana', 'cherry', 'date', 'elderberry']))