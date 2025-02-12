const sortme = (names) => {
    // your code here
    return names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())); 
}
console.log(sortme(["do", "Big", "Do","Comb", "Made", "big"]));
// console.log(sortme(["Hello","there","I'm","fine"]));
// console.log(sortme(["C", "d", "a", "B"]));
// console.log(sortme(["at","big","big","child","come","do","Do","Group","Her","life","New","same","this","try","woman"]));
// 'at', 'big', 'big', 'child', 'come', 'Do', 'do', 'Group', 'Her', 'life', 'New', 'same', 'this', 'try', 'woman'