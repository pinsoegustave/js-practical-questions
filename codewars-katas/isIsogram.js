function isIsogram (str) {
    const word = str.toLowerCase();

    const seenWords = new Set();

    for (let i = 0; i < word.length; i++) {
        const letter = word[i];

        if (seenWords.has(letter)) {
            return false;
        }
        seenWords.add(letter);
    }
    return true;

}
console.log(isIsogram("hfsakdjwer"));
console.log(isIsogram("hffswakdjweer"));