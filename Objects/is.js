// Object.is(): a boolean indicating whether the two values are the same.
// case 1: Evaluation result is the same as ===
console.log(Object.is("foo", "foo"));
console.log(Object.is(25, 25));
console.log(Object.is("foz", "far"));
console.log(Object.is(null, null));
// console.log(Object.is(window, window));

const foo = { a: 1}
const samefoo = foo
const bar = { a: 1}

console.log(Object.is(foo, foo));
console.log(Object.is(foo, bar));

//Case 2: Signed zero
console.log(Object.is(+0, -0));
console.log(Object.is(-0, -0));
console.log(Object.is(0, +0));

//Case 3: NaN
console.log(Object.is(NaN, 0 / 0));
console.log(Object.is(NaN, Number.NaN))