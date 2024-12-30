const obj = { a: 1, b: 2, c: 1, d: 3, e: 2, f: 1 };

const valueCount = {};

for (const key in obj) {
    const value = obj[key];
    valueCount[value] = (valueCount[value] || 0) + 1;
}

console.log(valueCount);