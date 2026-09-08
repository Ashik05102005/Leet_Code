/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    if(n.toString().split("").length<4){
        return 0
    }
    const limit = n-1000;
    return limit+1

};