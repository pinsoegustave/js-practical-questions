// 2. **Adding and Updating Properties:**
//     - Given the object:
//     How would you:
const car = { brand: "Toyota", model: "Corolla" };
//         - Add a new property `year` with the value `2020`?
//         - Update the `model` to `"Camry"`?
// Solution.
car.year = 2020; 
car['year2'] = 2024;
// const newProp = Object.defineProperty(car, 'year', {
//     value: 2020,
//     writable: false, 
// });
car.model = "Camry"
console.log(car);