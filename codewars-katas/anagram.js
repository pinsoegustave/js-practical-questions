// write the function isAnagram
var isAnagram = function(test, original) {
    const testLow = test.toLowerCase();
    const origLow = original.toLowerCase();
    
    let testArr = testLow.split('').sort((a, b) => a.localeCompare(b));
    let origArr = origLow.split('').sort((x, y) => x.localeCompare(y));
    
    return testArr.length === origArr.length && testArr.every((ele, index) => ele === origArr[index]);
  
};

console.log(isAnagram("foefet", "toffee")); 