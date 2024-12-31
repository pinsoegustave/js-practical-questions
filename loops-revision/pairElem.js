// 7. Pair Elements for Custom Operations
// To pair elements and perform operations (e.g., summing pairs):

function sumPairs(arr) {
    const result = []

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            result.push(arr[i] + arr[j]);
        }
    }

    return result;
}
console.log( sumPairs([10, 21, 42]));