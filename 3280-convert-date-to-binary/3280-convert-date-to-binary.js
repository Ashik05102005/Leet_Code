/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    let dateArray=date.split("-").map(x=>Number(x));
    console.log(dateArray);

    const result = dateArray.map((x)=>{
        let res=''
        while(x>0){
            const rem = x%2;
            res+=rem;
            x=Math.floor(x/2);
        }
        return res.split("").reverse().join("")
    })
    return result.join("-")
    
};