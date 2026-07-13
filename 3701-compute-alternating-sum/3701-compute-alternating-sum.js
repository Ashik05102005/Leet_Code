/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function(nums) {
    let sum = 0 ;
    for (let i=0 ; i<nums.length ; i++ ){
        if(nums.length===1){
            return nums[i]
        }
        const firstNum = nums[i]
        i++ ;
        const secoundNum = nums[i]
        if(!secoundNum){
            return sum+firstNum
        }
        sum += firstNum - secoundNum ;

    }
    console.log(sum)
    return Number(sum)
};