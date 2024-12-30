// 3. **String Search:**
//     - Write a function that takes a sentence and a word as input. Check if the word exists in the sentence using `includes`. If it exists, return the position of the word using `indexOf`.

function searchFunc(sentence, word) {
    if (sentence.includes(word)) {
        const index = sentence.split(' ').indexOf(word);

        return index;
    }
}
console.log(searchFunc("codewars is the bang bing chain website application", "website"));