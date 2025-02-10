// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

function high(str) {

    // 1st Approach
    const alphabetScores = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10,
        k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20,
        u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    };

    const words = str.split(' ');
    const wordScores = {}; 


    words.forEach(word => {
        wordScores[word] = [...word].reduce((acc, char) => acc + alphabetScores[char], 0);
    });

    return Object.keys(wordScores).reduce((highest, word) => 
        wordScores[word] > wordScores[highest] ? word : highest
    );

    // 2nd Approach
    // const wordArr = x.split(' ');

    // const score = word => [...word].reduce((acc, char) => acc + (char.charCodeAt(0) - 96), 0);

    // return wordArr.reduce((highest, word) => score(word) > score(highest) ? word : highest, wordArr[0]);
}
console.log(high('man i need a taxi up to ubud'));
console.log(high('what time are we climbing up the volcano'));