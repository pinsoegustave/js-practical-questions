function disemvowel(str) {
    let invalidLetters = 'aeiou';

    const word = Array.from(str).filter(char => !invalidLetters.includes(char));
    return word.join('');
}

console.log(disemvowel("What are you, a communist?"));
console.log(disemvowel("This website is for losers LOL!"));