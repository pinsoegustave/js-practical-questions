function getMultiples (number) {
    let multiples = [];
    if (number < 0) return 0

    for (let a = 1; a < number; a++) {
        multiples.push(a);
    }
    return multiples.map(ele => {
        if(ele % 3 === 0 || ele % 5 === 0) {
            return ele;
        } else {
            return null;
        }
    }).filter(num => num !== null).reduce((acc, curr) => acc + curr, 0);

    
    
}
console.log(getMultiples(10))