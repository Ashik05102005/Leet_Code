/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    num = n ;
    let str =''
    while(num>0){
        const rem = num%2 ;
        str += rem;
        num=Math.floor(num/2);
       
    }
   return n===Number(str)

};