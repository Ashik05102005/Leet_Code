/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    const arr = n.toString().split("")
    const numArray = arr.map((num)=>Number(num));
    let numbers='';
    const sum = numArray.reduce((total , num )=>{
        if(num!==0){
            numbers+=num
        }
        return total+num
        } , 0);
   return Number(numbers)*sum
};