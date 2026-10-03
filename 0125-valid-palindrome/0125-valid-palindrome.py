class Solution:
    def isPalindrome(self, s: str) -> bool:
        new_str = ""
        # if(s == "0P" or s == "P0" ):
        #     return False
        for char in s :
            if char.isalnum():
                new_str +=char.lower()
        # if(len(new_str) == 1 ) :
        #     return False

        reversed_str = list(new_str)
        reversed_str.reverse()
        reversed_str = "".join(reversed_str)
        # print(reversed_str)
        if(new_str == reversed_str):
            return True
        else :
            return False

        # if 