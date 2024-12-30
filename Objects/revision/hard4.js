// 1. **Custom Grouping Based on Object Values:**
//     - Write a function to group an array of objects by a specific property value.

function groupBy(obj, property) {
    return obj.reduce((grouped, item) => {
        const key = item[property];
        grouped[key] = grouped[key] || [];
        grouped[key].push(item);
        return grouped;
    }, {});
}
const items = [
    { name: "apple", type: "fruit" },
    { name: "carrot", type: "vegetable" },
    { name: "banana", type: "fruit" },
];
const grouped = groupBy(items, "type");
console.log(grouped);