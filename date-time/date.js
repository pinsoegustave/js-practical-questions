const timeInMilliseconds = Date.now();
console.log(timeInMilliseconds);

const time = new Date;

const date = time.getDate();
console.log(date);  // returns the day of the month

const month = time.getMonth();
const realMonth = time.getUTCMonth();
console.log(realMonth);
console.log(month); // returns the month of the year(this will return 11 because of the local time zone adjustments);

const year = time.getFullYear();
console.log(year);

const utcDate = time.getUTCDate();
console.log(utcDate);

const event = new Date('Feb 19, 2018 23:15:30');
// set the date
event.setDate(15);
console.log(event.getDate());
//Only 28 days in February
event.setDate(35);
console.log(event.getDate());
