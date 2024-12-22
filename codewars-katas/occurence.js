function findOdd(A) {
    let result = 0;

    for(let num of A) {
        result ^= num;
    }
    return result;
}
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));   //should return 4 
