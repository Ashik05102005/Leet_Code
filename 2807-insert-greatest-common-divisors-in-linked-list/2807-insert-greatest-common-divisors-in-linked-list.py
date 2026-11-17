# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def insertGreatestCommonDivisors(self, head: Optional[ListNode]) -> Optional[ListNode]:
        def gcd(a, b):
            while b != 0:
                a, b = b, a % b
            return a
        if head is None or head.next is None :
            return head
        gcd_list = []
        current = head
        while current.next :
            res=gcd(current.val , current.next.val)
            gcd_list.append(res)
            current = current.next 
        current = head
        while current :
            if not gcd_list :
                break
            value = gcd_list.pop(0)
            next_node = current.next
            new_node = ListNode(value)
            current.next = new_node
            new_node.next = next_node
            current = next_node
        return head
            

                

