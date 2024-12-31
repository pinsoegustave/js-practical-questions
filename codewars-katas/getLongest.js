function longest(s1, s2) {
    // your code
    let newStr = s1.split('').sort().join('');
    let newStrr = s2.split('').sort().join('');
    let bigStr = newStr + newStrr
    const bigger = bigStr.split('').sort().join('');
    let uniquees = new Set(bigger);
    const result = Array.from(uniquees).join("");

    return result;
}
console.log(longest("uihnxzblf", "jfiwoejfnjn"));
console.log(longest("aretheyhere", "yestheyarehere")); // return "aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); //"abcdefghilnoprstu"
console.log(longest("inmanylanguages", "theresapairoffunctions")) // return "acefghilmnoprstuy"