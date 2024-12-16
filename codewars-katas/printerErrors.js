function printerError(s) {
    const validColors = 'abcdefghijklm'

    // const errors = Array.from(s).filter(char => !validColors.includes(char)).length;
    const errors = Array.from(s).filter(char => !validColors.includes(char)).length;
    
    return `${errors}/${s.length}`
}
console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));
// printerError();