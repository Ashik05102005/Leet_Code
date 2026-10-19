# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
    
class Solution:
    def mergeTwoLists(self, list1: ListNode | None, list2: ListNode | None) -> ListNode | None:
        def ll_to_list( head) :
            res = []
            current = head 
            while current :
                res.append(current.val)
                current = current.next
            print(res)
            return res
        if list1 is None :
            return list2
        if list2 is None :
            return list1
    
        lists = ll_to_list(list1)
        lists.extend(ll_to_list(list2))
        lists.sort()
        current = list1 
        while current.next  :
            current = current.next
        current.next = list2
        i = 0
        current = list1
        while current :
            # print("sorted data :", lists[i])
            # print(current.val)
            current.val = lists[i]
            current = current.next
            i +=1



        return list1