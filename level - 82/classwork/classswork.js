let me = {
    name:"Giorgi",
    lastname:"Giorgobiani",
    age:17
}

localStorage.setItem("me" , JSON.stringify(me))

let data = JSON.parse(localStorage.getItem("me"))
data.name = "gio"
localStorage.setItem("me" , JSON.stringify(data))
console.log(JSON.parse(localStorage.getItem("me")).name)
