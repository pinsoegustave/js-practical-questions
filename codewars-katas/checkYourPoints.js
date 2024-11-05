function testMarks(classAverage, yourPoints) {
    const score = classAverage.reduce((num, currentV) => num + currentV, 0)/ classAverage.length;
    return yourPoints > score;
}

testMarks([25, 42]);