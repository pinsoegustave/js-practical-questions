// B. Validate Input
// Use logical operators to validate multiple conditions.

// Example: Check if Password is Valid

function isValidPassword(password) {
    return password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password);
}
console.log(isValidPassword("Pass1234")); // true
console.log(isValidPassword("short"));    // false