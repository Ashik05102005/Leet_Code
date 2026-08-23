/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    // console.log(n)
    const nums = [];
    for(let i=0;i<n;i++){
        nums[i] = start + 2 * i ;
    }
    let res =nums[0];
    for(let i =1 ; i<nums.length ; i++){
        res= res^nums[i];
    }
    return res
};