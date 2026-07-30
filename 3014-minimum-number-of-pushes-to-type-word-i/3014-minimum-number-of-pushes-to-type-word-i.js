/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    count = 0;
    const wordArray = word.split("")
    const resArr = []
    for(i = 0 ; i < wordArray.length/8; i++){
        const Arr = [];
        for(j = i*8 ; j<(i+1)*8 ; j++ ){
            Arr.push(wordArray[j])
        }
        resArr.push(Arr.join(""))
    }
    const res = resArr.reduce((acc , item , index)=>acc+=item.length*(index+1) ,0 );
    return res
};