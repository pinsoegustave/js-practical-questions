// Write a function that takes in a string of one or more words and returns the same string, but with all words that have five or more letters reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test"       --> "This is a test."
// "This is another test" --> "This is rehtona test"

function reverseBig(sentence) {
    return sentence.split(' ').map(word => (word.length >= 5 ? word.split('').reverse().join('') : word)).join(' ');
}
console.log(reverseBig("This is another test"));