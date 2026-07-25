/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let resArray = []
    const numArray = n.toString().split("").map(x=>Number(x));
    for(let i = 0 ; i < numArray.length ; i++ ){
        for(let j = i+1 ; j<numArray.length ; j++ ){
            resArray.push(numArray[i]*numArray[j])
        }
    }
    return Math.max(...resArray)
};