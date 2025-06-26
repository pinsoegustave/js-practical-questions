abstract class Cars {
    constructor(public pistons: number) {
        
    }

    abstract makeSound(): void;
}

class Engine extends Cars {
    makeSound(): void {
        console.log("Bruuu vruuuuu!!!")
    }
}

const lexus = new Engine(8);
lexus.makeSound();