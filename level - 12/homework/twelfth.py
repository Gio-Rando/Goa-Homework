print(True and False) #False
print(True and True) #True
print(False and True) #False
print(False and False) #False
print(True and False and True) #False 
print(True and False and False) #False
print(True and False and True and True) #False
print(False and True and False and False) #False
print(False and True and True and True) #False
print(False and True and False and False and True) #False

print(True or False) #True
print(True or True) #True
print(False or True) #True
print(False or False) #False
print(True or False or True) #True 
print(True or False or False) #True
print(True or False or True or True) #True
print(False or True or False or False) #True
print(False or True or True or True) #True
print(False or True or False or False or True) #True

print(True and False or False) #False
print(True and True or False) #True
print(False and True or True) #True
print(False and False or True) #True
print(True and False or True) #True 
print(True or False and False) #True
print(True and False or True and True) #True
print(False or True and False or True) #True
print(False or True and True and True) #True
print(False and True or False and False and True) #False

print(2 > 1 and 3 > 4 or 5 < 6) #True
print(7 < 8 and 10 > 9 or 11 < 12) #True
print(13 > 14 and 15 < 16 or 18 < 17) #False
print(20 > 19 and 21 > 22 or 24 < 23) #False
print(26 < 25 and 28 > 27 or 30 < 29) #False
print(32 > 31 or 33 == 33 and 34 > 33) #True
print(35 == 36 and 37 > 38 or 40 < 39 and 41 > 42) #False
print(44 > 45 or 46 == 46 and 47 == 48 or 50 < 49) #False
print(51 < 52 or 53 > 54 and 56 < 57 and 59 > 60) #True
print(61 == 62 and 64 > 63 or 66 > 65 and 67 > 68 and 69 == 70) #False