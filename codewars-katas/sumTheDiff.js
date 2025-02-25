function sumtheDifference(equation) {
    //coding and coding..

    const sumEven = equation.split('').filter(ele => ele.trim().length > 0 && ele % 2 === 0).map((item) => Number(item));
    const addEven = sumEven.reduce((num, acc) => num + acc, 0);

    const sumOdd = equation.split('').filter(ele => ele.trim().length > 0 && ele % 2 === 1).map((item) => Number(item));
    const addOdd = sumOdd.reduce((num, acc) => num + acc, 0);
    // const sumOdd = split.reduce((num, acc) => typeof(num) === Number && num % 2 === 1 ? num + acc : num, 9);

    const result = addEven - addOdd;

    return result;
    
}
console.log((sumtheDifference("(2-262+(+))7182(++1 ")));     // should return 9
console.log((sumtheDifference("(-100) + 100  - (-200) + 1")));    // should return -3