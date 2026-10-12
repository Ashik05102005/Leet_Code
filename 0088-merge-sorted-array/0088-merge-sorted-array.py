class Solution:
    def merge(self, nums1: list[int], m: int, nums2: list[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        
        nums2 = nums2[0:n] 
        for i in range(m,len(nums1)):
            nums1.pop()
        nums1.extend(nums2)
        nums1.sort()
        