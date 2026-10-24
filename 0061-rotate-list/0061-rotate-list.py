# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: ListNode | None, k: int) -> ListNode | None:
        # current = head 
        if head is None or head.next is None :
            return head
        if head.next.next is None :
            for i in range(k % 2) :
                seccond_node = head.next
                seccond_node.next = head
                head.next  = None 
                head = seccond_node
            return head

        current = head 
        length = 0 
        while current :
            length += 1
            current = current.next    
        for i in range(k % length) :
            current = head 
            while current.next.next.next:
                current = current.next 
            last_node = current.next.next
            # print(last_node) 
            last_node.next = head 
            current.next.next = None
            head = last_node        
        return head