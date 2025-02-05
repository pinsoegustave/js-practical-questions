class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}
let john = new Person("John Doe");
console.log(john);

console.log(typeof Person);

console.log(john instanceof Person);
console.log(john instanceof Object);