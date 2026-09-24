class Solution:
    def smallestIndex(self, nums: List[int]) -> int:
        for i,n in enumerate(nums) :
            sum = 0  
            while n>0 :
                sum += n%10
                n=int(n/10)

            if i == sum : 
                return i
        
        return -1