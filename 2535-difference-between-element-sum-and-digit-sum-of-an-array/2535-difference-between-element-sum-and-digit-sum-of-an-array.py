class Solution:
    def differenceOfSum(self, nums: list[int]) -> int:
        elements_sum = sum(nums)
        digits_sum = 0 
        for num in nums :
            while num > 0  :
                digits_sum += num % 10
                num = int(num/10)
        # print(digits_sum)
        return sum(nums) - digits_sum