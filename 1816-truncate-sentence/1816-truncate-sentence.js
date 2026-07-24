/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    const res = s.split(" ").slice(0,k);
    return res.join(" ")
};