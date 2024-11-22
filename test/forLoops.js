const numbers = [ 19, 84, 43, 87, 90, 32];

const products = [
    {
        name: "Apple Mac",
        price: "3000",
        count: 32,
    },
    {
        name: "Microsoft",
        price: "2400",
        count: 10
    },
    {
        name: "Lenovo",
        price: "2500",
        count: 50
    }
]

// for (let num in numbers) {
//     console.log(num);
// }

for (let num of numbers) {
    console.log(num);
}

for (let prod in products) {
    console.log(products[prod]);
}