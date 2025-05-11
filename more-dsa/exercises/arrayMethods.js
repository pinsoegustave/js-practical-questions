// const arr = [10, 20, 22, 12, 13, 15, 19, 14]

// Here's the implementation of the four methods: `myMap`, `myFilter`, `myReduce`, and `myForEach` from scratch:

// ### Code:
// ```javascript
// // 1. myMap
Array.prototype.myMap = function (callbackFn) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      result.push(callbackFn(this[i], i, this));
    }
  }
  return result;
};

// // 2. myFilter
// Array.prototype.myFilter = function (callbackFn) {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     if (this.hasOwnProperty(i) && callbackFn(this[i], i, this)) {
//       result.push(this[i]);
//     }
//   }
//   return result;
// };

// // 3. myReduce
// Array.prototype.myReduce = function (callbackFn, initialValue) {
//   let accumulator = initialValue !== undefined ? initialValue : this[0];
//   let startIndex = initialValue !== undefined ? 0 : 1;

//   for (let i = startIndex; i < this.length; i++) {
//     if (this.hasOwnProperty(i)) {
//       accumulator = callbackFn(accumulator, this[i], i, this);
//     }
//   }
//   return accumulator;
// };

// // 4. myForEach
// Array.prototype.myForEach = function (callbackFn) {
//   for (let i = 0; i < this.length; i++) {
//     if (this.hasOwnProperty(i)) {
//       callbackFn(this[i], i, this);
//     }
//   }
// };
// ```

// ---

// ### Example Usage:

// #### `myMap`
// javascript
const nums = [1, 2, 3, 4];
const squared = nums.myMap(num => num * num);
console.log(squared); // Output: [1, 4, 9, 16]
// ```

// #### `myFilter`
// ```javascript
// const nums = [1, 2, 3, 4];
// const even = nums.myFilter(num => num % 2 === 0);
// console.log(even); // Output: [2, 4]
// ```

// #### `myReduce`
// ```javascript
// const nums = [1, 2, 3, 4];
// const sum = nums.myReduce((acc, num) => acc + num, 0);
// console.log(sum); // Output: 10
// ```

// #### `myForEach`
// ```javascript
// const nums = [1, 2, 3, 4];
// nums.myForEach(num => console.log(num * 2));
// // Output:
// // 2
// // 4
// // 6
// // 8
// ```

// ---

// ### Explanation:
// 1. **`myMap`**:
//    - Creates a new array, applies the callback function to each element, and pushes the result into the new array.

// 2. **`myFilter`**:
//    - Creates a new array, tests each element with the callback function, and pushes it into the new array if the test passes.

// 3. **`myReduce`**:
//    - Iteratively applies the callback function to an accumulator and the current element, updating the accumulator at each step.

// 4. **`myForEach`**:
//    - Loops through the array and applies the callback function to each element.

// These methods mimic the behavior of their built-in counterparts and should work with arrays of any type.