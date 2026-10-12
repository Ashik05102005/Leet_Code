# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeElements(self, head: ListNode | None, val: int) -> ListNode | None:
        if head is None :
            return None
        current = head 
        while current :
            if head.val == val and head.next is not None :
                head = head.next
            current = current.next
        current = head 
        while current.next:
            if current.next.val == val :
                current.next = current.next.next 
                continue
            current = current.next
        
        if head.val == val and head.next is None :
            return None

        return head

