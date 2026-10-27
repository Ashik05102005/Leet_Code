class Solution:
    def sortTheStudents(self, score: list[list[int]], k: int) -> list[list[int]]:
        # score_dict = {score_list[k] : index  for index ,score_list in enumerate(score) }
        # sorted_dict = dict(sorted(score_dict.items()))
        
        for i in range(len(score)) :
            for j in range(len(score) - i - 1):
                if score[j][k] < score[j+1][k] :
                    score[j] , score[j + 1] = score[j + 1] , score[j]
        return score