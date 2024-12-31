// 6. Find the Maximum and Minimum
// To find the largest and smallest elements in an array:

function findMaxMin(arr) {
    let max = -Infinity
    let min = Infinity

    for (const num of arr) {
        if (num > max) max = num
        if (num < min) min = num
    }

    return { max, min }
}
const data = [5, 12, 8, 1, 19];
console.log(findMaxMin(data)); // { max: 19, min: 1 }