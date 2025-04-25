const sum = (...num)=>{
    let sum = 0;
    for (let i of num) {
        sum +=i
    };
    return sum
};


console.log(sum(1,1,1,1,1,1,1,1,1,1,1));
console.log(sum(2,2,2,2,2,22,2));
console.log(sum(3,3,4,2,4,2,4,2,5,22));

let me = {
    name: "Gio",
    age: 10
};

let hi = {
    name:"saba",
    k:"k"
}

let newObj = {...me,...hi}

console.log(newObj);

let lst = [1,2,34,5]
let newLst = [...lst];
console.log(newLst);
