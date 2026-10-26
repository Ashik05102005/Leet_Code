class Solution:
    def singleNumber(self, nums: list[int]) -> int:
        
        for num in nums :
            count = nums.count(num)
            if count == 1 :
                return num