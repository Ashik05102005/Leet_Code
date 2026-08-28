/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const res =[]
    for(let i=0; i<numRows;i++){
        const row = []
        for(let j=0; j<=i; j++){
            if(i>1&&j>0&&j!==i){
                // console.log(res[i-1][j-1]+res[i-1][j]);
                row.push(res[i-1][j-1]+res[i-1][j])
            }
            else{
                row.push(1)
            }
        }
        res.push(row);
    }
    return res
};