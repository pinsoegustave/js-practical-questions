function automorphic(n){  
    let squareNum = Math.pow(n, 2);

    return squareNum.toString().endsWith(n) ? 'Automorpic' : 'Not!!'
}
console.log(automorphic(225));      