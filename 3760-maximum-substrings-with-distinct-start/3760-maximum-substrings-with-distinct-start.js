/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
    const count ={}
    const arr = s.split('').reduce((acc,x)=>{
        acc[x]=true;
        return acc
    },{})
    // console.log(arr);
    // arr.forEach((x)=>{
    //     if(!count[x]){
    //         count[x]=true
    //         console.log(x)
    //     }
    // })
    return Object.keys(arr).length
};