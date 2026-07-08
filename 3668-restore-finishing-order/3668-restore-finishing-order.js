/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    const res=[]
    order.forEach((x)=>{
        for(let i = 0 ; i < friends.length ; i++ ){
            if(x===friends[i]){
                res.push(x)
            }
        }
    })
    return res
};