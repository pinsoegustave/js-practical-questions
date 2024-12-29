// 5. **Converting an Object to a String:**
//     - Given the object:
const user = { name: "Alice", age: 25, location: "NYC" };
//     Write a program to convert this object into a JSON string and then parse it back into an object.

const jsonString = JSON.stringify(user);
console.log("JSON String: ", jsonString);

const parseObj = JSON.parse(jsonString);
console.log("Parsed Object: ", parseObj);