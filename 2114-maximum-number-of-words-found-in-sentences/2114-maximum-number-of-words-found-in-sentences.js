/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
   const words = sentences.map(x=>x.split(" ").length);
   return Math.max(...words)
};