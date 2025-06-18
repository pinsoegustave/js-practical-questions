function calculateTax(income: number, taxYear = 2021): number {
    
    if (taxYear < 2020)
        return income * 1.2

    return income * 1.3;
}

console.log(calculateTax(20_000))