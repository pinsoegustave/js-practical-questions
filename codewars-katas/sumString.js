function sumStrings(a,b) { 
    const numA = a.split('').join() 
    const numB = b.split('').join()
    console.log(numA);
    console.log(numB);
    const result = numA + numB
    console.log(result)
}

console.log(sumStrings('123', '456'));

// return 579