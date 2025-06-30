"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feast = feast;
function feast(beast, dish) {
    if (beast[0] && dish[0] == beast.charAt(beast.length - 1) && dish.charAt(dish.length - 1)) {
        return true;
    }
    else {
        return false;
    }
}
