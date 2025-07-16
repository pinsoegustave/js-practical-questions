function incrementString (strng) {
   
    if (strng === '') {
        return '1';
    }
    const checkNum = strng.split('').filter(num => isNaN(num) === false).join('');
    return Number(checkNum) + 1;
    
}
console.log(incrementString("foobar000"));
console.log(incrementString("foobar999"));
console.log(incrementString("foobar00999"));
console.log(incrementString("foo"));
console.log(incrementString(""));
console.log(incrementString("1"));