
function arrayStats(arr) {

    const sum = arr.reduce((acc, num) => acc + num, 0);
    const average = sum / arr.length;
    const fixed = average.toFixed(2);
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    return { sum, fixed, min, max }
}
console.log(arrayStats([1, 2, 3, 4, 5])); // should return { sum: 15, average: 3.00, min: 1, max: 5 })