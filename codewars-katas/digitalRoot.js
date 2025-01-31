function digitalRoot(n) {
    // ...
    const numArr = n.toString().split('').reduce((acc, num) => acc + Number(num), 0);
    const redArr = numArr.toString().split('').reduce((acc, num) => acc + Number(num), 0)
    return redArr.toString().split('').reduce((acc, num) => acc + Number(num), 0);
}
// console.log(digitalRoot(421395));
// console.log(digitalRoot(16));
// console.log(digitalRoot(456));
console.log(digitalRoot(118207));