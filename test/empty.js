function highAndLow(numbers){
    const numArray = numbers.split(' ').map(Number);
    console.log(typeof(numArray));
    const max = Math.max(...numArray);
    const min = Math.min(...numArray);
    
    // const summation = max + min;
    // console.log("The sum of max and min is: " + summation);
    const newArr = numArray.filter(digit => digit !== max && digit !== min);
    // return `${max} ${min}`
    // return newArr;
    console.log("The new Array after removing max,min: " + newArr);
    console.log("The sum of the new Array created: " + newArr.reduce((acc, num) => num + acc, 0));

  } 
highAndLow("1 2 3 4 5 55 78");
  