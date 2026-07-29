/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    const vowels = ['a','e','i','o','u'] ;
    let charObj = {}
    // let vowelsCount=[]  , consonantsCount = [] ;
    let vowelMax = 0 , consonantsMax = 0;
    s.split("").forEach((char)=>{
        if(charObj[char]){
            charObj[char]++
        }
        else{
            charObj[char] =1
        }
    });
    // console.log(charObj)
    for (let i in charObj){
      if(vowels.includes(i))  {
        // vowelsCount.push(charObj[i])
        if(vowelMax<charObj[i]){
            vowelMax=charObj[i]
        }     
      }
      else{
        //  consonantsCount.push(charObj[i])
         if(consonantsMax<charObj[i]){
            consonantsMax=charObj[i]
        }
      }
    }
    // console.log("vowels->",vowelsCount)
    // console.log("consonents->",consonantsCount)
    // const res = (Math.max(...vowelsCount) + Math.max(...consonantsCount));
    console.log( consonantsMax + vowelMax );
    const res = consonantsMax + vowelMax ;
    return res ;
};