var number=function(array){
    //your awesome code here

    if (array.length === 0) return [];

    return array.map((element, index) => `${index + 1}: ${element}`);
    
}
console.log(number(["a", "b", "c"]));
console.log(number([]));