// 3. Filter Elements by Condition
// To filter elements that meet a specific condition (e.g., even numbers):

function filterEvenNumbers(arr) {
    const evens = [];

    for (const num of arr) {
        if(num % 2 === 0) {
            evens.push(num);
        }
    }
    return evens;
}
const data = [1, 2, 3, 4, 5, 6];
console.log(filterEvenNumbers(data)); // [2, 4, 6]