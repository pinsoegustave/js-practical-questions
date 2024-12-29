const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h'];

// for (let num of numbers) {
//     console.log(num += " ab");
// }
// for (let i = 0; i < alphabet.length; i++) {
//     console.log(alphabet[i+2]);
// }
let count = 0
for (let a = 0; a < numbers.length; a++) {
    let minus = numbers[a+2] - numbers[a]
    console.log(`To get this is ${numbers[a+2]} - ${numbers[a]} = ${minus}`);
}
// console.log(count);
