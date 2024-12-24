const timeNow = new Date();
// console.log(timeNow);   // returns the date now

const time1 = new Date(100000000000);
// console.log(time1);    // returns the time from 1 January 1970

//passing ISO date formats
const date = new Date("2020-07-01");
const date2 = new Date("01-07-2020");
// console.log(date2);

//passing only the year and the month, or only the year
const date3 = new Date("2020-07");
const date4 = new Date("2020");
// console.log(date3); //this returns the date with the first day of the specified month
// console.log(date4); //this returns the very first day, month of the specified month

//passing also the specific time to ISO dates
const date5 = new Date("1973-03-03T09:46:40.000Z");
console.log(date5); // returns the actual passed date


//creating a new Date object by passing specific date and time
const time2 = new Date(Date.UTC(2020, 1, 20, 4, 12, 11, 0)); //this has no effect with daylight saving time
const time3 = new Date(2020, 1, 20, 4, 12, 11, 0); // it is sometimes affected with no time zone adjustments(like daylight saving time) where the hours
console.log(time2);

// if four numbers are passed, it represents year, month, day and hours. i.e,
const time4 = new Date(Date.UTC(2018, 3, 11, 4));
console.log(time4);

//similary, if two arguments are passed, it represents year and month
const time5 = new Date(2020, 1);
console.log(time5);
