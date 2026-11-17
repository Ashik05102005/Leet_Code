class Solution:
    def findDisappearedNumbers(self, nums: list[int]) -> list[int]:
        seen = set(nums)
        res = [i for i in range(1,len(nums)+1) if i not in seen]

        return res

                
        