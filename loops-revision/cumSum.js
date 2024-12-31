// 4. Perform a Cumulative Sum
// To calculate the cumulative sum of elements in an array:

function cumulativeSum(arr) {
    const result = [];
    let sum = 0;

    for (const num of arr) {
        sum += num;
        result.push(sum);
    }

    return result;
}
const data = [1, 2, 3, 4];
console.log(cumulativeSum(data)); // [1, 3, 6, 10]