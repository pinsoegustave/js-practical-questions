donuts = [ 
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45},
    { type: "Cider", cost: 1.59},
    { type: "Boston Cream", cost: 5.99}
]

donuts.forEach(( donut) => {
    let sentence = `${donut.type} cost $${donut.cost} each`;
    console.log(sentence);
})