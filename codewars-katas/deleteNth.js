
const deleteNth = (arr,n) => {
    // ...
    const newObj = { }
    const result = []

    arr.forEach(item => {
        newObj[item] = ( newObj[item] || 0) + 1;
        if (newObj[item] <= n) {
            result.push(item);
        }

    });

    return result;

}

console.log((deleteNth([20,37,20,21], 1)));    ///should return [20,37,21]
console.log((deleteNth([12,39,19,39,39,19,12], 1)));   // should return [12, 39, 19]