/**
 * @param {number} n
 * @param {number[]} requests
 * @return {number}
 */
var elevatorRequests = function(n, requests) {
    let res = 0 ;
    if(requests.length===1){
        return Math.abs(0-requests[0])
    }
    for(let i=0 ; i<requests.length-1 ; i++){
        if(i===0){
            res+=Math.abs(0-requests[i]);
        }
        res+=Math.abs(requests[i]-requests[i+1]);
    };
    return res
    
};