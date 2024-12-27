const obj = {};
const a = Symbol("a");
const b = Symbol.for("b");

obj[a] = "localSymbol"
obj[b] = "globalSymbol"

const objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols.length);
console.log(objectSymbols);
console.log(objectSymbols[0]);