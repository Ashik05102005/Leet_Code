class Solution:
    def evaluate(self, s: str, knowledge: list[list[str]]) -> str:
        know = dict(knowledge)
        i = 0 
        while "(" in s :
            ind = s.index("(")
            start = ind
            while s[ind] != ")" :
                ind += 1 
            end = ind
            rep_val = s[start : end + 1] 
            val = s[start + 1 : end]
            s= s.replace(rep_val , know.get(val , "?"))
            
            
        return s
        
            
            