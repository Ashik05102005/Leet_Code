/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const obj = {};
    nums.forEach(num=>{
        if(obj[num]){
            obj[num]=obj[num]+1
        }
        else{
            obj[num]=1
        }
    });
    let top=0;
    let value=Object.values(obj)[0];
    console.log(value)
    for(let i in obj){
        console.log(i,":",obj[i])
        if(obj[i]>=value){
            console.log(i)
            top = i
            value=obj[i]
        }
    };
    return Number(top)
};