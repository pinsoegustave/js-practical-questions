// JavaScript Computed Properties

let propname = 'c'

const rank = {
    a: 1,
    b: 2,
    [propname]: 3,
};

console.log(rank.c);

// JavaScript Computed Properties with Classes
const name = 'fullName';

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get [name]() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let person = new Person('Pinsoe', 'Gustave');
console.log(person.fullName);


// JavaScript Computed Property with creating an object from a key-pair value

const createObject = (key, value) => {
    return {
        [key]: value,
    };
};

const person1 = createObject('name', 'John');
console.log(person1);