function filterPrimeNumbers(arr){
    return arr.filter((ele) => ele % ele === 1 && ele % 1 === ele);
}
console.log(filterPrimeNumbers([4, 7, 12, 11, 15, 17, 20, 23]));