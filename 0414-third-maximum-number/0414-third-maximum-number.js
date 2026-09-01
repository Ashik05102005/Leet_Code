/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const newNums = new Set(nums) ;
    const array = [...newNums].sort((a,b)=>b-a) ;
    console.log(array);
    if(array.length<3){
        return Math.max(...array)
    }
    else{
        return array[2]
    }

};