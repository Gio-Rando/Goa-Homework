def manual_find(s , i):
    y = 0
    for x in s:
        if i == x:
            return y
        else:
            y += 1
    return -1

print(manual_find("hello world", "o"))

def manual_swapcase(s):
    res = ""
    for i in s:
        if i == i.lower():
            res = res + i.upper()
        else:
            res = res + i.lower()
    return res

print(manual_swapcase("HeLlo wOrLd"))