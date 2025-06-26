"use strict";
class Cars {
    constructor(pistons) {
        this.pistons = pistons;
    }
}
class Engine extends Cars {
    makeSound() {
        console.log("Bruuu vruuuuu!!!");
    }
}
const lexus = new Engine(8);
lexus.makeSound();
//# sourceMappingURL=abstract.js.map