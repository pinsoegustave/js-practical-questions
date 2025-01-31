function solution(string) {
    if ("") return ""
    
    const newArr = string.split('').map((ele) => ele.charCodeAt(0) >= 65 && ele.charCodeAt(0) <= 92 ? " "+ele: ele).join("");
    return newArr;
}
console.log(solution("camelCasingTest")); //  "camel Casing Test",)