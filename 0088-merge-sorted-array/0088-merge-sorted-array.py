class Solution:
    def merge(self, nums1: list[int], m: int, nums2: list[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        i=0
        for index in range(m,len(nums1)):
            nums1.pop(m)
        nums1.extend(nums2[0:n])
        nums1.sort()

        