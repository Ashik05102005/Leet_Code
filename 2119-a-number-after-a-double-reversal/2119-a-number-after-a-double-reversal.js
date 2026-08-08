/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
   const firstNum = Number(num.toString().split("").reverse("").join(""));
   const seccondNum = Number(firstNum.toString().split("").reverse("").join(""));

   return num===seccondNum
};