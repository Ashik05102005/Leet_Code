class Solution:
    def minMoves(self, nums: List[int]) -> int:
        maximum = max(nums)
        count = 0
        for index , num in enumerate(nums):
            if num != maximum :
                while True :
                    nums[index] += 1 
                    count += 1
                    if nums[index] == maximum :
                        break

        return count