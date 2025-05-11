// Write a function which takes in a string and replace all characters with their corresponding numbers in their positions in the alphabet and return an array of those numbers sorted in ascending order
// fedcba —> [1,2,3,4,5,6]
// fhsdkfb

function sortReturned(str) {

    const positions = Array.from(str.toLowerCase()).filter(char => /[a-z]/.test(char)).map(char => char.charCodeAt(0) - 96); 

  return positions.sort((a, b) => a - b);
}
console.log(sortReturned("fedcba"));
console.log(sortReturned("fyufgyudsfhdjncknfhgds"));