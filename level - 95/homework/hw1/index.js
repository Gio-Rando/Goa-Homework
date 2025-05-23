// const {calc} = require("./calculator.js")
// console.log(calc(3,6,"+"))



import {filter} from "./calculator.js"

const even = (i)=>{
    return i % 2 == 0
} 
console.log(filter([0,9,8,7,6,5,4,3,2,1],even))
