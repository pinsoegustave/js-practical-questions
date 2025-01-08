// Your task is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position.
// **"Hello!" => "Holle!"
// "Tomatoes" => "Temotaos"
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"**

function reverseVowel(str) {
    const vowels = "aeiouAEIOU"

    const reversedVowels = str.split('').filter(char => vowels.includes(char)).reverse();

    let vowelIndex = 0;

    return str.split('').map(char => (vowels.includes(char) ? reversedVowels[vowelIndex++] : char)).join('');
}
console.log(reverseVowel("Tomatoes"));
console.log(reverseVowel("kjlsfgjksl"));