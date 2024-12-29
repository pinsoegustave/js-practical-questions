const object = {
    prop: 'exists'
};

console.log(Object.hasOwn(object, 'prop'));
console.log(Object.hasOwn(object, 'toString'));
console.log(Object.hasOwn(object, 'undeclaredPropertyValue'));