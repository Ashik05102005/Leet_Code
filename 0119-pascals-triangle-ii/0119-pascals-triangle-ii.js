/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    /**
 * @param {number} numRows
 * @return {number[][]}
 */
    let res =[]
    for(let i=0; i<=rowIndex;i++){
        const row = []
        for(let j=0; j<=i; j++){
            if(i>1 && j>0&& j!==i ){
                row.push(res[i-1][j-1]+res[i-1][j])
            }
            else{
                row.push(1)
            }
        }
        // console.log(res)
        res.push(row);
    }
    return (res[rowIndex])
};