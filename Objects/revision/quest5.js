// 5. **Freezing an Object:**
//     - Given the object:
const config = { mode: "dark", version: "1.0.0" };
// Write a program to freeze the object so that it's properties cannot be modified, and demonstrate an attempt to change the `mode`.

Object.freeze(config);

config.mode = "light";

console.log(config); // returns this { mode: 'dark', version: '1.0.0' } means it can't be changed.