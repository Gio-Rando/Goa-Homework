let lst = [1,2,3,4,5,6]
let x = 0
let y = lst.slice()

function sum(el , i , ar){
    x += el
    ar[i] = x
    return ar
}
y.forEach(sum)
console.log(Number(y.slice(-1)))

function summ(pre , next){
    return pre + next
}
console.log(lst.reduce(summ))

console.log(eval(lst.join('+')))

function summm(lst){
    x = 0
    for (let i = 0 ; i < lst.length ; i++){
    x += lst[i]     
}
return x
}

console.log(summm(lst))

function max(lst){
    x = lst[0]
    for (let i = 0 ; i < lst.length ; i++){
        if (lst[i] > x){
            x = lst[i]  
        }   
    }
    return x
}
function min(lst){
    x = lst[0]
    for (let i = 0 ; i < lst.length ; i++){
        if (lst[i] < x){
            x = lst[i]  
        }   
    }
    return x
}
console.log(min(lst))
console.log(max(lst))
console.log(Math.max(1,2,3,4,5,6))
console.log(Math.min(1,2,3,4,5,6))

console.log(Math.round(Math.random() * 101))

function sqrt(lst){
    for (let i = 0 ; i < lst.length ; i++){
            lst[i] = Math.sqrt(lst[i])
    }
    return lst
}

console.log(sqrt(lst))

lst = [1.5,2.5,3.5,4.5,5.5,6.5]

function floor(lst){
    for (let i = 0 ; i < lst.length ; i++){
            lst[i] = Math.floor(lst[i])
    }
    return lst
}

console.log(floor(lst))

lst = [1.5,2.5,3.5,4.5,5.5,6.5]


function ceil(lst){
    for (let i = 0 ; i < lst.length ; i++){
            lst[i] = Math.ceil(lst[i])
    }
    return lst
}

console.log(ceil(lst))

lst = [1.5,2.5,3.5,4.5,5.5,6.5]


function round(lst){
    for (let i = 0 ; i < lst.length ; i++){
            lst[i] = Math.round(lst[i])
    }
    return lst
}

console.log(round(lst))