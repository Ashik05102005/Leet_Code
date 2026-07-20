/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let first = 0 , firstArray = [0] ;
    let seccond = 0 , seccondArray = [0] ;
    for(let i = 0; i < nums.length-1 ; i++ ){
        first+=nums[i] ;
        firstArray.push(first);
        seccond+=nums[nums.length-1-i];
        seccondArray.push(seccond)
    }
    seccondArray.reverse()
    return  firstArray.map(( item , index)=>Math.abs(item -seccondArray[index]))

};