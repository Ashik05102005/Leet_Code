/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const newArray=[...nums1,...nums2].sort((a,b)=>a-b)
    if(newArray.length%2===0){
        const num1 = newArray[newArray.length/2];
        const num2 = newArray[(newArray.length/2)-1];
        console.log(num1,num2)
        return (num1+num2)/2

    }
    else{
        return newArray[Math.floor(newArray.length/2)]
    }
};