/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let sum =0;
    for(let i=1; i<=n ; i++){
        // console.log(i);
        if(i%m!==0){
            // console.log(i)
            sum += i ; 
        }
        else{
            console.log(i)
            sum -= i
        }
    }
    return sum
};