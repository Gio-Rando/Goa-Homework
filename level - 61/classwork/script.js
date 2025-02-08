let x = Number(prompt("Enter first number: "));
let y = Number(prompt("Enter second number: "));
console.log(x + y);

let name1 = prompt("Enter name: ");
console.log("Hello " + name1);

const form = document.getElementById("form")
form.addEventListener("click" , function(idk){
    idk.preventDefault()
    const hi = form.elements["name1"].value;
    console.log(hi)
})

// let p = document.getElementById("myp");
// p.onclick = p.textContent = "ho"

let p = document.getElementById("myp");
p.onclick = function () {
    p.textContent = "lo";
};
