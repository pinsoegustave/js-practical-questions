// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
// **Not Jaden-Cased:  "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:          "How Can Mirrors Be Real If Our Eyes Aren't Real"**

function jadenCased(string) {
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(jadenCased("How can mirrors be real if our eyes aren't real"));