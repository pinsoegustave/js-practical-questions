const currentDate = new Date();

const date = currentDate.getDate();
const month = currentDate.getMonth();
const year  =currentDate.getFullYear();

let monthDateYear = (month+1) + '/' + date + '/' + year;

console.log(monthDateYear);