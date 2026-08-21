/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const res=[]
    const word1Array = word1.split("");
    const word2Array = word2.split("");
    if(word1Array.length>word2Array.length){
        n=word1Array.length
    }
    else{
        n=word2Array.length
    }
    for(let i=0; i<n;i++){
        res.push(word1Array[i])
        res.push(word2Array[i])
    };
    return (res.join(""))
};