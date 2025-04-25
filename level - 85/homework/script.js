let numbers = [8,7,9,0,5]
let [one, two, three, four, five] = numbers
console.log(one, two, three, four, five)

let me = {
    name: "Giorgi",
    age: 17,
    city: "Kutaisi",
}
let { name, age, city } = me
console.log(name, age, city)

// spread operator გვაზლევს საშუალებას, რომ განვავრცოთ მასივი ან ობიექტი

let names = ["Giorgi", "Nika", "Ana"]
let [Giorgi, ...rest] = names
console.log(Giorgi, rest)

// შექმენით ფუნქცია, რომელსაც გადაეცემა n რაოდენობის რიცხვი, ამ ფუნქციამ უნდა დააბრუნოს გადაცემული რიცხვების ჯამი. გამოიძახეთ ის რამოდენიმეჯერ და ყოველ ჯერზე არგუმენტად გადაეცით სხვადასხვა რაოდენობის რიცხვი.
function sum(...args) {
    let total = 0
    for (let i = 0; i < args.length; i++) {
        total += args[i]
    }
    return total
}

console.log(sum(1, 2, 3)) // 6
console.log(sum(4, 5, 6, 7)) // 22 

let namess = ["Giorgi", "Nika", "Ana", "Maka", "Luka", "Giga", "Tiko", "Nino", "Mariam", "Salome"]  

let namesCopy = [...namess]
console.log(namesCopy)

let car = {
    brand: "BMW",
    model: "X5",
    year: 2020,
    color: "black",
    price: 50000,
}
let  {brand, model, ...res} = car
console.log(brand, model, res)
