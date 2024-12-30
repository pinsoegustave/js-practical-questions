// 2. **Substring Manipulation:**
//     - Given a string input like `"hello world"`, write a function that capitalizes the first letter of each word using `substring` or `slice`.

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function capital(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalize("hello world"));
console.log(capitalize("javascript"));
console.log(capital("codewars is the bang bing chain website application"));