/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    let pos = []
    let neg = []
    nums.forEach((num) => {
        if (num < 0) {
            neg.push(num)
        }
        else {
            pos.push(num)
        }
    })
    let i= 0
    j=0
    while(i<nums.length){
        nums[i] = pos[j]
        i++
        nums[i] = neg[j]
        i++
        j++
    }
    return nums
};