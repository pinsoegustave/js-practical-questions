class Animal {
    constructor(legs, wings) {
        this.legs = legs;
        this.wings = wings
    }
    walk() {
        console.log(`The animal is walking with ${this.legs} legs`);
    }
    fly() {
        console.log(`The animal is flying with ${this.wings} wings`);
    }
}

class Bird extends Animal {
    constructor(wings) {
        super(wings);
    }
        
    flying() {
        console.log(`first bird flying with wings`)
    }
}
let pigeon = new Bird(4);
pigeon.flying();