
export function countBy(x: number, n: number): number[] {

    const newArr: number[] = []

    for (let i = 1; i <= n; i++) {
        newArr.push(x * i);
    }
    return newArr
}
console.log(countBy(1, 10));
console.log(countBy(2, 5));