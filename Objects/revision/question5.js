// 5. **Iterating Through an Object:**
//     - Given the object:
const scores = {
    math: 90,
    science: 85,
    history: 88
};
//     Write a program that logs each key-value pair in the object using a loop.

for (let [key, value] of Object.entries(scores)) {
    console.log(`The key-value pairs are: ${key} - ${value}`)
}
// console.log(Object.entries(scores));