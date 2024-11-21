// #2: Sort strings
// Sort the following array of names alphabetically, ignoring case sensitivity.
// const names = ['John', 'alice', 'Bob', 'david', 'Charlie'];

// Instructions:
// Sort the names so that case doesn't affect the ordering
// 'alice' and 'Alice' should be treated the same
// Expected Output:
// ['alice', 'Bob', 'Charlie', 'david', 'John']

function sortNumbers(arr) {
    // return arr.sort((a, b) => a.localeCompare(b));    //return ascending
    return arr.sort((a, b) => b.localeCompare(a));   //return descending
}
console.log(sortNumbers(['John', 'alice', 'Bob', 'david', 'Charlie']));