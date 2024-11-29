function openOrSenior(data){
    // ...
    return data.map((age, handicap) => (
        age > 55 && handicap > 7 ? "Senior" : "Open"
    ))
  }
console.log( openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]));
