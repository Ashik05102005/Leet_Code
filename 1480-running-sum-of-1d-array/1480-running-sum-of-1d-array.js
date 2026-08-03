/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0;
    const res = nums.map((x)=>{
        sum+=x;
        return sum;
    })
    return res
};