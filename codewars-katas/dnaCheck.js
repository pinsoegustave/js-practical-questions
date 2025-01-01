function dnaStrand(dna){
    const complement = {
        "A" : "T",
        "T" : "A",
        "G" : "C",
        "C" : "G"
    };
    
    return dna.split('').map(base => complement[base]).join('')
}
console.log(dnaStrand("AAAA"))