# Abstract Classes
# Abstract Class-ის გაკეთებისას  child class ვალდებულია მიიღოს parent class-ის მეთოდები
from abc import ABC, abstractmethod

class User(ABC):
    @abstractmethod
    def password(self):
        pass

class Acc(User):

    def __init__(self,name):
        self.name = name

    def password(self):
        print(f"{self.name}2008")

user1263 = Acc("user1168")

user1263.password()

# Polymorphism
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

# Aggregation
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

