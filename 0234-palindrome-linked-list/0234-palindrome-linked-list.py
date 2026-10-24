# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: ListNode | None) -> bool:
        res= ""
        current = head 
        while current :
            res += str(current.val )
            current = current.next

        return True if res == res[::-1] else False