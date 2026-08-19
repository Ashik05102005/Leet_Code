/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const obj = names.map((item,index)=>{return{name:item ,height:heights[index]}});
    obj.sort((a,b)=>b.height-a.height);
    console.log(obj)
    return obj.map((x)=>x.name)
};