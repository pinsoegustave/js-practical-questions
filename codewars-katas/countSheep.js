function countSheep( sheep ) {
    return sheep.filter((sheep, count) => sheep + count).length;
}

console.log(countSheep([true, false, true, true, false, true]))