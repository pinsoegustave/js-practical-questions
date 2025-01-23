function dirReduc(arr){
    // ...
    const complement = {
        "NORTH" : "SOUTH",
        "EAST" : "WEST",
        "SOUTH" : "NORTH",
        "WEST" : "EAST"
    };

    const checker = [];
    for (direction of arr) {
        if (checker.length > 0 && checker[checker.length - 1] === complement[direction]) {
            checker.pop();
        }
        else {
            checker.push(direction);
        }
    }

    return checker;
}
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));