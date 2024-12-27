const inventory = [
    { name: "asparus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
];

const results = Object.groupBy(inventory, ({ type }) => type );
console.log(results);

function myCallBackFn({ quantity}) {
    return quantity > 5 ? "ok" : "restock";
}

const result2 = Object.groupBy(inventory, myCallBackFn);
console.log(result2);