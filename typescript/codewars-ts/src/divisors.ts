export function divisors(n: number) {
  // your code here
  let count = 0;
  for(let i = 0; i <= n; i++) {
    if (n % i == 0) {
      count = count + 1;
    }
    // console.log(i)
  }
  return count;
}
console.log(divisors(10));
console.log(divisors(1));
console.log(divisors(11));
console.log(divisors(54));