function transactionFilter(purchases) {
    const type = purchases.filter((action) => action.type === 'purchase' && action.amount > 40).sort((a, b) => b.amount - a.amount);

    return type;
}

const pharmacy = [
    { type: 'purchase', amount: 50, category: 'groceries' },
    { type: 'sale', amount: 100, category: 'electronics' },
    { type: 'purchase', amount: 30, category: 'books' },
    { type: 'purchase', amount: 45, category: 'clothes' }
]

console.log(transactionFilter(pharmacy));