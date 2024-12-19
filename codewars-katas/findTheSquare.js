const findTheSquares = num => {
    if (num % 2 === 0) {
        return "Number should be an Odd"
    }
    let squares = []
    for (let i = 0; i < num; i++) {
        squares.push(i*i);
    }
    for (let a = 0; a < squares.length - 1; a++) {
        if(squares[a+1] - squares[a] === num) {
            return String(squares[a+1] + "-" + squares[a]);
        }
    }
}
console.log(findTheSquares(9)); //'25-16'
console.log(findTheSquares(7)); //16-9'