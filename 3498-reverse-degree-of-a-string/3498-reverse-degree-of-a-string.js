/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    // const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("").reverse();
    return s.split("").reduce((acc,item,index)=>acc+=(('abcdefghijklmnopqrstuvwxyz'.split("").reverse().indexOf(item)+1)*(index+1)),0);
    
};