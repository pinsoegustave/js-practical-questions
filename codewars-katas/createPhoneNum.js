function createPhoneNumber(numbers){
    return numbers.join('').splice(1, 3).join('')
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));   // return (123) 456-7890