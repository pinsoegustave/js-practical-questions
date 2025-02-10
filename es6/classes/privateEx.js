class Circle {
    #radius = 0;
    static #count = 0;
    constructor(radius) {
        this.radius = radius;
        Circle.#count++;
    }

    get area() {
        return Math.PI * Math.pow(this.#radius, 2);
    }

    set radius(value) {
        if (typeof value === 'number' && value > 0) {
            this.#radius = value;
        }
        else {
            throw 'the radius must be a positive number';
        }
    }

    get radius() {
        return this.#radius;
    }

    /// Checking if the Circle has a private field
    static hasRadius(circle) {
        return #radius in circle;
    }

    static getCount() {
        return Circle.#count;
    }
}


let circle = [new Circle(20), new Circle(40), new Circle(30),new Circle(60), new Circle(50), new Circle(80)];
console.log(Circle.getCount());


// console.log(Circle.hasRadius(circle));


// class Circle {
//     #radius
//     constructor(value) {
//         this.#radius = value;
//     }

//     get area() {
//         return Math.PI * Math.pow(this.#radius, 2);
//     }
// }