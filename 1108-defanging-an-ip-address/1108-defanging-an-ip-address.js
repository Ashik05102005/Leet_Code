/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
   const res = address.split("").map((x)=>{
        if(x==="."){
            return `[.]`
        }
        return x
    });
    return res.join("");
};