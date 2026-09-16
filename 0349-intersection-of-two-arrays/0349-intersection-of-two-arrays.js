/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const res = []
    nums1.forEach(num=>{
        if(nums2.includes(num)&&!res.includes(num)){
            res.push(num)
        }
    });
    return(res)
};