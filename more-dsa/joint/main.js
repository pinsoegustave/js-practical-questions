let x = 10;
let y = 5;

// Arithmetic
console.log(x + y); // 15

// Comparison
console.log(x > y); // true

// Logical
console.log(x > 5 && y < 10); // true

// Ternary
let result = x > y ? "X is larger" : "Y is larger";

// Nullish Coalescing
let userInput = null;
let defaultVal = userInput ?? "Default"; // "Default"

// Optional Chaining
let user = { profile: { name: "Alex" } };
console.log(user.profile?.name); // "Alex"
console.log(user.address?.city); // undefined





