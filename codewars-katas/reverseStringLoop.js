function reverseString(string) {
    var reverseMe = ""

    for (var i = string.length - 1; i >=0; i-- ) {
        reverseMe += string[i];
    }

    return reverseMe;
}

console.log(reverseString("Gustave"));