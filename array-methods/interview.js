// function to return the elements on the oddth positions of the array, and remove strings.

function getOdds(word) {
    let oddArr = []
    // let trimWord = word.trim(' ');
    // console.log(trimWord);

    const wordArr = word.split('').join(" ").trim('');
    console.log(wordArr);


    // for (let a = 0; a < wordArr.length; a++) {
    //     if (a % 2 !== 0) {
    //         const element = wordArr[a];
    //         console.log(element);
    //     }
    // }
}
getOdds("Hello World!");