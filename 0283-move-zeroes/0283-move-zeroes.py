class Solution:
    def moveZeroes(self, nums: list[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        zeros_count = nums.count(0)
        for count in range(0 , zeros_count):
            nums.remove(0)
            nums.append(0)
