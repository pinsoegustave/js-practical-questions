
// Converting a Map to an Object
const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
]);

const obj = Object.fromEntries(entries);
console.log(obj);

//Converting an Array to an Object
const arr = [["a", "100"], ["b", "130"], ["c", "289"]];

const obj1 = Object.fromEntries(arr);
console.log(obj1);

//Object transformations
const object1 = {
    a: 23,
    b: 12,
    c: 9
};
const object2 = Object.fromEntries(
    Object.entries(object1).map(([key, val]) => [key, val*2]),
);

console.log(object2);
