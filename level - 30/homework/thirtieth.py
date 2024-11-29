def manual_replace(string, gap, rep):
    return rep.join(string.split(gap))

def manual_len(length):
    count = 0
    for i in length:
        count += 1
    return count