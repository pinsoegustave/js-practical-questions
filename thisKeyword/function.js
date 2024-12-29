"use strict"
function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const person = new Person ("Jane", "Peter");
console.log(person);

// console.log(global.firstName);
// console.log(global.lastName);


// "use strict"
// function func() {
//     // "use strict"
//     console.log(this === undefined)

// }

// func();