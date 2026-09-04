/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(strs.length===1){
        return [strs]
    };
    // const copy = structuredClone(strs);
    const sorted = strs.map((item)=>item.split("").sort((a,b)=>a.localeCompare(b)).join(""));
    // console.log(sorted);
    const obj ={};
    sorted.forEach((item,index)=>{
        if(!obj[item]){
            obj[item] = [strs[index]]
        }
        else{
           obj[item].push(strs[index]) 
        }
    });
    return Object.values(obj)
};