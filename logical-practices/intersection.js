// Find Intersection Find common elements between two arrays.

function intersection(arr1, arr2) {
    return arr1.filter(ele => arr2.includes(ele));
}

console.log(intersection([1, 2, 3], [2, 3, 4])); // [2, 3]