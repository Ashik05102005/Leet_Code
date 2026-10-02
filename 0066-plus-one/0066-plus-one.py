class Solution:
    def plusOne(self, digits: list[int]) -> list[int]:
        digits.reverse()
        number = 0
        for index , num in enumerate(digits) :
            number  += num*10**index
        num_str = str(number+1)
        return list(map(lambda num : int(num) , list(num_str)))

        