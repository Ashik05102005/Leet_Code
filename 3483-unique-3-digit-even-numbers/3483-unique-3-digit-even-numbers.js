/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function(digits) {
    const res = []
    for(let i = 0 ; i < digits.length ; i++ ){
        for(let j = 0 ; j < digits.length ; j++ ){
            if(j!==i){
                for(let k = 0 ; k < digits.length ; k++){
                    if(k!==i && k!==j){
                        const num = Number(([digits[i],digits[j],digits[k]]).join(""))
                        if(num%2===0 && num>=100){
                            if(!res.includes(num)){
                                res.push(num)
                            }
                        }
                    }
                }
            }
        } 
    }
    // console.log(res)
    return res.length
};