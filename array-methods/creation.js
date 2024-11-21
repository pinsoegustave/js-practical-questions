// by using []
const colors = ["red", "green", "blue"];
const numbers = [100, 200, 300, 890];

//by using Array() constructor
const fruits = new Array('apple', 'mango', 'banana', 'orange');
const mixed = new Array('apple', 1, true);

//check an array we use isArray which returns 'true'
console.log(Array.isArray(mixed));
console.log(Array.isArray(colors));

//Whereas typeOf operator is used too, instead it returns object. Because arrays are objects
console.log(typeof mixed);
console.log(typeof colors);