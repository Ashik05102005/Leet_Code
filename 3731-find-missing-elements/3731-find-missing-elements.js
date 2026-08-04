/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    const Max = Math.max(...nums);
    const Min = Math.min(...nums);
    const res=[]
    for(let i=Min;i<=Max;i++){
        if(!nums.includes(i)){
            res.push(i)
        }
    }
    return res
};