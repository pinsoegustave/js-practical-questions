const binaryArrayToNumber = arr => {
    your code
    const num = arr.reverse().join('');
    console.log(num);
  
    return parseInt(num, 2);

    // return arr.reduce((a, b) => a << 1 | b);
};
console.log(binaryArrayToNumber([1, 1, 1, 1]));