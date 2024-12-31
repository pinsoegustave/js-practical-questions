// To count the occurrences of elements in an array:
function countOccurences(arr) {
    const occurrences = {}

    for (const elem of arr) {
        if(occurrences[elem]) {
            occurrences[elem]++;
        }
        else {
            occurrences[elem] = 1;
        }
    }
    return occurrences;
}
console.log(countOccurences([1, 2, 2, 3, 3, 3])) // { 1: 1, 2: 2, 3: 3 }