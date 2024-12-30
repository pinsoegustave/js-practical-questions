// 3. **Base64 Encoding:**
//     - Create a function that takes a string input, encodes it to Base64 using `btoa`, and then decodes it back using `atob`. Verify if the original string matches the decoded string.

function privacy(str) {
    let encoded = btoa(str);
    console.log(encoded);
    let decoded = atob(encoded);
    console.log(decoded);
    return str === decoded
}
console.log(privacy("My name is Gustave!"));