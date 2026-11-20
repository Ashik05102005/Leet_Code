class Solution:
    def findComplement(self, num: int) -> int:
        res = []
        sum = 0
        while num > 0 :
            rem = num%2 
            num = num // 2 
            res .append(0 if rem == 1 else 1)
        for i in range(len(res)):
            sum += res[i] * 2 ** i 
        return sum
            