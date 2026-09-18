/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // const obj = {};
    // nums.forEach(num=>{
    //     if(obj[num]){
    //         obj[num]=obj[num]+1
    //     }
    //     else{
    //         obj[num]=1
    //     }
    // });
    const obj = nums.reduce((object, item) =>{
        object[item] = (object[item]||0)+1;
        return object
    },{});
    console.log(obj)
    let top=0;
    let value=Object.values(obj)[0];
    for(let i in obj){
        if(obj[i]>=value){
            top = i
            value=obj[i]
        }
    };
    return Number(top)
};