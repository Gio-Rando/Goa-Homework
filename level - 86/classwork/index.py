from abc import ABC, abstractmethod

class Human(ABC):
    def __init__(self, name):
        self.name = name
    @abstractmethod
    def job(self):
        pass

class Teacher(Human):
    def job(self):
        return f"{self.name} is Teaching"
class Engineer(Human):
    def job(self):
        return f"{self.name} is Engineering"
class Doctor(Human):
    def job(self):
        return f"{self.name} is Curing"

bob = Teacher("Bob")
toad = Doctor("Toad")


print(bob.job())
print(toad.job())

class Shape:
    @abstractmethod
    def area(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    def area(self):
        return "circle area"

class Square(Shape):
    def __init__(self, side):
        self.side = side
    def area(self):
        return "Square area"

# Abstract classes_ გვეხმარება სავალდებულო მეთოდების შექმნაში, რომელიც უნდა იყოს იმ კლასში, რომელიც მემკვიდრეობით იღებს მას
# Polymorphism_ როცა ერთი და იგივე მეთოდი სხვადასხვა კლასებში სხვადასხვაგვარად მუშაობს

class Movies:
    def __init__(self, title):
        self.title = title
        self.cast = []

    def addActorAndCharacter(self, actor, characters):
        self.cast.append(MovieSite(actor, characters)) 

class MovieSite:
    def __init__(self, actors, characters):
        self.actors = actors
        self.characters = characters

movis = Movies("Barbie")
movis.addActorAndCharacter("Ryan", "Ken")
movis.addActorAndCharacter("Margot", "Barbie")

for i in movis.cast:
    print(i.actors, i.characters)





