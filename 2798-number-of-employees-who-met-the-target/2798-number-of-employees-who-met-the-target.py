class Solution:
    def numberOfEmployeesWhoMetTarget(self, hours: List[int], target: int) -> int:
        res = [hour for hour in hours if hour >= target]
        return len(res)