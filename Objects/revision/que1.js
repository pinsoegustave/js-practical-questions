// 1. **Nested Objects:**
// - Create an object `student` with properties `name`, `age`, and `grades` (an object with properties `math`, `science`, and `history`). Write a function to calculate the average grade.

const student = {
    name: "Gustave",
    age: 20,
    grades: {
        math: 90,
        science: 94,
        history: 88,
    }
};
const markArr = Object.values(student.grades);
const average = markArr.reduce((sum, num) => sum + num, 0) / markArr.length;

console.log(parseFloat(average));