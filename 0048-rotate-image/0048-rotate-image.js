/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = (matrix) => {
    // console.log(matrix)
    const newMatrix = structuredClone(matrix) ;
    // const rowsArray = []
    for(let i=0;i<newMatrix.length;i++){
        const row = []
        for(let j=0 ; j<newMatrix.length;j++){
            row.unshift(newMatrix[j][i]);
        }
        matrix[i]=row
    };
};