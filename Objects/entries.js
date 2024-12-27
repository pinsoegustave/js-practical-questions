//Obj.entries: returns an array of a given object's own enumerable string-keyed property key-value pairs.

const obj = {
    foo: 'bar',
    baz: 42
}
console.log(Object.entries(obj)); //should [ [ 'foo', 'bar' ], [ 'baz', 42 ] ]

const object1 = {
    a: 'something',
    b: 42
};

for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`)
}

const arrayLike = {
    0: "a", 1: "b", 3: "c"
}
const oneArray = Object.entries(arrayLike);
const solution = oneArray.flat(Infinity);
console.log(solution);