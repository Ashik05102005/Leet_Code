class Solution:
    def canBeTypedWords(self, text: str, brokenLetters: str) -> int:
        text_list = text.split(" ")
        count = len(text_list)
        b_list =list(brokenLetters)
        
        print(text_list)
        print(b_list) 

        for word in text_list :
            flag = True 
            for char  in b_list :
                if char in word and flag:
                    count -= 1
                    flag = False
        return count

