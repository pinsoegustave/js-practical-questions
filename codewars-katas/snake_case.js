function toUnderscore(string) {
    if (typeof(string) === "number" ) return String(string);
    
    const oneArray = string.split('');

    const app = oneArray.map((ele) => ele.charCodeAt(0) >= 65 && ele.charCodeAt(0) <= 90 ? "_"+ele.toLowerCase() : ele).join(''); 
    
    return app.startsWith("_") ? app.slice(1) : app;
}
console.log(toUnderscore('AAfdfeaGFvwe'));
console.log(toUnderscore('AAA')); //should return a_a_a