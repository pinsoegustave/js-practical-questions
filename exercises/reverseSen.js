// Write a function that takes a sentence and reverses the order of the words. Each word is separated by a single space, and there are no extra spaces at the beginning or end of the sentence.
// Input: “The greatest victory is that which requires no battle”

// Output: “battle no requires which that is victory greatest The”

function reverseSentence(str) {
    return str.split(" ").reverse().join(" ");
}
console.log(reverseSentence("The greatest victory is that which requires no battle"))