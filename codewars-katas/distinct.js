function distinct(a) {
    const result = new Set(a);
    
    // result.add(a);
    return result.toString();
}
console.log(distinct([1,1,4,5,4,3,2,2,3,4,2]));