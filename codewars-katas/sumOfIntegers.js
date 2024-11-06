function sumOfIntegers(anyArray) {
    const solution = anyArray.reduce((acc, num) => acc + num, 0);

    console.log(solution);
}

sumOfIntegers([21, 43, 43, 90, 32]);