const text = "Mr Blue has a blue house and a blue car";

let result = text.replace('blue', 'red');
console.log(result);

let result2 = text.replaceAll('blue', 'green');
console.log(result2);

var solution = text.replaceAll('blue', (match) => {
    return match.toUpperCase();
})
console.log(solution)

let results = text.replace(/blue/gi, 'red');
console.log(results);