/**
 * @param {number[]} nums
 * @param {number} digit
 * @return {number}
 */
var countDigitOccurrences = function(nums, digit) {
    let count = [] ;
    const arr =nums.forEach((x)=>{
        count =[...count ,...x.toString().split("") ]
        });
    const res = count.filter((x)=>x==digit)
    return res.length
    
};