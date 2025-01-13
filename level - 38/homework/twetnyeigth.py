def manual_in(el , col):
    for i in col:
        if i == el:
            return True
    return False

print(manual_in("1" ,"1234566" ))