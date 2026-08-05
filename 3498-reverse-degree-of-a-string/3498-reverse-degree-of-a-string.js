/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("").reverse();
    const res = s.split("").reduce((acc,item,index)=>acc+=((alphabets.indexOf(item)+1)*(index+1)),0);
    return res
};