class Solution:
    def defangIPaddr(self, address: str) -> str:
        if '.' not in address :
            return address

        str_list = list(address)
        # while '.' in str_list :
        for i in range(len(str_list)) :
            if str_list[i] == '.' :
                str_list[i] = '[.]'
            if '.' not in address :
                break
        return "".join(str_list)

        