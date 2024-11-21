const fruits = ['mango', 'banana', 'orange', 'apple'];

//shift removes the first element
let firstFruit = fruits.shift();

console.log(fruits);
console.log(firstFruit);

//using unshift() to add at the beginning
let addFruit = fruits.unshift("grapes", "guava", "mango");
console.log(fruits);
console.log(addFruit);