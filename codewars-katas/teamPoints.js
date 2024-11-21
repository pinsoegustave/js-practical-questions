function points(games) {
    const num = games.length;
    let count = ''

    let point = games.forEach(element => {
        let scores = element.split('');

        console.log(scores[0].length);

        if (scores[0] == scores[2]) {
            // let final = scores[0].length;
            // console.log("final");
        }
    });
    // console.log(point)

    // if (games[1][0] = games[1][1]) {
    //     count++;
    // }
}
points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) // should return 10)