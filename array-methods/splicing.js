const numbers = [10, 32, 45, 90, 15];

const removedElements = numbers.splice(2, 1, "Gustave", false, 100);
console.log(removedElements);
console.log(numbers);