class Solution:
    def defangIPaddr(self, address: str) -> str:
        str_list = list(address)
        for i in range(len(str_list)) :
            if str_list[i] == '.' :
                str_list[i] = '[.]'
        return "".join(str_list)

        