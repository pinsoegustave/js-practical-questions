function sumDigPow(a, b) {
    // Your code here

    let nums = []
    for (let i = a; i < b; i++) {
        nums.push(i);
    }
    return nums.filter((ele, i) => Math.pow(ele, 2) === ele ? ele.toString().split('') : ele);
    // return nums.map((ele, i) => Math.pow(ele, 2));

    // return nums;
}
console.log(sumDigPow(1, 100));
// console.log(sumDigPow(1, 100));