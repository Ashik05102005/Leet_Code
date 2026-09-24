/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function(matrix) {
    const res = matrix.map(arr=>arr.reduce((total,num)=>total += num ,0))
    return res
};