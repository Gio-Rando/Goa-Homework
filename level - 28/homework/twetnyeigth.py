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

list2 = [0 , 1 , 2 , 3 ]
list2.append(4)
list2.insert(5 , 5)
print(list2)

list3 = ["Samsung" , "Apple" , "Huawei" , "Nokia" , "Google" , "Sony" ]

list3.pop(5)
print(list3)

list3.remove("Huawei")

list3.append("OnePlus")

list3.insert(1, "Motorola")

list3.pop()

print(len(list3))

str = "string"
print(len(str))