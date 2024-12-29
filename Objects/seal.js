const object = {
    property: 42
}

console.log(Object.isSealed(object));

Object.seal(object);

console.log(Object.isSealed(object));

const obj = {
    prop() {},
    foo: 'bar',
};

obj.foo = "baz";
obj.lumpy = "woof"
delete obj.prop;

const o = Object.seal(obj);

console.log(o === obj);
console.log(Object.isSealed(obj));

//changing values of existing properties 
// still works
obj.foo = "quux"
console.log(obj.foo);

Object.seal(obj);

delete obj.foo
console.log(obj.foo);
console.log(Object.isSealed(true));