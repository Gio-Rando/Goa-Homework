let p = document.getElementById("po")
let i = 0


setInterval(()=> {
    let date = new Date();
    p.textContent = `${date.getMinutes()}:${date.getSeconds()}`
},1000)

let fiv = setInterval(()=> {
    i+=1
    console.log(i)
    if(i == 15){
        clearInterval(fiv)
    }
},5)

setTimeout(()=>{
    console.log(1)
},2000)
setTimeout(()=>{
    console.log(2)
},1000)
setTimeout(()=>{
    console.log(3)
},3000)
