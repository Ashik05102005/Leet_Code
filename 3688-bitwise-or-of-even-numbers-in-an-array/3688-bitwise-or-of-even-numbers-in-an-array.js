/**
 * @param {number[]} nums
 * @return {number}
 */
var evenNumberBitwiseORs = function(nums) {
    const even = nums.filter(item=>item%2===0);
    let or = 0 ;
    for(let i=0; i<even.length;i++){
        if(i===0){
            or=even[i]
        }
        else{
            or=or|even[i]
        }
    };
    return or
};