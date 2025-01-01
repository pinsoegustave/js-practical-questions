function apparently(string) {
    // your code
    if (string === "and apparently" || string === "but apparently") {
        return string;
    }

    const result = string.split(' ').map((ele, index, arr) => ( ele === "and" || ele === "but") && arr[index + 1] !== "apparently" ? ele += " apparently" : (ele === "apparently" ? "apparently" : ele ) ).join(' ');


    return result;
}

// console.log(apparently('It was great and I have never been on live television before but sometimes I dont watch this.'));  
// should return 'It was great and apparently I have never been on live television before but apparently sometimes I dont watch this.');

// console.log(apparently('and apparently'));
console.log(apparently('UZSwh and apparently'));