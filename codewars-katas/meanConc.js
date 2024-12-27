function mean(lst){
    const numbers = lst.map(ele => Number(ele)).filter(num => !isNaN(num));
    const n = numbers.length;
    const mean = numbers.reduce((a, b) => a + b, 0) / n;
    const words = lst.map(word => String(word)).filter(num => !Number(num) && num !== '0').join('') ;

    return [mean, words];
}
console.log(mean(["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"])); 
// should return [3.6, "udiwstagwo"]);)