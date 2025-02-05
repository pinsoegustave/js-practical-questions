// getters and setters in normal languages

class Person {
    constructor(name) {
        this.setName(name);
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        newName = newName.trim();

        if (newName === ' ') {
            console.error('The name cannot be empty');
        }
        this.name = newName;
    }
}

let person = new Person('Jane Paul');
console.log(person);

person.setName('Jane Smith');
console.log(person.getName());