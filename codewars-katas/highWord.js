// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

function high(x) {

    const wordArr = x.split(' ');

    const score = word => [...word].reduce((acc, char) => acc + (char.charCodeAt(0) - 96), 0);

    return wordArr.reduce((highest, word) => score(word) > score(highest) ? word : highest, wordArr[0]);
}
console.log(high('man i need a taxi up to ubud'));
console.log(high('what time are we climbing up the volcano'));