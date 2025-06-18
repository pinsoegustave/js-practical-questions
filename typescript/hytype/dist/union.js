"use strict";
function kgTolbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else {
        return parseInt(weight) * 2.3;
    }
}
kgTolbs(10);
kgTolbs('40kg');
//# sourceMappingURL=union.js.map