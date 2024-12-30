// 1. **Custom Constructor:**
//     - Create a constructor function `Person` that takes `name` and `age` as arguments. Add a method to the prototype called `introduce` that returns a string like `"Hi, I'm [name] and I'm [age] years old."`.

function Person(name, age) {
    this.name = name,
    this.age = age    
}

Person.prototype.introduce = function () {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old`;
}
const person = new Person("Gustaave", 20);
console.log(person.introduce());