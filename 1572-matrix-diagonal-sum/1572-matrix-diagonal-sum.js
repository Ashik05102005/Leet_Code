/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
   const first = mat.map((x,index)=>{
    if(index===x.length-1-index){
        return x[index]
    }
    return x[index]+x[x.length-1-index];
   })

   return (first.reduce((total,num)=>total+=num,0))
};