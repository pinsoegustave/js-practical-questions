"use strict";
function calculateTax(income, taxYear = 2021) {
    if (taxYear < 2020)
        return income * 1.2;
    return income * 1.3;
}
console.log(calculateTax(20000));
//# sourceMappingURL=function.js.map