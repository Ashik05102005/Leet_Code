class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        seen= set()
        for char in sentence : 
            seen.add(char)
        return True if len(seen) == 26 else False
