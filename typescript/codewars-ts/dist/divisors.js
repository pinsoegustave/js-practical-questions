"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divisors = divisors;
function divisors(n) {
    let count = 0;
    for (let i = 0; i <= n; i++) {
        if (n % i == 0) {
            count = count + 1;
        }
    }
    return count;
}
console.log(divisors(10));
console.log(divisors(1));
console.log(divisors(11));
console.log(divisors(54));
