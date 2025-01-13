def remove_dups(str):
    x = ""
    for i in str:
        if i not in x:
            x += i
    return x

print(remove_dups("hello"))


def remove_dups_set(str):
    return "".join(set(str))

print(remove_dups_set("hello"))