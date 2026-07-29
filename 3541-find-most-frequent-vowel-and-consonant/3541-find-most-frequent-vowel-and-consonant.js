/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    const vowels = ['a','e','i','o','u'] ;
    let charObj = {}
    let vowelMax = 0 , consonantsMax = 0;
    s.split("").forEach((char)=>{
        if(charObj[char]){
            charObj[char]++
        }
        else{
            charObj[char] =1
        }
    });
    for (let i in charObj){
      if(vowels.includes(i))  {
        if(vowelMax<charObj[i]){
            vowelMax=charObj[i]
        }     
      }
      else{
         if(consonantsMax<charObj[i]){
            consonantsMax=charObj[i]
        }
      }
    }
    const res = consonantsMax + vowelMax ;
    return res ;
};