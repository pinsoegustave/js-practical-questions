function twoSort(s) {
    let newArr = s.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
      return newArr[0].split('').join("***");

    // return s.sort()[0].split('').join('***');
}

console.log(twoSort(['xeloo', 'harms', 'BTC', 'clap', 'bitcoin']));
console.log(twoSort(["BTC","Bitcoin","Bitcoin","DarkCoin","DarkCoin","Ethereum","Factom","Lisk","LiteCoin","ProofOfStake","Waves"]));