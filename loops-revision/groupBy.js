// 8. Group Elements by Condition
// To group elements into two arrays based on a condition:

function groupByParity(arr) {
    const evens = [];
    const odds = [];

    for (const num of arr) {
        if (num % 2 === 0) {
            evens.push(num);
        } else {
            odds.push(num);
        }
    }

    return { evens, odds}
}
const data = [1, 2, 3, 4, 5, 6];
console.log(groupByParity(data)); // { evens: [2, 4, 6], odds: [1, 3, 5] }
