list = ["Hello" ,"my" , "name", "is"]

print(len(list))

list.append("Giorgi")
print(list)

list.insert(5 , "Giorgobiani")

list.pop(0)
print(list)

list.remove("my")
print(list)

x = list.pop(0)
print(x)
print(list) 

# pop uses indexes, while remove uses strings

list4 = [0 , 1 , 2 , 3 ]
list4.append(4)
list4.insert(5 , 5)
print(list4)