function winner(candidates) {
    
    return candidates.reduce((maxPerson, can) => {
        let totalScore = can.scores.reduce((a, b) => a + b, 0);
    
        if (!maxPerson || totalScore > maxPerson.totalScore) {
            return { name: can.name, totalScore };
        }

        return maxPerson;
    }, null)?.name;
}  
var c1 = { name: "Bob", scores: [10, 65] };
var c2 = { name: "Bill", scores: [80, 5] };
var c3 = { name: "Charlie", scores: [40, 55] };

console.log(winner([c1, c2, c3]));