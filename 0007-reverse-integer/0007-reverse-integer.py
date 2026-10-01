class Solution:
    def reverse(self, x: int) -> int:

        def reverse(num):
            rev = 0
            while num > 0:
                rem = num % 10
                rev = rev * 10 + rem
                num = int(num / 10)
            return rev

        reversed_num = 0

        
            # print("insidde")
        if x > 0:
            reversed_num = reverse(x)

        else:
            x = abs(x)
            reversed_num = -reverse(x)
        
        if -2**31 <= reversed_num <= 2**31 - 1:
            return reversed_num
        else :
            return 0
