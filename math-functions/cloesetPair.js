function findClosestPair(arr) {
    let minDiff = Infinity;
    let closestPair = []

    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length - 1; i++) {
        const diff = Math.abs(arr[i] - arr[i + 1]);
        if (diff < minDiff) {
            minDiff = diff;
            closestPair = [arr[i], arr[i + 1]];
        }
    }

    return closestPair;
}
const numbers = [10, 22, 12, 15, 8, 18];
console.log(findClosestPair(numbers));