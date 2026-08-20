/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    const lettersArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const reversed =  ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'].reverse();
    let charObj = {}
    lettersArray.forEach((x,index)=>{
        charObj = {...charObj,[x]:weights[index]};
    })
    // console.log(charObj);
    const res = words.map((x)=>(x.split("")
                        .map((letter)=>{
                                return charObj[letter]
                            })
    ))
    const sum = res.map((mainItem)=> mainItem.reduce((acc,item)=>acc+=item))
    const result = sum.map((item)=>{
        const index = item%26;
        // console.log(index)
        return reversed[index]
    });
    return result.join("")
};