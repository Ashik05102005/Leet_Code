class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        num_set = set(nums)
        nums.clear()
        for num in num_set:
            nums.append(num)
        nums.sort()
