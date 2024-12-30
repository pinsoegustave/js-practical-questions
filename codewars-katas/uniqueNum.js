function findUniq(arr) {
    // do magics
    const freq = { };
    arr.forEach(element => {
        freq[element] = (freq[element] || 0) + 1;
    });

    for (const key in freq) {
        if(freq[key] === 1) {
            return key;
        }
    }
}
console.log(findUniq([1, 0, 0]));
console.log(findUniq([ 3, 10, 3, 3, 3 ]));
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));