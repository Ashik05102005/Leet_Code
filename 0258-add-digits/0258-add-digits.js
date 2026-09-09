/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while(num>=10){
        num = num.toString().split("").map(item=>Number(item)).reduce((total,item)=>total+=item,0);
    }
        // console.log()
    return num
    
};