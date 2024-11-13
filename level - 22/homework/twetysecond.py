# შექმენით ფუნქცია რომელიც დააბრუნებს "You got discount" თუ მომხმარებელი არის არასრულწლოვანი, სხვა შემთხვევაში დააბრუნებს "You didn't get discount"

def discount(age):
  if age < 18:
    return "You will receive discount"
  else:
    return "You will not receive discount"
  


print(discount(12))

# შექმენით ფუნქცია manual_reverse, რომელიც არგუმენტად მიიღებს string'ს და დააბრუნებს ამ string'ს ოღონდ შეტრიალებულად

def manual_reverse(str):
  return str[::-1]

print(manual_reverse(str(input())))

# გატესტეთ .upper(), .lower(), .capitalize(), .swapcase() და .find() მეთოდები

txt = "HEllo"
print(txt.upper())
print(txt.lower())
print(txt.capitalize())
print(txt.swapcase())
print(txt.find("o"))

#  ახსენით რატომ ჰქვიათ ამ ფუნქციებს მეთოდები

# ყოველივე ამ ფუნქციებს მეთოდები იმიტომ ეწოდება რომ ისინი არიან ფუნქციები რომლებსაც მხოლოდ ერთი კონკრეტული ფუნქცია აქვს და გამოიყენება მხოლოდ ერთი კონკრეტული ფუნქციის შესასრულებლად მათ არ გააჩნიათ ბევრი ფუნქციების შესრულების უნარი

# ახსენით რა არის dot notation და რა შემთხვევაში გამოიყენება
# გამოიყენება მეთოდების შემთხვევაში
