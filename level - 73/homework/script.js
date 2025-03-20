//scope: განსაზღვრავს, თუ რომელი ცვლადები და ფუნქციებია ხელმისაწვდომი კოდის კონკრეტულ ნაწილში
//Hoisting: JavaScript ჯერ ადეკლარილებს ცვლადებისა და ფუნქციების და შემდეგ უშვებს კოდს

let tip = document.getElementsByName("tip");
let input = document.getElementById("tip");
let radio = document.getElementById("tip6");
let people = document.getElementById("peop");
let total = document.getElementById("top")
let tipa = document.getElementById("tipa")
let but = document.getElementById("but")

for (let i = 0; i < tip.length; i++) {
tip[i].addEventListener("click", () => {
    let labels = document.querySelectorAll("label");

    for (let k = 0; k < labels.length; k++) {
    labels[k].style.backgroundColor = "";
    }

    let sellab = document.querySelector(`label[for="${tip[i].id}"]`);
    if (sellab) {
    sellab.style.backgroundColor = "hsl(172, 67%, 45%)"; 
    }
});
}

input.addEventListener("focus", () => {
radio.checked = true;
radio.click();
});

people.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    let bill = document.getElementById("bill").value
    let peop = document.getElementById("peop").value
    let tip = document.getElementsByName("tip");
    if(tip[0].checked){
    tipa.textContent = `$${(Number(bill) * .05 / Number(peop)).toFixed(2)}`
    total.textContent = `$${((Number(bill) + Number(bill) * .05) / Number(peop)).toFixed(2)}`
    }
    else if(tip[1].checked){
        tipa.textContent = `$${(Number(bill) * 0.1 / Number(peop)).toFixed(2)}`
        total.textContent = `$${((Number(bill) + Number(bill)  * .1) / Number(peop)).toFixed(2)}`
        }
    else if(tip[2].checked){
        tipa.textContent = `$${(Number(bill) * .15 / Number(peop)).toFixed(2) } `
        total.textContent = `$${((Number(bill) + Number(bill)  * .15) / Number(peop)).toFixed(2) } `
        }
    else if(tip[3].checked){
        tipa.textContent = `$${(Number(bill) * .25 / Number(peop)).toFixed(2) } `
        total.textContent = `$${((Number(bill) + Number(bill)  * .25) / Number(peop)).toFixed(2) } `
        }
    else if(tip[4].checked){
        tipa.textContent = `$${(Number(bill) * .5 / Number(peop)).toFixed(2) } `
        total.textContent = `$${((Number(bill) + Number(bill)  * .5) / Number(peop)).toFixed(2) } `
        }
    else if(tip[5].checked){
        tipa.textContent = `$${(Number(bill) * (Number(input.value) /100) / Number(peop)).toFixed(2) } `
        total.textContent = `$${((Number(bill) + Number(bill)  * (Number(input.value) /100)) / Number(peop)).toFixed(2) } `
        }
}

    }
    
);

but.addEventListener("click" , () => {
    tipa.textContent = "$0.00"
    total.textContent = "$0.00"
})