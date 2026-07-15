/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function(n) {
    let even=0 ;
    for(let i =1 ; i<=n*2 ; i++){
        if(i%2===0){
            even += i
        }
        else {
            even -=i
        }
    }
    return even;
};