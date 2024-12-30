// 1. **Deep Cloning an Object:**
//     - Write a function to create a deep clone of an object. The function should handle nested objects and arrays. For example:
const obj = { 
    a: 1, 
    b: { 
        c: 2, 
        d: [3, 4] 
    } 
};
const clonedObj = deepClone(obj);
//     Modify the `clonedObj` without affecting the original `obj`.
function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    if(Array.isArray(obj)) {
        return obj.map(deepClone);  //clone arrays
    }

    const clonedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }
    return clonedObj;
}
clonedObj.b.c = 99;
console.log(obj);
console.log(clonedObj);