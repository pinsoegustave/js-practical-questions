abstract class Shape {
    constructor(public name: string, public color: string) {
    
    }
    abstract drag(): void;
    abstract resize(): void;


}

class Circle extends Shape {
  drag(): void {
      console.log(`Moving the ${this.name} coloured ${this.color}`)
  }
  resize(): void {
      console.log(`Resizing the ${this.name} coloured ${this.color}`)
  }
}
class Triangle extends Shape {
    drag(): void {
        console.log(`Moving the ${this.name} coloured ${this.color}`)
    }
    resize(): void {
        console.log(`Resizing the ${this.name} coloured ${this.color}`)
    }
}
class Quadrilateral extends Shape {
    drag(): void {
        console.log(`Moving the ${this.name} coloured ${this.color}`)
    }
    resize(): void {
        console.log(`Moving the ${this.name} coloured ${this.color}`)
    }
}

const shape1 = new Quadrilateral("Squares", "red");
shape1.drag();
shape1.resize();

const shape2 = new Triangle("isosceles", "blue");
shape2.drag();
shape2.resize();

const shape3 = new Circle("coins", "brown");
shape3.drag();
shape3.resize();

console.log(shape1);