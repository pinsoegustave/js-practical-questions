// 4. **Checking for a Property:**
//     - Given the object:
const user = { username: "coder123", password: "securepass" }
//     Write a function that checks if the property `email` exists in the object. Return `true` if it exists and `false` otherwise.
console.log(Object.hasOwn(user, 'email'));
