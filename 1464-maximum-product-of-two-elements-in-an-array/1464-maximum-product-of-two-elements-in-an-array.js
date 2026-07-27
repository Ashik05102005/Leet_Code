/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const numMetrix = []
    for(let i = 0; i<nums.length ; i++){
        for(let j=i+1 ; j<nums.length ; j++){
            numMetrix.push([nums[i],nums[j]]);
        }
    }
    // console.log(numMetrix);
    const res = numMetrix.map((x)=>(x[0]-1)*(x[1]-1))
    return Math.max(...res)
};