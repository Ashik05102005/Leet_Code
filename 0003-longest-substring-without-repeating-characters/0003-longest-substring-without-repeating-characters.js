/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
     let str = "";
    let max = 0;

    for (let char of s) {
        let index = str.indexOf(char);

        if (index !== -1) {
            str = str.slice(index + 1);
        }

        str += char;

        max = Math.max(max, str.length);
    }

    return max;
};