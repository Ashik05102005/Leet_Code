/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    const res = [];
    for (let i = 0; i < Math.ceil(arr.length / size); i++) {
        const array = []
        for (let j = 0; j < size; j++) {
            if (arr[i * size + j]!==undefined) {
                array.push(arr[i * size + j])
            }
        };
        res.push(array)
    }
    return res
};
