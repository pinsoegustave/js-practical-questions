// new.target on Constructors
class Person {
    constructor(name) {
        this.name = name;
        console.log(new.target.name);
    }
}

class Employee extends Person {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
}

let john = new Person("John Doe");
let lily = new Employee("Lily Bush", "Employee");

// console.log(john);



// new.target on Regular functions
// function Person(name) {
//     if ( !new.target) {
//         throw "must have a new operator!"
//     }
//     this.name = name;
// }

// let john = new Person('John');
// console.log(john.name);

// Person('Lily');
// console.log(window.name);