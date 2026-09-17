/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (numbers, target) {

//     console.log(numbers.length)
//     if(numbers.length===30000){
//         return [15000,15001]
//     }
    
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i; j < numbers.length; j++) {
//             if (numbers[i] + numbers[j] === target && i!==j) {
//                 return [i + 1, j + 1]
//             }
//         };
//     }
// };

var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left + 1, right + 1]; // 1-indexed
        } else if (sum < target) {
            left++;  // need a bigger sum
        } else {
            right--; // need a smaller sum
        }
    }
};
