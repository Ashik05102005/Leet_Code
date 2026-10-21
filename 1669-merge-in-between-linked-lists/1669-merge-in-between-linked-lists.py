# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeInBetween(self, list1: ListNode, a: int, b: int, list2: ListNode) -> ListNode:
        start = None 
        end = None
        i = 1 
        current = list1 

        while current :
            if i == a :
                start = current
            if i == b+1 :
                end = current.next 
            i += 1
            current = current.next
        start.next = list2 
        current = start 
        while current.next :
            current = current.next 
        current.next = end

        current = list1
        return list1
 

                
