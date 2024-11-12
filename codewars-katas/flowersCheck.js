function loveFunc(boyFlower, girlFlower) {
     return (boyFlower % 2 === 0 && girlFlower % 2 === 1) || (boyFlower % 2===1 && girlFlower % 2 === 0)
}

console.log(loveFunc(32,18));