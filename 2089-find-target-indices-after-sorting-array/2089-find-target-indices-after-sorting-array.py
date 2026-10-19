class Solution:
    def targetIndices(self, nums: list[int], target: int) -> list[int]:
        nums.sort()
        res = []
        for index , num in enumerate(nums) :
            if num == target :
                res.append(index)

        return res