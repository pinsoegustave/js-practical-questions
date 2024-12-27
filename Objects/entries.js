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
// Iterating through objects
for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`)
}

const arrayLike = {
    0: "a", 1: "b", 3: "c"
}
const oneArray = Object.entries(arrayLike);
// Get one array of all key and values from an object
const solution = oneArray.flat(Infinity); 
console.log(solution);

//used on primitives
console.log(Object.entries("foobar")); //Strings have indices as enumerable own properties

console.log(Object.entries(100)); //returns [] // Only strings have enumerable properties, while other primitives return an empty array.

//converting am object to a Map
const obj1 = { foo: "bar", baz: 42 }
const map = new Map(Object.entries(obj1));
console.log(map); // returns Map(2) { 'foo' => 'bar', 'baz' => 42 }