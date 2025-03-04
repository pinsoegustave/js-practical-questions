function toCamelCase(str) {
    let words = [];
    let word = "";

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char === '-' || char === '_') {
            if (word) {
                words.push(word);
                word = "";
            }
        } else {
            word += char;
        }
    }

    if (word) words.push(word);

    return words.map((word, index) =>
        index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    ).join('');
}

console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The_Stealth-Warrior")); 
console.log(toCamelCase("The_Stealth_Warrior")); 
