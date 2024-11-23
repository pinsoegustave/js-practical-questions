const array = [1, 2, 3, 4, 5, 6];

const [first, second, third] = array;

console.log(first);   //returns 1
console.log(second); // returns 2
console.log(third);  // returns 3

//u can skip some elements in an array with destructuring.
const [a, ,c] = array;
console.log(a);  // returns 1
console.log(c);  // returns 3

//u can capture remaining elements in an array with destructuring using rest syntax
const [x, y, z, ...rest] = array;
console.log(...rest);

//u can provide default values for variables in case the array is undefined
const names = ["Mucyo", "Ntwali"]
const [m, n, o ="Ozumba mbadiwe"] = names;

console.log(o);