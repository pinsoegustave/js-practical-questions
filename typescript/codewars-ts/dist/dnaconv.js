"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DNAtoRNA = DNAtoRNA;
function DNAtoRNA(dna) {
    const arr = dna.split(' ');
    return arr.map((e) => e.replace(/T/g, 'U')).join();
}
console.log(DNAtoRNA('TTTT'));
console.log(DNAtoRNA('GCAT'));
console.log(DNAtoRNA('GCGCAGCAA'));
