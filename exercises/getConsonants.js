// Complete the function that takes a string of English-language text and,
//returns the number of consonants in the string.Consonants are all letters
// used to write English excluding the vowels a, e, i, o, u(CaseInsensitive). 

// TestCases:
//  dotest('bcdfghjklmnpqrstvwxyz') output:21;
//  dotest('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ') output: 42
//  dotest('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#') output: 42
function getConsonants(text) {
    let vowels = "aeiouAEIOU";

    return text.split("").filter((ele) => /[^a-zA-Z0-9\s]/g.test(ele) && !vowels.includes(ele)).join('').length;
}
console.log(getConsonants("abcdefghijk#$$%^&*#"))