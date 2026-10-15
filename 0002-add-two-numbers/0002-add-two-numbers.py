# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def addTwoNumbers(self, l1: ListNode | None, l2: ListNode | None) -> ListNode | None:
        def get_list (head) :
            res = []
            result = 0
            current = head 
            while current :
                res.append(str(current.val))
                current = current.next
            res.reverse()
            result = int("".join(res))

            return result 

        if l1.next is None and l2.next is None :
            l1.val = l1.val + l2.val
            if l1.val >= 10 :    
                l1_list = list(map(lambda num : int(num) , str(l1.val)))
                value = l1_list.pop()
                l1.val = value 
                value = l1_list.pop()
                l1.next = ListNode(value)
                return l1
            return l1
        
        total = get_list(l1) + get_list(l2)
        total = list(map(lambda num : int(num) , str(total)))
        
        head = l1 
        new_node = None

        current = head 
        while total :
            value = total.pop()

            if current.next is None :
                current.val = value
                if total :
                    current.next = ListNode()
                
            current.val = value
            current = current.next
            

        return l1

        

        

