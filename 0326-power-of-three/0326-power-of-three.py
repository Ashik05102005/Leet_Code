class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        if n < 1:
            return False
        if n == 3:
            return True
        for i in range(int((n ** 0.5 )** 0.5) + 3):
            if 3**i == n:
                # print("inside",i , n)
                return True
        return False
