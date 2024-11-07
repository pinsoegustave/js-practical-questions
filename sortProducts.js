// Function to return object values in the ascending order according to their prices

function sortProducts(products) {
    return products.sort((a, b) => a.price - b.price);
}
const products = [
    {
        name: "Tesla X",
        price: 3000
    },
    {
        name: "BMW",
        price: 4500
    },
    {
        name: "Mercedes Benz",
        price: 1900
    },
    {
        name: "Audi S",
        price: 3400
    },
    {
        name: "Ford Racing",
        price: 2800
    }
];
console.log(sortProducts(products));