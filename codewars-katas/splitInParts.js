var splitInParts = function(s, partLength){
    // Good Luck!
    let chunks = []
  
    for (let a = 0; a < s.length; a+=partLength) {
      chunks.push(s.slice(a, a + partLength))
    }
    
    return chunks.join(' ')
}

console.log(splitInParts('supercalifragilisticexpialidocious', 3));
console.log(splitInParts('HelloKata', 1));