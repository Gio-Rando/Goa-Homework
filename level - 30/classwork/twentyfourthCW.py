def digitize(n):
    list = []
    n = str(n)
    n = n[::-1]
    for i in n:
        list.append(i)

    return list

digitize(35231)