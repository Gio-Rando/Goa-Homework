y = int(input("Enter Age: "))#აქ გამოყენებულია input rompt-ის ნაცვლად
if y < 13:# აქ გამოყენებულია მხოლოდ ორი წერტილი () და {}-ის ნავლად
    print("You are a kid")
elif y >= 13 and y < 18: # აქ გამოყენებულა elif და and else if და && ნაცვლად
    print("You are not an adult yet")
else:
    print("You are an adlut")
