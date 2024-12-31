// 2. Add Two Random Elements
// To add two randomly selected elements from an array:

function addRandom(arr) {
    const index1 = Math.floor(Math.random() * arr.length);

    let index2;

    do {
        index2 = Math.floor(Math.random() * arr.length);
    }
    while (index1 === index2) {
        return arr[index1] + arr [index2];
    }
}
const numbers = [10, 20, 30, 40];
console.log(addRandom(numbers)); // e.g., 50 or 70