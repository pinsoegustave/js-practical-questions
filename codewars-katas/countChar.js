function count(string) {
    // TODO
    if ('') return {};

    const char = { };
    var arr = string.split('');
    console.log(arr);
    
    arr.forEach(element => {
        char[element] = ( char[element] || 0 ) + 1;
    });

    return char;
}
console.log(count("aba"));