class Solution:
    def isPalindrome(self, s: str) -> bool:
        new_str = ""
        for char in s:
            if char.isalnum():
                new_str += char.lower()
        reversed_str = list(new_str)
        reversed_str.reverse()
        reversed_str = "".join(reversed_str)
        if new_str == reversed_str:
            return True
        else:
            return False
