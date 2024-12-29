// function sayHi() {
//     console.log(`Hi, my name is ${this.firstName}!`);
// }

const person = {
    firstName: "John",
    sayHi() {
        console.log(`Hi, my name is ${this.firstName}!`);
    }
};
setTimeout(person.sayHi.bind(person), 1000);

// setTimeout(function () {
//     person.sayHi();
// }, 1000);

// const greet = person.sayHi;
// greet();

// person.sayHi = sayHi
// person.sayHi();