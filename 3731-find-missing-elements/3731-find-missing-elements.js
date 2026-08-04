/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    // const Max = ;
    // const Min = Math.min(...nums);
    const res=[]
    for(let i=Math.min(...nums);i<=Math.max(...nums);i++){
        if(!nums.includes(i)){
            res.push(i)
        }
    }
    return res
};