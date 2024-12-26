//Calculate the standard deviation of An Array

function calculateStandardDev(arr) {
    const n = arr.length;

    const mean = arr.reduce((a, curr) => a + curr, 0) / n;

    const variance = arr.reduce((b, curr) => b + Math.pow(curr - mean, 2), 0) /n;

    return Math.sqrt(variance);
}
const data = [10, 12, 23, 23, 16, 23, 21, 16];
console.log(calculateStandardDev(data));