function sumTwoSmallestNumbers(numbers) {  
    //Code here
    if ( numbers.length > 4 && numbers.length < 0) {
      console.log("Enter 4 positive integers in the array");
    } 
    let numMin = []
    var firstMin = Math.min(...numbers);
    console.log(`The first lowest number: ${firstMin}`);
    newArr = numbers.filter(item => item !== firstMin)
    console.log(`The new array after: ${newArr}`);
    var secMin = Math.min(...newArr);
    console.log(`The second lowest number: ${secMin}`);
  //   var arr = []
    numMin.push(firstMin, secMin);
    let result = numMin.reduce((acc, num) => acc+num, 0)
    console.log(`The result is: ${result}`);
  }
  sumTwoSmallestNumbers([23, 71, 33, 82, 1]);
//   should return 24
  
  // (Option 1.)for loop to go through the array
  
  // declaring a variable of an empty array to help me store the two minimum numbers from the array
  // (Optional 2.) Math.min() to return the 1st minimum number in the array
  // using the spread operator in Math.min helping me to spread the elements of an array
  // push the first number to the declared variable
  // do the same to get the second minimum number
  // after add the two numbers in the other variable