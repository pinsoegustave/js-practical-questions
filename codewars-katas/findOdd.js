//Given an array of integers, find the one that appears an odd number of times.

function findOdd(arr) {
    let result = 0;

    for (let num of arr) {
        result ^= num;
    }
    return result;
}
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));