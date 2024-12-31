// C. Filtering Data
// Use logical operators in filters.

// Example: Filter Even Numbers Less Than 10

const numbers = [2, 5, 8, 10, 12]
const result = numbers.filter(num => num % 2 === 0 && num < 10);

console.log(result);