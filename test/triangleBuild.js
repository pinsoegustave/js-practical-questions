function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
            line += "* ";
    }
    return line + "\n";
}
// console.log(makeLine(10));

function buildTriangle(num) {
    var triangle = ""

    for (var lineNumber = 1; lineNumber <= num; lineNumber++) {
        triangle = triangle + makeLine(lineNumber);
    }
    return triangle;
}

console.log(buildTriangle(10));