"use strict";
class Animal {
    makeSound() {
        console.log('Making animal sound');
    }
}
class Dog extends Animal {
    makeSound() {
        console.log('Bark');
    }
}
let animal;
animal = new Dog();
animal.makeSound();
//# sourceMappingURL=moveriding.js.map