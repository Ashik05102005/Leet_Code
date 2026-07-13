/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let count = 0 ;
    nums.forEach((x)=>{
        if(x%3!==0){
            console.log(x)
            count ++ ;
        }
    })
    return count;
};