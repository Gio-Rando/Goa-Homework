let x = prompt("Enter Number: ");

if (x >= 90){
    console.log("Grade A")
}
else if (x >= 80 && x < 90) {
    console.log("Grade B")
}
else if (x >= 70 && x < 80) {
    console.log("Grade C")
}
else if (x >= 60 && x < 70){
    console.log("Grade D")
}
else{
    console.log("Grade F")
}

let y = prompt("Enter Age: ") 

if (y < 13){
    console.log("You are a kid")
}
else if (y >= 13 && y < 18) {
    console.log("You are not an adult yet")
}
else{
    console.log("You are an adlut")
}


while(i <= 100){
    console.log(i++)
}

for (let i = 5 ;i <= 10 ; ++i ){
    console.log(i)
}
