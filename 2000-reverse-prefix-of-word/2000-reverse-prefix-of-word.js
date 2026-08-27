/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
   const index = word.indexOf(ch);
   const end = word.slice(index+1)
   const start = word.slice(0,index+1).split("").reverse().join("");
//    console.log("end",end)
//    console.log("start",start);
   return start+end
};