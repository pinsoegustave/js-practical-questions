const obj = {
    prop() {

    },
    foo: "bar",
};

obj.foo = "beekz"
obj.lumpy = "woof"
delete obj.prop;

//Freeze
const o = Object.freeze(obj);

console.log(o === obj);

console.log(Object.isFrozen(obj));

obj.foo = "quux"
obj.quaxxor = "the friendly duck";

function fail() {
    "use strict"
    obj.foo = "sparky";
    delete obj.foo;
    delete obj.quaxxor;
    obj.sparky = "arf";
}; 
console.log(fail());