function testMarks(classAverage, yourPoints) {
    const score = classAverage.reduce((num, currentV) => num + currentV, 0)/ classAverage.length;
    return yourPoints > score;

    ffsdf
}

testMarks([25, 42]);