class Car:
    def __init__(self,brand,color,hp,year):
        self.color = color
        self.brand = brand
        self.hp = hp
        self.year = year

    def drive(self):
        print("They see me rollin, They hatin")

    def stop(self):
        print("They don't see me rollin, They ain't hatin")

car1 = Car("Ferrari", "red",1600,2023)
car2 = Car("Mercedec", "White",1200,2024)
car3 = Car ("BMW", "Black",1500,2025)

car1.drive()
car2.drive()
car3.drive()
car1.stop()
car2.stop()
car3.stop()


class Person:
    count = 0
    def __init__(self,name,race,age):
        self.name = name
        self.race = race
        self.age = age
        Person.count+=1

    def scream(self):
        print("AAAAAAAAAAAAAAAAAH")

    def say_name(self):
        print(f"Hi, my name is {self.name}")

person1= Person("Kevin","Black",12)
person2= Person("Bob","White",12)

person1.scream()
person1.say_name()
person2.scream()
person2.say_name()
print(Person.count)

# დაწერეთ რას ეწოდება dunder method_ dunder method არის მაგალითად: __init__ ის გამოიყენება class ინიციალიზებისთის
# დაწერეთ რას ეწოდება instance variables_ არის ცვლადები რომლებიც ჩაიწერება dunder method-ს პარამეტრად
# დაწერეთ რას ეწოდება class variables_ არის ცვლადი რომელიც ჩაიწერება class-ში, ფუნქციების გარეთ
# ახსენით რა არის blueprint_ არის ნახაზი/შაბლონი