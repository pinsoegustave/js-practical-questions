function comp(array1, array2){
    //your code here
    if (array1 === null || array2 === null) return false;

    let array3 = array1.map((ele) => ele*ele).sort((a, b) => a - b);
    let sortedArr4 = array2.sort((a, b) => a - b);

    let result = array3.length === sortedArr4.length &&
    array3.every((ele, index) => ele === sortedArr4[index]);


    return result;
}
console.log(comp([4, 4], [1, 31]));