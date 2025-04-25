# 2) ახსენით რაში გვჭირდება super()_ გვჭირდება თუ გვინდა, რომ ახლალ კლას არა მხოლოდ ფერენთის,აესევე საკუთრი პროფერთი დავუმატოთ 
# 3) ახსენით როგორ მუშაობს super()_ როდესაც მას ვიყენებთ, ის ეძახის მშობლის შესაბამის მეთოდს

class Games:
    def __init__(self,name):
        self.name = name
class Shooter(Games):
    def __init__(self, name, graphic):
        super().__init__(name)
        self.graphic = graphic
    def about(self):
        print(f"{self.name} is {self.graphic} graphic Game")

cod = Shooter("COD" , "High")
cod.about()