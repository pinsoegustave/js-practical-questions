function getMultiples (number) {
    let multiples = [];

    if (number < 0) return 0
    for (let a = 1; a <= number; a++) {
        multiples.push(a);
    }
    return multiples.map((_, ele) => ele % 3===0);
    
}
console.log(getMultiples(10))