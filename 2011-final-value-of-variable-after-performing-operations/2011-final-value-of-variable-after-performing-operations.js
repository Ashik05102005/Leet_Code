/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let num = 0 ; 
    operations.forEach(x=>{
        if(x==="--X" || x ==="X--"){
            num--
        }
        else{
            num ++;
        }
    })
    return num ;
};