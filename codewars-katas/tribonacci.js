function tribonacci(signature, n){
    //your code here
    if (n <= 1) return [1];

    for (let a = 3; a < n; a++) {
    signature.push(signature[a-1] + signature[a-2]+ signature[a-3]);
    }
    return signature;
    
}
console.log(tribonacci([1, 0, 0], 10));
console.log(tribonacci([1, 2, 3], 10));
