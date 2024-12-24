//short date format "MM/DD/YYYY"
const date = new Date("03/25/2015");
console.log(date);

//long date format "MMM DD YYYY"
const date2 = new Date("Jul 1 2020");
console.log(date2);

const date3 = new Date("1 Jul 2020");
console.log(date3);

//month can be full or abbreviated. Also names are insensitive. comma are ignored
const date4 = new Date("July 1 2020");
const date5 = new Date("JULY, 1, 2021");
console.log(date4);
console.log(date5);