phone = {
    "brand": "Samsung",
    "color": "Dark Blue",
    "camera": "Three",
    "Storage": "128GB",
    "CWC" : True,
}

for sub, obj in phone.items():
    print(sub)
    print(obj)
    print(f"{sub} {obj}")

lst = [1,2,3]

print(map(**2 , lst))
