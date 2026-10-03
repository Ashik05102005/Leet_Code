class Solution:
    def decodeMessage(self, key: str, message: str) -> str:
        alphabets = list('abcdefghijklmnopqrstuvwxyz')
        key_dict = {" ": " "}
        index=0
        res = ""
        for char in key :
            if char not in key_dict and char != " ":
                key_dict[char] = alphabets[index]
                index += 1
        
        for char in message :
            res+=key_dict[char]

        return res

