class Solution:
    def findDegrees(self, matrix: list[list[int]]) -> list[int]:
        res = []
        for list_nums in matrix :
            sum = 0
            for nums in list_nums :
                # print(nums)
                sum = sum+nums

            res.append(sum)
        return res
            