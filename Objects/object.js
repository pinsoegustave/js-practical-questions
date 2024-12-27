const target = {
    a: 1,
    b: 4
};

const source = {
    b: 8,
    c: 5
};

const returnedTarget = Object.assign(target, source);
console.log(target);
console.log(returnedTarget === target);

//cloning an object
const obj = { a: 1 }
const copy = Object.assign({}, obj);
console.log(copy); 
