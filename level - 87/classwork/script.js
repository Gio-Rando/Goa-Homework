let input = document.getElementsByClassName("input");
let para = document.getElementsByTagName("p");
document.addEventListener("submit",(e)=>{
    e.preventDefault()
    let i= localStorage.length
    localStorage.setItem(`person${i}`, JSON.stringify([input[0].value, input[1].value, input[2].value]))
})
