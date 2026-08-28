// Given an integer array nums of positive integers, return the average value of all even integers that are divisible by 3.

// Note that the average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.
/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let array=nums.filter((num)=>num%2===0 && num%3===0)
    if(array.length){
    return Math.floor(array.reduce((acc,num)=>acc+num,0)/array.length);
    }
    return 0
};
