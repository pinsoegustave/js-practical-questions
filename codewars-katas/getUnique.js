function stray(numbers) {
    // const n = numbers.length;

    // for (let i = 0; i < n - 1; i+=2) {
    //     if (numbers[i] !== numbers[i+1]) {
    //         return numbers[i];
    //     }
    // }

    // return numbers[n - 1];
    return numbers.reduce((acc, num) => acc ^ num);

}
console.log(stray([2,1, 1,])); // should return 2
console.log(stray([1, 1, 2])); // should return 2
