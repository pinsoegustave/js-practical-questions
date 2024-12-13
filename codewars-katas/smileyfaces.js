//return the total number of smiling faces in the array
function countSmileys(arr) {
    const tester = [":",";","-","~",")","D"]
    
    let count = 0;

    // for (let index = 0; index < arr.length; index++) {   
    //     if (!arr.includes(tester)) {
    //         // count = count + 1;
    //         console.log(index);
    //     }
    //     else {
    //         console.log("Array has invalid smiles");
    //     }
    // }
    const checker = arr.filter(ele => !ele.includes(tester)).length
    console.log(checker)
}

countSmileys([':D',':~)',';~D',':)']);
// countSmileys([]);
// countSmileys([':D',':~)',';~D',':)',':D',':~)',';~D',':)']);
// countSmileys([';]', ':[', ';*', ':$', ';-D']);  // 1