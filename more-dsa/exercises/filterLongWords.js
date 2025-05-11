function filterLongWords(arr) {
    return arr.filter((word) => word.length > 5);
}

console.log(filterLongWords(['apple', 'banana', 'cherry', 'date', 'elderberry']))
console.log(filterLongWords(['cat', 'dog', 'elephant', 'fox', 'butterfly']))
console.log(filterLongWords(['a', 'be', 'cat', 'dog', 'mouse']))