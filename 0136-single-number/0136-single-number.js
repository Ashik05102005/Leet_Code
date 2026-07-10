/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    count ={}
   nums.forEach((x)=>{
    if(count[x]){
        count[x]++
    }
    else{
        count[x]=1
    }
   }) 
   for (let i in count){
    if(count[i]===1){
        return Number(i)
    }
   }
};