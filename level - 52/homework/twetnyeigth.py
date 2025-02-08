lmbd = lambda a , b : str(a) + str(b)
print(lmbd("G",10))
lmbd = lambda a, b , c: a + b + c
print(lmbd(12,10,98))
lmbd = lambda a: sum(a)
print(lmbd([12,10,98]))
lmbd = lambda a , b: a.count(b)
print(lmbd("Hello" , "l"))
