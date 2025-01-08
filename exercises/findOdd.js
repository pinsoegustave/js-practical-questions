const array = [10, 20, 30, 40, 50]

const numbers = array.filter((_, index) => index % 2 !== 0);

console.log(numbers);