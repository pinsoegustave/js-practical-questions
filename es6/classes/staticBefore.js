class Person {
	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
	static createAnonymous(gender) {
		let name = gender == "male" ? "John Doe" : "Jane Doe";
		return new Person(name);
	}
}

let anonymous1 = Person.createAnonymous("male");
console.log(anonymous1);


let person = new Person('James Doe');
console.log(person)

// createAnonymous(); to make an object static
// function Person(name) {
//     this.name = name;
// }

// Person.prototype.getName = function () {
//     return this.name;
// };

// Person.createAnonymous = function (gender) {
//     let name = gender == "male" ? "John Doe" : "Jane Doe";
//     return new Person(name);
// };

// var anonymous = Person.createAnonymous();
// console.log(anonymous);

