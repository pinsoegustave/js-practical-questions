// 3. **Array Manipulation:**
//     - Given an array `[1, 2, 3, 4]`, write a function to remove the second element using `splice` and then reverse the array.

function arrManipulate(arr) {
    arr.splice(1, 1);
    return arr.reverse(); 
}
console.log(arrManipulate([1, 2, 3, 4]))