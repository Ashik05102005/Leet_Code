class Solution:
    def sumOfSquares(self, nums: List[int]) -> int:
        sum = 0
        for index , num  in enumerate(nums, 1 ):
            if len(nums) % index == 0 :
                sum += num * num

        return sum
