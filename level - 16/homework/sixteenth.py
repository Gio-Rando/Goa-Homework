for i in range(1,11):
    print(i * i)

i = 0

while i <= 10:
    print(i * i)
    i += 1

for i in range (1,11):
    if i % 2 == 1:
        print("Odd")
    else:
        print("even")

score = int(input("Input score: "))

if score >= 90 and score <= 100:
    print("Grade A")

elif score >= 80 and score <= 90:
    print("Grade B")

elif score >= 70 and score <= 80:
    print("Grade C")

elif score >= 60 and score <= 70:
    print("Grade D")

elif score <= 60:
    print("You've failed")
else:
    print("You can't enter number above 100")
