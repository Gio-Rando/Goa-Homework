# def digitize(n):
#     list = []
#     n = str(n)
#     n = n[::-1]
#     for i in n:
#         list.append(i)

#     return list

# digitize(35231)

def smash(words):
    x = ""
    for i in words:
        x += i + " "
    x = x[::-1].replace(" ","", 1)[::-1]
    return x 

print(smash(["hello", "amazing", "world"]))
