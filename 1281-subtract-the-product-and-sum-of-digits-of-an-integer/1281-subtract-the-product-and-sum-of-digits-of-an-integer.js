/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    num=n.toString().split("").map(item=>Number(item))
    const product = num.reduce((total,item)=>total*item , 1);
    const sum = num.reduce((total,item)=>total+item , 0);
    return product-sum
    
};