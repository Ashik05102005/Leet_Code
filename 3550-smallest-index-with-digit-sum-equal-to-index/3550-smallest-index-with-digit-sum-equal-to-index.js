/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    const res = 0
    for(let i =0 ; i<nums.length ; i++ ){
        let sum = 0 , n=nums[i]
        while(n>0){
            sum += n%10
            n= Math.floor(n/10)
        }
        if(i===sum){
            return i
        }
    }
    return -1
};