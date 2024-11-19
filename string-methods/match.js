const test = "The rain in SPAIN stays mainly in the plain"

let res = test.match('ain');
// console.log(res);
// console.log(res.index);
// console.log(res.groups);
let [...ans] = test.matchAll(/ain/g);
let [...ans2] = test.matchAll(/ain/gi);
// console.log([...ans]);
// console.log([...ans2]);

let position = test.search('ain');
console.log(position);