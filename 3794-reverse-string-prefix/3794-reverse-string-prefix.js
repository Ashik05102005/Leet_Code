/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    const res =[]
    const strArray = s.split("")
    for(let i =0 ; i<k ; i++){
        res.push(strArray.shift())
    }

    return (res.reverse().join("")+strArray.join(""));
};