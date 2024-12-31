// A. Finding Unique Elements
// Logical XOR (^) can help find unique elements.

// Example: Find the Single Non-Repeated Number

function findSingle(arr) {
    return arr.reduce((acc, num) => acc ^ num, 0);
}

console.log(findSingle([1, 2, 2, 3, 3 ]));