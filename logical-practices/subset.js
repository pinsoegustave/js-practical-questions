// Subset of an Array Check if an array is a subset of another.

function isSubset(arr1, arr2) {
    return arr1.every(ele => arr2.includes(ele));
}
console.log(isSubset([1, 2], [1, 2, 3])); // true
console.log(isSubset([1, 4], [1, 2, 3])); // false