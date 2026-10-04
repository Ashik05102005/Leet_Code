class Solution:
    def replaceDigits(self, s: str) -> str:
        alphabets = list("abcdefghijklmnopqrstuvwxyz")
        # print(len(alphabets))
        res = ""
        for index , char in enumerate(s) :
            if char.isdigit() :
                al_index = alphabets.index(s[index-1])
                res+=alphabets[al_index+int(char)]
            else:
                res += char
        return res
                