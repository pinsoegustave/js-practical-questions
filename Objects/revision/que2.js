// 2. **Object Destructuring:**
//     - Given the object:
const gadget = { brand: "Apple", type: "phone", price: 999 };
//     Write a program to destructure and log the `brand` and `price` properties.

const { brand, price } = gadget
console.log(` The brand is ${brand} which costs ${price}`);
