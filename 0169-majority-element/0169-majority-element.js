/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const obj = nums.reduce((object, item) => {
        object[item] = (object[item] || 0) + 1;
        return object
    }, {});
    let top = 0;
    let value = Object.values(obj)[0];
    for (let i in obj) {
        if (obj[i] >= value) {
            top = i
            value = obj[i]
        }
    };
    return Number(top)
};