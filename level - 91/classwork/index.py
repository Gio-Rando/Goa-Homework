# Composition_ როცა ერთი კლასის ობიექტი სხვა კლასშია გამოყენებული, და მის გარეშე ვერ არსებობს
# Aggregation_ როცა ერთი კლასის ობიექტი სხვა კლასშია გამოყენებული, მაგრამ ისინი დამოუკიდებლად არსებობენ

class Screen:
    def __init__(self, size):
        self.size = size

class Battery:
    def __init__(self, endurance):
        self.endurance = endurance
    
class Phone:
    def __init__(self,brand,sizeOf,enduranceOf):
        self.brand = brand
        self.sizeOf = Screen(sizeOf)
        self.enduranceOf = Battery(enduranceOf)
    

phone = Phone("Iphone", "8.5in", "150m")

print(phone.brand)
print(phone.sizeOf.size)
print(phone.enduranceOf.endurance)


class Developer:
    count = 0
    def __init__(self, name):
        self.name = name
        Developer.count+=1

    # instance
    def name(self):
        return f"{self.name} wants this job"
    
    # staticmethod
    @staticmethod
    def isAvaibele(position):
        positions = ["Frontend","Backend"]
        return position in  positions
    # classmethod
    @classmethod
    def counter(cls):
        return f"There are {cls.count} applications"

per1 = Developer("bob")
per2 = Developer("bob")
per3 = Developer("bob")
per4 = Developer("bob")

print(Developer.isAvaibele("Fullstack"))
print(Developer.counter())

# Multiple Inheritance_ როცა ერთი კლასი მემკვიდრეობით იღებს რამდენიმე მშობელ კლასს
# Multilevel Inheritance_ როცა ერთი კლასი მემკვიდრეობით იღებს მშობელ კლასს, რომელიც ასევე მემკვიდრეობით იღებს სხვა მშობელ კლასს

class bankAcc:
    def __init__(self,name,mail,password):
        self.name = name
        self._mail = mail # protected_ ეს დაცულია მაგრამ ნაკლებად დაცული ინფორმაცია
        self.__password = password # private_ ეს ძალიან კარგად დაცული ინფორმაცია
    def showPassword(self):
        return self.__password
    
user1 = bankAcc("Bob","bobadze20@gmail.com","bob200125")

print(user1.name)
print(user1._mail)
print(user1.showPassword())