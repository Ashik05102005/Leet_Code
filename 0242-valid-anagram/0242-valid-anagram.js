/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    sObj = {};
    tObj = {};
    s.split("").forEach(x=>{
        if(sObj[x]){
            sObj[x]=sObj[x]+1;
        }
        else{
            sObj[x]=1
        }
    });
    t.split("").forEach(x=>{
        if(tObj[x]){
            tObj[x]=tObj[x]+1;
        }
        else{
            tObj[x]=1
        }
    });
    if(Object.keys(tObj).length===Object.keys(sObj).length){
        for(let i in tObj){
            if(tObj[i]!==sObj[i]){
                return false
            }
        };
    }
    else{
        return false
    }
    
    return true
};