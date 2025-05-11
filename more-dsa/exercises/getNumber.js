function getNumbers(nums) {
    const number = "1,2,3,4,5,6,7,8,9,0"

    return nums.split('').filter(ele => !number.includes(ele)).join('');
}
console.log(getNumbers("abc1234cdfdysu"));