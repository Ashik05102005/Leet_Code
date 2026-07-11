/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    const rev = n.toString().split("").reverse().join("");
    console.log(rev)
    return Math.abs(n-Number(rev))
};