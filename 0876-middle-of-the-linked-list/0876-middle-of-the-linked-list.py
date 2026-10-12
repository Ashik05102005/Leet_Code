# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: ListNode | None) -> ListNode | None:
        length = 0
        current = head  

        while current :
            length += 1 
            current = current.next
        
        middle = int(length/2) + 1
        
        current = head 

        for _ in range(middle - 1):
            current = current.next
            
        head = current
        return head
