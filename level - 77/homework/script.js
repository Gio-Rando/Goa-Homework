let img = document.getElementById("img")
let buttons = document.getElementsByTagName("button")

let images = ["./images/one.jpg","./images/two.jpg","./images/three.webp","./images/four.jpg","./images/five.webp"]
let i = 0

buttons[0].addEventListener("click", () => {
    i++
    if(i == images.length){
        i = 0
    }
    img.src = images[i]
})

buttons[1].addEventListener("click", () => {
    i--
    if(i < 0){
        i = images.length - 1
    }
    img.src = images[i]
})