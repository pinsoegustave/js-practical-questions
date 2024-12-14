//return the total number of smiling faces in the array
function countSmileys(arr) {
    const tester = /^[:;][-~]?[)D]$/

    const checker = arr.filter(ele => tester.test(ele)).length


    console.log(checker);
}

countSmileys([':D',':~)',';~D',':)',';*']);
// countSmileys([]);
// countSmileys([':D',':~)',';~D',':)',':D',':~)',';~D',':)']);
countSmileys([':]', ';[', ':*', ';$',':D']);  // 1