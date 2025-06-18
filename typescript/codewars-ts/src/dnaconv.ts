
export function DNAtoRNA(dna: string): string {

    const arr = dna.split(' ');

    return arr.map((e) => e.replace(/T/g, 'U')).join();

    //2nd alternative('for es2021 lib compiler')
    // return dna.replaceAll('T', 'U');
}

console.log(DNAtoRNA('TTTT'));
console.log(DNAtoRNA('GCAT'));
console.log(DNAtoRNA('GCGCAGCAA'));