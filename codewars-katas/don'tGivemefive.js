// Fucntion to return numbers without 5
function dontGiveMeFive(start, end) {
  
    var count = 0
    
    for (let a = start; a <= end; a++) {
      if (!String(a).includes(5)) {
        count++;
      }
    }
    // const result = count.toString().split('').map(Number).length;
    return count;
}
console.log(dontGiveMeFive(1,9));
console.log(dontGiveMeFive(4,17));