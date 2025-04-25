class Car{
    constructor(make, model){
        this.make = make
        this.model = model
    }
}

const car = new Car("Ford","Carvolet")

console.log(car.make)
console.log(car.model)

class Bank{
    #balance = 12207975
    constructor(name){
        this.name = name
    }

    deposit(dep){
        return this.#balance + dep 
    }
    withdraw(dep){
        return this.#balance - dep 
    }
}

let rich = new Bank("Giorgi")

console.log(rich.name)
console.log(rich.deposit(890))
console.log(rich.withdraw(890))
console.log(rich.balance)

class MathOperations{
    static PI = Math.PI

    static add(num1, num2){
        return num1 + num2 
    }
}

console.log(MathOperations.add(1, 2));
console.log(MathOperations.PI)

class Rectangle{
    constructor(width,height){
        this.width = width
        this.height = height
    }
    get area(){
        return this.width * this.height
    }

    set area(value){
        Math.abs(value)
    }
}

rec = new Rectangle(-5,8)

console.log(rec.area)

class Player{
    static sum = 0
    constructor(name, lvl){
        this.name = name;
        this.lvl = lvl;
        Player.sum++;
    }

    static getPlayerCount(){
        return Player.sum;
    }
}

const salesTax = 0.05;

const product1 = new Player("Sito90", 19);
const product2 = new Player("Pats70", 22);
const product3 = new Player("Und57", 100);

console.log(Player.getPlayerCount());

class Student {
    constructor(name, grade) {
      this.name = name;
      this.grade = grade;
    }
  
    static compareGrades(student1, student2) {
      if (student1.grade > student2.grade) {
        return `${student1.name} has a higher grade than ${student2.name}.`;
      } else if (student1.grade < student2.grade) {
        return `${student2.name} has a higher grade than ${student1.name}.`;
      } else {
        return `${student1.name} and ${student2.name} have the same grade.`;
      }
    }
}

const s1 = new Student("Alice", 85);
const s2 = new Student("Bob", 92);

console.log(Student.compareGrades(s1, s2));