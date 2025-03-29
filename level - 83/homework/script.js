input = document.getElementsByClassName("input");
para = document.getElementsByTagName("p");
document.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(e)
    para[0].textContent = `Full Name: ${input[0].value}`
    para[1].textContent = `Email:${input[1].value}`
})