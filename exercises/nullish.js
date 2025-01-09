const pharmacy = [
    { type: 'purchase', amount: 50, category: 'groceries' },
    { type: 'sale', amount: 100, category: 'electronics' },
    { type: 'purchase', amount: 30, category: 'books' },
    { type: 'purchase', amount: 45, category: 'clothes' }
];

console.log(pharmacy.type && pharmacy.amount ? "available": "not available");