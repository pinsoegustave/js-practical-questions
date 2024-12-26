function solve(a,b){
    const parts = a.split('*');

    if (parts.length === 1) {
        return a === b;
    }

    const prefix = parts[0];
    const suffix = parts[1];

    if(!b.startsWith(prefix)) {
        return false;
    }
    if (!b.endsWith(suffix)) {
        return false;
    }

    const middleLength = b.length - prefix.length - suffix.length;
    return middleLength >= 0;
}
console.log(solve("code*", "codewars"));