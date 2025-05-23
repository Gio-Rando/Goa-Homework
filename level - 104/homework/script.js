const button = document.getElementById("submit")
const p = document.querySelector("p")
const h5 = document.querySelector("h5")

button.addEventListener("click",(e)=>{
    e.preventDefault()
    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            h5.textContent = `ADVICE #${response.slip.id}`
            p.textContent = `"${response.slip.advice}"`
        }
        )})
