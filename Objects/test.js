// const names = [ ['Gustave', '432'], ['Tommy', '431'], ['Kenny', '433']];

// const changer = Object.fromEntries(names);

// console.log(changer);

const acc = { Gustave: '432', Tommy: '431', Kenny: '433' }

console.log(Object.entries(acc).flat(Infinity));