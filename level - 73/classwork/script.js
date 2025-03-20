let olas = document.getElementsByClassName("ola")
let id = document.querySelector(".id")
let clas =  document.querySelector(".class")
let img = document.getElementById("ido")
img.addEventListener("click", () => {
    img.src = "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
    img.style.width = "500px"
})

id.style.color = "white"
id.style.backgroundColor = "red"
id.style.fontSize = "30px"

const div = document.getElementById("div");
const p = document.createElement("p");
const text = document.createTextNode("Hello again");
p.appendChild(text); 
div.appendChild(p); 