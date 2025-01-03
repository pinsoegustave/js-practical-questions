function towerBuilder(nFloors) {
    // build here

    let triangleArr = [];

    for(let a = 0; a < nFloors; a++) {
        
        const spaces = " ".repeat(nFloors - a - 1);
        const stars = "*".repeat(2 * a + 1);

        triangleArr.push(spaces + stars + spaces);
    }

    return triangleArr;
}
console.log(towerBuilder(3));