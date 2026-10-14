class Solution:
    def nextGreaterElement(self, nums1: list[int], nums2: list[int]) -> list[int]:
        ans = []
        max_num = max(nums2)
        for num in nums1:
            if num == max_num:
                ans.append(-1)
            else:
                ind = nums2.index(num)
                if ind == len(nums2) - 1:
                    ans.append(-1)
                else:
                    flag = True
                    for i in range(ind + 1, len(nums2)):
                        if nums2[i] > num and flag:
                            ans.append(nums2[i])
                            flag = False

                    if flag:
                        ans.append(-1)
        return ans