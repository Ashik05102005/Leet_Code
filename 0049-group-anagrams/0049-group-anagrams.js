/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(strs.length===1){
        return [strs]
    };
    const copy = structuredClone(strs);
    const sorted = copy.map((item)=>item.split("").sort((a,b)=>a.localeCompare(b)).join(""));
    // console.log(sorted);
    const obj ={};
    sorted.forEach((item,index)=>{
        if(!obj[item]){
            obj[item] = [copy[index]]
        }
        else{
           obj[item].push(copy[index]) 
        }
    });
    return Object.values(obj)
};