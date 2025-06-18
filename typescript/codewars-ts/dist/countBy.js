"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countBy = countBy;
function countBy(x, n) {
    const newArr = [];
    for (let i = 1; i <= n; i++) {
        newArr.push(x * i);
    }
    return newArr;
}
console.log(countBy(1, 10));
console.log(countBy(2, 5));
