# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def sortList(self, head: ListNode | None) -> ListNode | None:
        if head is None or head.next is None :
            return head
        sorted_list = []

        current = head 

        while current :
            sorted_list.append(current.val)
            current = current.next
        sorted_list.sort()

        current = head 
        i = 0
        while current :
            current.val = sorted_list[i]
            i = i+1
            current = current.next

        return head
        
        