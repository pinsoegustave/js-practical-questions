
function Person(name) {
    if ( !new.target) {
        throw "must have a new operator!"
    }
    this.name = name;
}

let john = new Person('John');
console.log(john.name);

Person('Lily');
console.log(window.name);