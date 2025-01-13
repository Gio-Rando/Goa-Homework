NameErro = "როდესაც ცვლადი არ არსებობს"
IndexErro = "როდესაც index ვერ წვდება"
ValueErro = "მაგალითად int('gio')"

try:
    print(x)
except NameError:
    print("x is not defined")

y = "hello"

try:
    print(y[9])
except IndexError:
    print(y[-1])

try:
    print(int("a"))
except ValueError:
    print(ord("a"))

# try/expect გვეხმარება რომ error გავუმკლავდეთ ისე რომ კოდს საფრთხე არ შევუქმნათ