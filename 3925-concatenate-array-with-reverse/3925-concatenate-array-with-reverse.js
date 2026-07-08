/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = (nums) =>([...nums , ...(nums.reverse())] )
