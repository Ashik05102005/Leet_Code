/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const res = accounts.map((x)=>x.reduce((acc,item)=>acc+item,0));
    return Math.max(...res)
};