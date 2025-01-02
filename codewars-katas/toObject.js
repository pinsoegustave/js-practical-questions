function wordsToObject(input) {
    // Write your solution here
    const wordArray = input.split(' ');
    
    const objects = [];
    for(let i = 0; i < wordArray.length; i+=2) {
        objects.push({name: wordArray[i], id: wordArray[i + 1]});
    }
    const formattedResult = objects.map(obj => `{name : '${obj.name}', id : '${obj.id}'}`).join(", ");

    return`[${formattedResult}]`;
}

console.log(wordsToObject("red 1 yellow 2 black 3 white 4")); 
// should return "[{name : 'red', id : '1'}, {name : 'yellow', id : '2'}, {name : 'black', id : '3'}, {name : 'white', id : '4'}]");)