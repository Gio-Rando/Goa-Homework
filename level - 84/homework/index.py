# Multiple Inheritance_ როცა ერთი კლასი მემკვიდრეობით იღებს რამდენიმე მშობელ კლასს
# Multilevel Inheritance_ როცა ერთი კლასი მემკვიდრეობით იღებს მშობელ კლასს, რომელიც ასევე მემკვიდრეობით იღებს სხვა მშობელ კლასს
# super()_ ფუნქცია, რომელიც გამოიყენება მშობელ კლასის მეთოდების გამოძახებისათვის შვილ კლასში

class Animal:
    def __init__(self, name):
        self.name = name

class Mammal(Animal):
    def __init__(self, name, fur_color):
        super().__init__(name)  # super() ფუნქცია მშობელ კლასის __init__ მეთოდის გამოძახებისათვის
        self.fur_color = fur_color
class Dog(Mammal):
    def __init__(self, name, fur_color, breed):
        super().__init__(name, fur_color)  # super() ფუნქცია მშობელ კლასის __init__ მეთოდის გამოძახებისათვის
        self.breed = breed
    def bark(self):
        return f"{self.name} says Woof!"

bob = Dog("Bob", "Brown", "Labrador")
print(bob.name)   
print(bob.fur_color)  
print(bob.breed)  

class Vehicle:
    def a(self, brand, color):
        self.brand = brand
        self.color = color

class Ship:
    def cap(self, capacity):
        self.capacity = capacity

class Rocket(Vehicle, Ship):
    def __init__(self, brand, color, capacity):
        self.a(brand, color)
        self.cap(capacity)
    
    def launch(self):
        return f"The {self.color} {self.brand} rocket is launching!"

spacex = Rocket("SpaceX", "White", 100)
print(spacex.brand) 
print(spacex.capacity)
print(spacex.launch()) 
print(spacex.color)  
print(spacex.capacity)

class Person:
    def __init__(self,name):
        self.name = name

class Student(Person):
    def __init__(self,name,student_id):
        super().__init__(name)  # super() ფუნქცია მშობელ კლასის __init__ მეთოდის გამოძახებისათვის
        self.student_id = student_id

name = Student("John", 12345)
print(name.name) 
print(name.student_id)