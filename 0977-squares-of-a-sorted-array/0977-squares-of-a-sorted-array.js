/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const square = nums.map(num=>num**2);
    return square.sort((a,b)=>a-b);
};