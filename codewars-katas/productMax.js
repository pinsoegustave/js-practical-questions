function maxProduct(numbers, size){
    //your code here
    const getMax = numbers.sort((a, b) => a - b);
    const newArr = getMax.slice(-size);
    return newArr.reduce((acc, num) => acc * num, 1);
    
}
console.log(maxProduct([14, 29, -28, 39, -16, -48], 4));
console.log(maxProduct([10, 2, 3, 8, 1, 10, 4], 5));