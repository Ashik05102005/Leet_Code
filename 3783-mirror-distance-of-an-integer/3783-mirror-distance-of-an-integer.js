/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    const rev = n.toString().split("").reverse().join("");
    return Math.abs(n-(+rev))
};