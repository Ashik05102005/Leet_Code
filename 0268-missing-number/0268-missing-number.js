/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a,b)=>a-b);
    let len = nums.length;
    console.log(nums , len)
    for(let i = 0 ; i<=len ; i++){
        if(!nums.includes(i)){
            return i
        }
    }
};