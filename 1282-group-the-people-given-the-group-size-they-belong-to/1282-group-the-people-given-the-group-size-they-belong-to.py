class Solution:
    def groupThePeople(self, groupSizes: list[int]) -> list[list[int]]:
        # freq = {}
        # for index , num in enumerate(groupSizes) :
        #     if num in freq :

        #         freq[nu.append(index)
        #     else :
        #         freq[num] = [[index]]

        # print(freq) 
        res = []

        nums = sorted(set(groupSizes))
        print(nums)

        for num in nums :
            arr = []
            for index , value in enumerate(groupSizes) :
                if value == num :
                    if len(arr) == num :
                        res.append(arr)
                        arr = []
                    arr.append(index)

            res.append(arr)
        return res

                    

