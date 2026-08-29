/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    // const limit = Math.floor(num/2);
    let sum=0;
    for(let i=1; i<=Math.floor(num/2);i++){
        if(num%i===0){
            sum+=i
        }
    };
    // console.log(sum===num);
    return sum===num
};