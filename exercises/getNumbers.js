// Create a function that takes a list of integers and strings and returns a new list with the strings filtered out.

function filter_list(arr) {
    return arr.filter(num => num !== String(num));
}
console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));
console.log(filter_list([1,2,'aasf','1','123',123])); // == [1,2,123]);