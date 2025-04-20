function* displayResult() {
    const response = yield;

    console.log(`Your response is ${response}`);
}

const iterator = displayResult();
iterator.next();
iterator.next("Hello Udacity students!!");