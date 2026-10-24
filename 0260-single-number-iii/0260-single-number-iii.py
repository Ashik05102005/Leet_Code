class Solution:
    def singleNumber(self, nums: list[int]) -> list[int]:
        res = {key  for key in nums if nums.count(key)== 1}
        return list(res)
