const text = "The morning is upon us."

console.log(text.slice(12));
console.log(text.substring(12));
// substring doesnot accept the negative indexes, it starts from 0
console.log(text.slice(13, 16));
console.log(text.substring(13, 16));
// when the endValue is greater than the startValue, substring swaps them
console.log(text.substring(16, 13));
console.log(text.slice(16, 13));
console.log(text.slice(-8, -4));  // returns 'upon'
console.log(text.substring(-8, -4)); // returns ''

console.log(text.slice(-8, 4));  // returns ''  
console.log(text.substring(-8, 4));  // returns 'The'  

console.log(text.slice(8, -4)); // returns 'ing is upon' 
console.log(text.substring(8, -4)); // returns 'The morn' 

console.log(text.substr(3, 3));