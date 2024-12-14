function removeChar(str){
    //You got this!
    const first = str.slice(1);
    const last = first.slice(0, -1);
    return last;
};
console.log(removeChar('eloquent'))   