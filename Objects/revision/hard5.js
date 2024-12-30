// 5. **Recursive Object Property Search:**
//     - Write a function that searches for a specific property in a deeply nested object. For example:
const data = {
    level1: {
        level2: {
            level3: {
                key: "value",
            },
        },
    },
};
const result = findProperty(data, "key");
//     The function should return `"value"` if the property is found, or `null` if it doesn't exist.
function findProperty(obj, keyToSearch) {
    if (obj === null || typeof obj !== "object") {
        return null;
    }

    if (obj.hasOwnProperty(keyToSearch)) {
        return obj[keyToSearch];
    }

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const result = findProperty(obj[key], keyToSearch);
            if (result !== null) {
                return result;
            }
        }
    }
    return null;
}
console.log(findProperty(data, "key"));