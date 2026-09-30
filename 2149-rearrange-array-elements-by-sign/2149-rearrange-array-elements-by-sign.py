class Solution:
    def rearrangeArray(self, nums: list[int]) -> list[int]:
        pos = []
        neg = []
        for num in nums:
            if num < 0:
                neg.append(num)
            else:
                pos.append(num)

        i = 0
        j = 0

        while i < len(nums):
            nums[i] = pos[j]
            i += 1
            nums[i] = neg[j]
            i += 1
            j += 1

        return nums
