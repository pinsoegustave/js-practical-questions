function duplicateCount(text) {
    const obj = { }

    const arr = text.split('')
    console.log(arr);
    arr.forEach(element => {
        obj[element] = ( obj[element] || 0 ) + 1; 
    });  

    console.log(Object.entries(obj).filter(([key, val]) => val > 1).length);
}
duplicateCount('aabbcde');