function points(games) {
        scores = 0;
        for (let game of games) {

            let [ a, b] = game.split(":").map(Number);
            scores =+ a > b  ? 3 : (a == b) ? 1 : 0;
            
            if (a > b) {
                scores +=3;
            }
            else if (a == b) {
                scores++;
            }
        }
        
        return scores;

}
console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"])) // should return 10)