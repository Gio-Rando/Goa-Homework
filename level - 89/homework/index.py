# Initialization_ მაგალითად innit, ის გამოიყენება ინიციალებისთვის მაგ:
class Hello:
    def __init__(self,name):
        self.name = name
# ინიციალებურია name პარამეტრი

# Class variables_ კლასში მყოფი ცვლადები, ფუნქციების გარეთ, მაგ:
class Hi:
    count = 0
    def __init__(self):
        Hi.count += 1

bob = Hi() 
bob = Hi() 
bob = Hi() 
print(Hi.count)

# Instance methods_ იმ კლასის მეთოდი, რომელიც კლასის ინიციალიზებას საჭიროებს

class How:
    def __init__(self,name):
        self.name = name
    def areYou(self):
        print(f"I'm alright, thanks for asking {self.name}")

# Inheritance_ მემკვიდრეობა

class Winslow:
    def __init__(self, name):
        self.name = name
    def sayHi(self):
        print("hi")

class Polo(Winslow):
    def Goodbye(self):
        print("Goodbye")

marco = Polo("Marco")

marco.sayHi()

# Multiple inheritance_ მრავალჯერადი მემკვიდრეობა, როცა ერთი კლასი მემკვიდრეობით იღებს რამდენიმე მშობელ კლასს, მაგ:

class IAmRunnimng:
    def __init__(self,name, age):
        self.age = age
        self.name = name

    def sayHi(self):
        print("hi")

class OutOf:
    def goodbye(self):
        print(f"Goodbye {self.name}")

class Ideas(IAmRunnimng,OutOf):
    def welcome(self):
        print(f"welcome {self.name}")

hello = Ideas("Looloo",123)

hello.welcome()
hello.goodbye()
hello.sayHi()

# Multilevel inheritance_ როცა ერთი კლასი მემკვიდრეობით იღებს მშობელ კლასს, რომელიც ასევე მემკვიდრეობით იღებს სხვა მშობელ კლასს

class Great:
    def __init__(self,last):
        self.last = last
    def opa(self):
        print("noooooooooooo")
class Grand(Great):
    def yolo(self):
        print(f"hohohohohoho {self.last}")
class Current(Grand):
    def yo(self):
        print(f"toast")

joe = Current("lottery")

joe.opa()
joe.yolo()
joe.yo()

# super()_ ფუნქცია, რომელიც გამოიყენება მშობელ კლასის მეთოდების გამოძახებისათვის შვილ კლასში
class Animals:
    def __init__(self,color):
        self.color = color
    def run(self):
        print("Running")
class Birds(Animals):
    def __init__(self, color, beakSize):
        super().__init__(color)
        self.beakSize = beakSize
    def fly(self):
        print("Flying")

parrot = Birds("red",6)

print(parrot.beakSize)
parrot.fly()


from abc import ABC, abstractmethod
# Abstract classes_ გვეხმარება სავალდებულო მეთოდების შექმნაში, რომელიც უნდა იყოს იმ კლასში, რომელიც მემკვიდრეობით იღებს მას

class Humans(ABC):
    def __init__(self,race):
        self.race = race
    @abstractmethod
    def breath(self):
        pass
class Human(Humans):
    def breath(self):
        print("*breathin*")

jhon = Human("Black")
jhon.breath()

# Polymorphism_ როცა ერთი და იგივე ფუნქცია სხვადასხვა კლასებში სხვადასხვაგვარად მუშაობს

class Animal:
    @abstractmethod
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

class Cow(Animal):
    def speak(self):
        return "Moo!"
    
dog = Dog() 
cat = Cat() 
cow = Cow() 

print(dog.speak())
print(cat.speak())
print(cow.speak())
# Duck typing_ ულოგიკო ფუნქია

class Noise:
    @abstractmethod
    def talk(self):
        pass
class Pug(Noise):
    def talk(self):
        print("woof")
class Chalico(Noise):
    def talk(self):
        print("meow")
class Car(Noise):
    def talk(self):
        print("vroom")
for i in [Pug(),Chalico(),Car()]:
    i.talk()

# Aggregation_ როცა ერთი კლასის ობიექტი სხვა კლასშია გამოყენებული, მაგრამ ისინი დამოუკიდებლად არსებობენ

class ShoppingCart:
    def __init__(self):
        self.items =[]

    def add(self,item):
        self.items.append(item)

    def nameItems(self):
        return [f"{i.iteme} is in cart" for i in self.items]

class Item:
    def __init__(self,iteme):
        self.iteme = iteme

cart = ShoppingCart()

item1 = Item("meat")
item2 = Item("bread")
item3 = Item("Cola")

cart.add(item1)
cart.add(item2)
cart.add(item3)

for i in cart.nameItems():
    print(i)

# Composition_ როცა ერთი კლასის ობიექტი გამოიყენება სხვა კლასში

class Brain:
    def wakeUp(self):
        print("Wake up")
class Person:
    def __init__(self):
        self.brain = Brain()
    def work(self):
        self.brain.wakeUp()
        print("go to work")
haley = Person()
haley.work()

# Static Method_ არ იღებს self-ს, ის დამოუკიდებელია კლასისგან

class Building:
    @staticmethod
    def lightsOn():
        print(True)

Building.lightsOn()

# Class Method _ კლასის მეთოდია, რომელიც იღებს თავად კლასს არგუმენტად

class Student:
    count = 0
    total_gpa = 0

    def __init__(self, name, gpa):
        self.name = name
        self.gpa = gpa
        Student.count += 1
        Student.total_gpa += gpa

    def get_info(self):
        return f"{self.name} {self.gpa}"

    @classmethod
    def get_count(cls):
        return f"Total # of students: {cls.count}"

    @classmethod
    def get_average_gpa(cls):
        if cls.count == 0:
            return 0
        else:
            return f"Average gpa: {cls.total_gpa / cls.count:.2f}"

# # Data Hiding _ მონაცემების დამალვა კლასის შიგნით 

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

