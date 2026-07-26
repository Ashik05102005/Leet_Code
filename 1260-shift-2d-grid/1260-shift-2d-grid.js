/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    const len =grid[0].length ;
    const gridArray = grid.reduce((accArray , numArray)=>{
       return [...accArray ,  ...numArray]
    },[])
    for(let i=0; i<k ; i++){
        const val =gridArray.pop();
        gridArray.unshift(val);
    }
    console.log(gridArray);
    const res =[]
    for(let i = 0 ; i<gridArray.length/len;i++){
        // console.log('-------');
        let newCol =[]
        for(j=i*len ;j<i*len+len;j++){
            // console.log(gridArray[j])
            newCol.push(gridArray[j]);
        }
        // console.log(newCol)
        res.push(newCol)
    }
    return res
};