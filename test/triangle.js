function triangle(num) {
    let result = "";

    for (let a = 1; a <= num; a++) {
        for(let b = 1; b <= a; b++) {
            result += "x"
        }
        result += "\n";
    }
    return result;
}
console.log(triangle(10));