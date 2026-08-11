/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    for(let i=1; i<=k;i++){
        const min = Math.min(...nums);
        nums[nums.indexOf(min)] = (nums[nums.indexOf(min)])*multiplier ;
    }
    return nums;
};