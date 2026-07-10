/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function(n) {
    const numArray = n.toString().split("").map((x)=>Number(x));
    // console.log(numArray)
    return numArray.reduce((sum , x)=>sum+x,0);
    // console.log(sum)
};