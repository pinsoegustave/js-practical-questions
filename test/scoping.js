// { 
//     var animal  = "dog"
//     // console.log(animal)
// }

// console.log(animal);

function getAnimal() {
    var animal = "dog"
    console.log(animal);

    return animal;
}

let closureFunction = getAnimal();
console.log(closureFunction);
