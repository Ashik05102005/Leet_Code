/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const copy = [...nums]
    nums.sort((a,b)=>a-b);
    // console.log(copy)
    // console.log(nums)
    return(copy.map(x=>nums.indexOf(x)))

};