function filterAdults(students) {
    return students.filter((student) => student.age > 18);
}
const people = [ 
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 16 },
    { name: 'David', age: 19 }
];
const auca = [
    { name: 'Eve', age: 18 },
    { name: 'Frank', age: 18 },
    { name: 'Grace', age: 17 }
  ]
const uok = [
    { name: 'Henry', age: 21 },
    { name: 'Ivy', age: 22 },
    { name: 'Jack', age: 23 }
  ]

console.log(filterAdults(people));
console.log(filterAdults(auca));
console.log(filterAdults(uok));