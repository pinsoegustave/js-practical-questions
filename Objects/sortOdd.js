function sortArray(array) {
    // Return a sorted array.
    let newArr = array.filter((ele) => ele % 2 !== 0).sort((a, b) => a - b);

    let oddIndex = 0;
    let solution = array.map(num => num % 2 !== 0 ? newArr[oddIndex++] : num );

    return solution;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));