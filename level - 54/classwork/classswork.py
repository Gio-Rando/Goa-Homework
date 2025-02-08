lst = [1,2,3,4]
print(list(map(lambda a:a ** 2 , lst)))
lst = [0 ,20 , 30 , 40]
print(list(map(lambda a: a * 33.8, lst)))
lst =  ["hello", "world", "python"]
print(list(map(lambda a: a.capitalize(), lst)))
lst = [1, 2, 3, 4, 5, 6, 7, 8]
print(list(filter(lambda a: a % 2 ==0, lst)))
lst = [1, 2, 3, 4, 5, 6, 7, 8]
print(list(filter(lambda a: a % 2 ==0, lst)))
lst = ["cat", "house", "tree", "car"]
print(list(filter(lambda a: len(a)== 4 , lst)))
lst = [3, 9, 15, 22, 27, 30]
print(list(filter(lambda a: a % 3 ==0, lst)))
# 1) რომლებია mutable მონაცემთა ტიპები?
# list set dict
# 2) რომლებია immutable მონაცემთა ტიპები?
# str int tuple
# 3) რა ეწოდება lambda ფუნქციას მეორენაირად?
# ანონიმური
# 4) რა განსხვა0ვებაა map'სა და filter'ს შორის?
# map list-ში არსებულ მნიშვენლობებს ცვლის და იმას გვიბრუნებს, ხოლო filter ფვიბრუნებს რომელიც უდრის Trues 
# 5) რა ჰქვია ორი სტრინგის შეერთებას?
# concatenation