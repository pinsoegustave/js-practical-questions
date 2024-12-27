// getPrototypeOf: returns the prototype of the specified object.

const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1);