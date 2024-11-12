function totalSum(arr) {
    if (arr.length === 0) {
        arr = [0];
    }
    const sum = arr.reduce((acc, num) => acc + num, 0);

    return sum % 2 === 0 ? "even" : "odd"
}

console.log(totalSum([21, 32, 54, 7]));