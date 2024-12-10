function squareDigits(num){
    const numString = num.toString().split('');

    const square = numString.map((ele) => ele*ele).join('')
    console.log(numString);
    console.log(square);
  //   return 0;
}
squareDigits(3212);