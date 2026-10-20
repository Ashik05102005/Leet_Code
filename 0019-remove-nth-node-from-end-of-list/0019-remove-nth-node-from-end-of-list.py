# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: ListNode | None, n: int) -> ListNode | None:
        def rev(head) :
            previous = None 
            current = head 

            while current :
                next_node = current.next 
                current.next = previous 
                previous = current 
                current = next_node
            return previous
        
        if head.next is None :
            return 

        head = rev(head)

        current = head
        for _ in range(1,n - 1):
            current= current.next
        # print(current.val)

        if n == 1 :
            return (rev(current.next))
        print(current.val)
        if current.next is not None :
            current.next = current.next.next
            return rev(head)
            
        
        # while current :
        #     print(current.val)
        #     current = current.next


        

        
