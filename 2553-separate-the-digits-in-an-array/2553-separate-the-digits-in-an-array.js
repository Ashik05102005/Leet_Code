/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    const result = []
    nums.forEach((num)=>{
        const numbers = num.toString().split("").map(x=>Number(x));
        result.push(...numbers);
    });
    return result
};