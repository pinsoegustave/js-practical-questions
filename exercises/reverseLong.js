// Write a function reverseLongestWord that takes a sentence as an argument and returns the longest word in the sentence reversed.
// reverseLongestWord("The question he had was meaningless") 
// // "meaningless" => "sselgninaem"
// reverseLongestWord("I love JavaScript programming")
// // "programming" => "gnimmargorp"
// reverseLongestWord("Exploration of the cosmos is easy")
// // "Exploration" => "noitarolpxe"
function reverseLongestWord(sentence) {
    const longestWord = sentence.split(' ').reduce((longest, current) => current.length > longest.length ? current : longest, "");

    return longestWord.split('').reverse().join('');
}
console.log(reverseLongestWord("The question he had was meaningless"));
console.log(reverseLongestWord("Exploration of the cosmos is easy"))