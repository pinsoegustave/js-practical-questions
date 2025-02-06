// getters and setters in normal languages

// class Person {
//     constructor(name) {
//         this.setName(name);
//     }
//     getName() {
//         return this.name;
//     }
//     setName(newName) {
//         newName = newName.trim();

//         if (newName === ' ') {
//             console.error('The name cannot be empty');
//         }
//         this.name = newName;
//     }
// }

// let person = new Person('Jane Paul');
// console.log(person);

// person.setName('Jane Smith');
// console.log(person.getName());

class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    // set name(newName) {
    //     newName = newName.trim();
    //     if (newName === '') {
    //         throw new Error("The name cannot be empty!");
    //     }
    //     this._name = newName;
    // }
}
let person = new Person("Wamuuuzolo bodo");
console.log(person.name);

person.name = 'Jane Smith';
console.log(person.name); // Jane Doe