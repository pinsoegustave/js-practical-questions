// Multiply values in an array and return one value

function multiply(x) {
    return x.reduce((acc, num) => acc * num, 1);
}
console.log(multiply([1, 2, 4, 5, 10]))