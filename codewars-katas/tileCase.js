function titleCase(title, minorWords) {
    
    if (!title) return "";

    const arr1 = title.toLowerCase().split(' ');
    const arr2 = minorWords ? minorWords.toLowerCase().split(' ') : [];

    const changer = arr1.map((word, index) => index === 0 || !arr2.includes(word) ? word.charAt(0).toUpperCase() + word.slice(1): word).join(' ');

    return changer;
}

console.log(titleCase('a clash of KINGS', 'a an the of'));