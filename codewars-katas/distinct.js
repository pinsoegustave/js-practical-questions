function distinct(a) {
    const result = []
    const b = new Set(a);
    result.push(...b);
    
    // result.add(b);
    return result;
}
console.log(distinct([1,-1,4,5,4,3,2,2,3,4,2]));