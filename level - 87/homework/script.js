const sum = (...num)=>{
    let sum = 0;
    for (let i of num) {
        sum +=i
    };
    return sum
};


console.log(sum(5,7,9,7,0,4,6,7));

const greet = (...names)=>{
    for(let i of names){
        console.log(`Hello ${i}`)
    }
}

greet("Gio","Luka","Sandro")

let me = {
    name: "Gio",
    age: 17,
    country: "Georgia" 
};

const { name, ...rest } = me

console.log(name)
console.log(rest)

// spread

let m = {
    name: "Gio",
    age: 10
};

let hi = {
    name:"saba",
    k:"k"
}

let newObj = {...m,...hi}

console.log(newObj)

let lst = [1,2,34,5]
let newLst = [...lst];
console.log(newLst);

let summation = (a, b, c)=> {
    return a + b + c;
  }
  
const numbers = [1, 2, 3];
  
console.log(summation(...numbers))

const resp = (num,...rest)=>{
    console.log(num)
    console.log(...rest)
}

resp(3,2,3,5,6,8,5)

//localStorage არის ბრაუზერის მეხსიერება, რომელიც საშუალებას გაძლევს შეინახო მონაცემები ლოკალურად, დომენზე და მუდმივად

    
