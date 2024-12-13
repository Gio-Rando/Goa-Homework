def manual_replace(string, gap, rep):
    return rep.join(string.split(gap))

def m_r(s1, char, rep):
    res = ""

    for i in s1:
        if i == char:
            res += rep
        else:
            res += i

    return res

def manual_len(length):
    count = 0
    for i in length:
        count += 1
    return count

print(m_r("hello", "e" , "l"))