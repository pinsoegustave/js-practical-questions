const text = "5"

let padded = text.padStart(10, "0");
let endPadded = text.padEnd(5, "#");

console.log(endPadded);
console.log(padded);