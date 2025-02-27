const arr1 = ['kellia', 'gustave', 'kenny', 'kaveria'];
const arr2 = [30, 43, 12, 43, 68, 90, 30, 43, 32];
const removeDuplicates = new Set(arr2)
const arr = [...arr1, ...removeDuplicates]
console.log(arr);