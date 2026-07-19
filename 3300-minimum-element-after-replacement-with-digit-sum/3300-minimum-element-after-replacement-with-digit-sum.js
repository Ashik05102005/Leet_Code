/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    const res = nums.map((x)=>{
        return x.toString().split("").reduce((sum , x)=>sum+Number(x), 0);
    })
   return Math.min(...res)
};