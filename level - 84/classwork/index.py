class Human:
    def __init__(self,name):
        self.name = name

class Programmer(Human):
    def code(self):
        print(f"{self.name} is coding")

class Designer(Human):
    def design(self):
        print(f"{self.name} is designing")

class Goaprogrammer(Programmer):
    def leads(self):
        print(f"{self.name} is leading")

class Goadesigner(Designer):
    def goa_design(self):
        print(f"{self.name} is goa designing")

class Professional(Programmer, Designer):
    def everything(self):
        print(f"{self.name} does everything")

bob = Programmer("Bob")
bob.code()
shmob = Designer("Shmob")
shmob.design()
blob = Goaprogrammer("Blob")
blob.leads()
blob.code()
smob = Goadesigner("Smob")
smob.goa_design()
smob.design()
stomb = Professional("Stomb")
stomb.code()
stomb.design()

