class Motorcycle:
    count = 0
    def __init__(self, color, hp, year, brand):
        self.color = color
        self.hp = hp
        self.year = year
        self.brand = brand
        Motorcycle.count += 1

    def start(self):
        return f"My {self.brand} is starting."

    def stop(self):
        return f"My {self.brand} is stopping."
    
poco = Motorcycle("red", 150, 2022, "Yamaha")
poc = Motorcycle("Blue", 250, 2023, "BMW")
print(poco.start())
print(poc.stop())
print(poco.count)

class Animals:
    def __init__(self, name):
        self.name = name

class Dog(Animals):
    def bark(self):
        return f"{self.name} is barking."

class Cat(Animals):
    def meow(self):
        return f"{self.name} is meowing."

class Horse(Animals):
    def neigh(self):
        return f"{self.name} is neighing."
    
# inheritence საშუალებით ერთი კლასი მემკვიდრეობით იღებს მეორე კლასის თვისებებს
# როდესაც არ გვინდა რომ ერთი და იგივე მეთოდი გამოვიყენოთ

