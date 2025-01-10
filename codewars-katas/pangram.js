function isPangram(string){
    //...
    const letters = "abcdefghijklmnopqrstuvwxyz";

    const lowStr = string.toLowerCase();
    return letters.split('').every(ele => lowStr.includes(ele));
}
console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("The quick brofda ovdsader the ladsazy dog."));