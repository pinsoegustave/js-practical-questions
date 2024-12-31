// FizzBuzz Print numbers 1 to 100:

// If divisible by 3, print "Fizz".
// If divisible by 5, print "Buzz".
// If divisible by both, print "FizzBuzz".

for (let i = 0; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");

    else if(i % 3 === 0) console.log("Fizz");

    else if(i % 5 === 0) console.log("Buzz");

    console.log(i);
}