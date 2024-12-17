function removeEveryOther(arr){
    //your code here
    arr.splice(1, 1);
    return arr;

}
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));