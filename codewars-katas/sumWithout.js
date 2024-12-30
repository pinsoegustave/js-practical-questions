// Function to get the sum of array numbers
function sumArray(array) {
    if (!array || array.length <= 2) return 0;
  
  const maxNum = Math.max(...array);
  const minNum = Math.min(...array);
  
  let minRemoved = false
  let maxRemoved = false
  
  const digArr = array.filter(digit => {
    if (digit === maxNum && !maxRemoved) {
        maxRemoved = true;
        return false;
    }
    if (digit === minNum && !minRemoved) {
        minRemoved = true;
        return false;
    }
    return true;
});

  const solution = digArr.reduce((acc, num) => acc + num, 0)
  
  return solution;
}
console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([]));
console.log(sumArray([3]));
console.log(sumArray([3, 5]));
console.log(sumArray([ 0, 1, 6, 10, 10 ]));