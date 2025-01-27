function expandedForm(num) {
    // Your code here
    const numStr = num.toString();

    const expanded = numStr.split('').map((digit, index) => digit + '0'.repeat(numStr.length - index - 1)).filter(part => part[0] !== '0').join(' + ')

    return expanded;
}
console.log(expandedForm(350));
console.log(expandedForm(12));
console.log(expandedForm(982));