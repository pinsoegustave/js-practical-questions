function kgTolbs(weight: number | string): number {

    if (typeof weight === 'number') 
        return weight * 2.2
    else {
        return parseInt(weight) * 2.3
    } 
}
kgTolbs(10)
kgTolbs('40kg');