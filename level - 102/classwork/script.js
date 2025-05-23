class Animal{
    constructor(name){
        this._name = name
    }
    speak(){
        console.log(`${this._name} is making sound`)
    }
}

class Dog extends Animal{
    speak(){
        console.log(`${this._name} is barking`)
    }
}
let dog1 = new Dog("Abraham")
dog1.speak()

class User{
    static count = 0
    constructor(name){
        this._name = name
        User.count++
    }

    printAmount(){
        console.log(`There are ${User.count} Users`)
    }
}

let user1 = new User("Gio")
let user2 = new User("Nika")
let user3 = new User("Jhon")

user1.printAmount()