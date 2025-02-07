class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log(`walking on ${this.legs} legs`);
    }
}
class Birds extends Animal {
    constructor(legs) {
        super(legs);
    }

    fly() {
        console.log('flying');
    }
}

let birdPigeon = new Birds(2);
birdPigeon.walk();
birdPigeon.fly();