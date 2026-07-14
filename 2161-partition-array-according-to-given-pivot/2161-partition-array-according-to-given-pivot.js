/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let first=[],middle=[],end=[]
    for(let i in nums){
        // console.log(nums[i])
        if(nums[i]<pivot){
            first.push(nums[i])
        }
        else if(nums[i]===pivot){
            middle.push(nums[i])
        }
        else  {
            end.push(nums[i])
        }
       
    }
    return [...first , ...middle , ...end]
};