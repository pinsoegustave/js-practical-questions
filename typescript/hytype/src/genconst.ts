interface lengthwise {
    length: number;
}

function loggingIdentity<T extends lengthwise>(arg: T): T {
    console.log(arg.length);

    return arg;
}
// loggingIdentity(45)
loggingIdentity({ length: 10, value: 3});
