function sumDigPow(a, b) {
    const result = [];

    for (let num = a; num <= b; num++) {
    const newArr = num.toString().split('');

    const powArr = newArr.map((ele, index) => Math.pow(ele, index+1));

    // const summation = powArr.reduce((acc, curr) => acc + curr, 0);

    result.push(num);

    }
  return result;
}
console.log(sumDigPow(1, 100));
