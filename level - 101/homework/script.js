prime = (e)=>{
    let isPrime = true;

    if (e === 1) {
        return false
    }

    else if (e > 1) {

    for (let i = 2; i <= e/2; i++) {
        if (e % i == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime
}}
let nums = [1,2,3,56,67,88,0,5,345,27,17,19,9]

console.log(nums.filter(e=> prime(e)))

let users = [
    {name: "Gio", id: 12345678},
    {name: "Nika", id: 1234567},
    {name: "Demetre", id: 1234}
]

console.log(users.map(e => e.name))

let products = [
    {product:"Bread", price:1},
    {product:"Meat", price:30},
    {product:"Wine", price:60},
    {product:"Borjomi", price:2},
    {product:"Milk", price:4},
    {product:"Tomato", price:3},
    {product:"Potato", price:3},
    {product:"Onion", price:5},
    {product:"Pickle", price:2},
    {product:"Egg", price:0.4},
]

console.log(products.filter(e=>e.price<25))

let books = [
    {author:"ilia wavwavadze",title:"sarchobelaze"},
    {author:"vaja fshavela",title:"chemi veddreba"},
    {author:"akaki wereteli",title:"agmart agmart"}
]

console.log(books.map(e=>`${e.title} by ${e.author}`))

console.log(nums.filter(e=>e>10 && e%3==0))

let user = [
    {name: "Gio", age:17},
    {name: "Nika", age: 18},
    {name: "Demetre", age: 14}
]

console.log(user.map(e=> ({...e, isAdult: e.age >= 18})))

console.log(nums.filter(e=>e>50).map(e=>e/2))

let words = ["guo","hio","gio","goa","gio","ji","hi","ji"]
let word = {}
words.forEach((e)=>{
    if(word[e]){
        word[e]++
    }
    else{
        word[e]=1
    }
})
console.log(word)

let cars = [
    {brand:"mercedes", model:"c180"},
    {brand:"bmw", model:"bmw ix"},
    {brand:"mercedes", model:"c250"}
]

console.log(cars.filter((e)=>e.brand == "mercedes"))