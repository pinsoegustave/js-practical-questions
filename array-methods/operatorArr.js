const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["Orange","Banana","Apple","Lemon"];

const copyNumbers = [...arr1];

console.log(copyNumbers);   // returns [1, 2, 3, 4, 5]
console.log(copyNumbers === arr1);   // return false

// spread operator can be used to concatenate
const concatenated = [...arr1, ...arr2];
console.log(concatenated);   // returns [1, 2, 3, 4, 5, "Orange","Banana","Apple","Lemon"]

//spread operator can be used to pass individual array elements as arguments to a function
function sum(a, b, c) {
    return a + b + c;
}
const result = sum(...arr1);
console.log(result);   //returns 6

//spread operator can be used to find min or max in the array
const MaxNumber = Math.max(...arr1);   // returns 5
const minNumber = Math.min(...arr1);  // return 1

console.log(`${MaxNumber} , ${minNumber}`);

