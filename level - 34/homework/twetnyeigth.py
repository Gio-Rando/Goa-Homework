def manual_max(lst):
    x = lst[0]
    for i in lst:
        if i > x:
            x = i
    return x
            

def manual_min(lst):
    x = lst[0]
    for i in lst:
        if i < x:
            x = i
    return x
        
print(manual_min([117, 110, 99, 104 , 78 , 107, 115]))        
print(manual_max([117, 110, 99, 104 , 78 , 107, 115]))
