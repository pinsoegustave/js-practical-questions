const object1 = {
    property1: 42,
};

const descriptor = Object.getOwnPropertyDescriptor(object1, 'property1');

console.log(descriptor.configurable);
console.log(descriptor.value);

let o, d;

o = {
    get foo() {
        return 17;
    }, 
};

d = Object.getOwnPropertyDescriptor(o, "foo");
console.log(d);

o = { bar: 42 }
d = Object.getOwnPropertyDescriptor(o, "bar");
console.log(d);