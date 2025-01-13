try:
    print(x)
except NameError:
    print("x is not defined")

y = "well"

try:
    print(y[9])
except IndexError:
    print(y[-1])

try:
    print(int("1.d"))
except ValueError:
    print('value error')

list = [1,'2',3, 'hello' , 'hi', 'bye' ,'4','5','6',7,8,92,10]
x = 0
for i in list:
    if type(i) == int or i.isdigit():
        x += int(i)
print(x)