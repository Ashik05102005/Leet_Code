# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def getDecimalValue(self, head: ListNode | None) -> int:
        binary_nums = []
        current = head 
        number = 0
        while current:
            binary_nums.append(current.val)
            current = current.next
        binary_nums.reverse()
        for index , num in enumerate(binary_nums) :
            number += num * 2 ** index
        return number

