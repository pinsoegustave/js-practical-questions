function check( str) {
    const word = str.toLowerCase();
    const regex = (/([a-z]).*\1/);
    return !regex.test(word);
}

console.log(check("fsdhuiwe"));
console.log(check("fsdhuiwee"));
console.log(check("hello"));