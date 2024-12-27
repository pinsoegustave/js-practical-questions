// getOwnPropertyNames: returns an array of all properties' names
const obj1 = {
    name: "Gustave",
    class: "AUCA2",
    age: 12,
    value: "$200M"
}

console.log(Object.getOwnPropertyNames(obj1));

const arr = ["a", "b", "c", "d"];
console.log(Object.getOwnPropertyNames(arr).sort());

const obj = { 0: 'a', 1: 'b', 2: 'c' }
console.log(Object.getOwnPropertyNames(obj).sort());

Object.getOwnPropertyNames(obj).forEach((val, idx, array) => {
    console.log(`${val} -> ${obj[val]}`);
})