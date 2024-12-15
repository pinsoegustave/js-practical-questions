function strCount(str, letter){  
    //code here
    let count = 0
    for(let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
        // count++;
    }
    return count;
}
console.log(strCount("Heoloolooo", "o"))