// { 
// var catName = "Cat."

// console.log("block", catName);

// }

// console.log("global", catName);

function createAnimal(){
    var cat = "cat."
}
createAnimal()
console.log("global",cat)  // returns an error: cat is not defined