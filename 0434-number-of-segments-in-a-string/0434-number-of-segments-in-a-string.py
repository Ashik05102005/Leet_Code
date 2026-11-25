class Solution:
    def countSegments(self, s: str) -> int:
        if s.strip():
            res = s.strip().split(" ")
            res = [char for char in res if char ]
            return len(res)
        else :
            return 0
        