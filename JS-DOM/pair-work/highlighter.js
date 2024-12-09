let paragraph = document.querySelector("#myParagraph").textContent
console.log(paragraph);

const parag = paragraph.split(' ')
console.log(parag);

let sameWords = parag.filter((ele, i) => ele !== '' && parag.indexOf(ele) !== i);
console.log(sameWords);

function countWords(sameWordArray) {
    const wordCount = sameWordArray.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;

        return acc;
    }, {});

    return Object.values(wordCount);
}

const result = countWords(sameWords);
console.log(result);

function findWordsByCount(sameWords, result, targetCount) {
    const wordCounts = sameWords.map((word, index) => ({
        word: word,
        count: result[index]
    }));

    const matchingWords = wordCounts.filter(item => item.count === targetCount);

    return matchingWords.map(item => item.word);
}

const answer1 = findWordsByCount(sameWords, result, 36);
console.log(String(answer1));
const answer2 = findWordsByCount(sameWords, result, 25);
console.log(String(answer2));
const answer3 = findWordsByCount(sameWords, result, 24);
console.log(String(answer3));
const answer4 = findWordsByCount(sameWords, result, 23);
console.log(String(answer4));   
const answer5 = findWordsByCount(sameWords, result, 22);
console.log(String(answer5));

const goodArray = [];
let goods = goodArray.push(String(answer1),String(answer2),String(answer3),String(answer4),String(answer5));
// goodArray.push(String(answer1));
// goodArray.push(answer2);
// goodArray.push(answer3);
// goodArray.push(answer4);
// goodArray.push(answer5);
console.log(goodArray);

const arranged = result.sort((a, b) => b - a);
console.log(arranged);
const solution = arranged.slice(0, 5);
console.log(solution);