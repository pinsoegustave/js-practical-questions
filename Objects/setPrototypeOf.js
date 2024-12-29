//setPrototypeOf(): method that sets the prototype. the property has to be an object or null

const obj = {}
const parent = { foo: "bar" };

console.log(obj.foo); // returns undefined (you can't access the property unless set)

Object.setPrototypeOf(obj, parent);

console.log(obj.foo); // returns bar

