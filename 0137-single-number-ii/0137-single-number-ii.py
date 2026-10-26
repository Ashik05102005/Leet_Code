class Solution:
    def singleNumber(self, nums: list[int]) -> int:
        
        for num in nums :
            if 1 == nums.count(num) :
                return num