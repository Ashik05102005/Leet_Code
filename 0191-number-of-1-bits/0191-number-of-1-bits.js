/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let res = ""
    while (n>0){
        res+=n%2;
        n=Math.floor(n/2)
    }
    return res.split("").reduce((total,num)=>total+=Number(num),0)

};