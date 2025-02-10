class Person {
    #firstName;
    #lastName;
    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    getFullName(format = true) {
        return format ? this.#firstLast() : this.#lastFirst();
    }

    #firstLast() {
        return `${this.#firstName} ${this.#lastName}`;
    }
    #lastFirst() {
        return `${this.#lastName}, ${this.#firstName}`;
    }
}

let person = new Person("Ntwali", "Gustmann");
console.log(person.getFullName());