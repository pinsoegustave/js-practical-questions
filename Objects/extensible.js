// Object.isExtensible: checks if an object is extensible(meaning they can be added properties to)
// Object.preventExtension: prevents the objects to be extensible
const object = {}

console.log(Object.isExtensible(object));

Object.preventExtensions(object);

console.log(Object.isExtensible(object));