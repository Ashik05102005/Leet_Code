class Solution:
    def countDigits(self, num: int) -> int:
        # digits = list(map(lambda char : int(char) , str(num) ))
        count = 0
        for digit in list(map(lambda char : int(char) , str(num) )) :
            if num % digit == 0 :
                count += 1
        
        return count
            