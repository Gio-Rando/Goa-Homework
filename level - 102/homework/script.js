const form = document.querySelector("form")
const payment = document.getElementById("paym")
const total = document.getElementById("total")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let mort = Number(form.mort.value)
    let term = Number(form.term.value) * 12
    let rate = Number(form.rate.value) / 100 / 12   
    if(form.type.value == "repay"){
    let ans = mort * (rate * (1 + rate) ** term) / ((1 + rate) ** term - 1)
    payment.textContent = `£${ans.toFixed(2)}`
}
    else{
       payment.textContent = `£${((mort *(form.rate.value/100))/12).toFixed(2)}` 
    }
})