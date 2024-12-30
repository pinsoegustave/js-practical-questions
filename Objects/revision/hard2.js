// 2. **Find the Most Frequent Value in an Object:**
//     - Write a function to find the key corresponding to the most frequently occurring value in an object. For example:
const data = { a: 1, b: 2, c: 1, d: 3, e: 2, f: 1 };
//     The function should return the key `a`, `c`, or `f` (any key with the most frequent value `1`).
function mostFrequentKey(obj) {
    const valueCount = {};
    for (const key in obj) {
        const value = obj[key];
        valueCount[value] = (valueCount[value] || 0) + 1;
    }

    const maxCount = Math.max(...Object.values(valueCount));
    const mostFV = Object.keys(valueCount).find(key => valueCount[key] === maxCount);

    return Object.keys(obj).findAll(key => obj[key] == mostFV);
}
console.log(mostFrequentKey(data));