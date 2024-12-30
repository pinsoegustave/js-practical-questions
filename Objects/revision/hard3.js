// 3. **Object Property Dependency:**
//     - Write a function that calculates derived properties of an object based on existing ones. For example, given:
const rectangle = { width: 35, height: 10 };
//     Add a computed property `area` to the object without modifying the original object. The `area` property should dynamically update if `width` or `height` changes.
function addComputedProperties(rectangle) {
    return {
        ...rectangle,
        get area() {
            return this.width * this.height;
        },
    };
}
const updatedSide = addComputedProperties(rectangle);
console.log(updatedSide.area);
updatedSide.height = 2
console.log(updatedSide.area);