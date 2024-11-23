const colors = ["red", "blue", "yellow", ]
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//forEach: executes a provided function once for each array element
colors.forEach((element) => {
    console.log(element);  // returns red, blue, yellow
})

//filter: returns a new array with the elements that pass the condition
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); 

//map: returns a new array after applying the test to each element of an array
const getDoubled = numbers.map((num) => num * 3);
console.log(getDoubled);

//reduce: returns a single value after applying the function to each element
const result = numbers.reduce((acc, num) => acc + num, 0);
console.log(result);
const result2 = numbers.reduce((acc, num) => acc * num, 1);
console.log(result2);