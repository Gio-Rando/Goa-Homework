let x = 12;
let y = 16;
console.log(x == y);
x = 12;
y = 12;
console.log(x == y);
x = 16;
y = 16;
console.log(x == y);
x = 16;
y = 12;
console.log(x == y);
console.log(x == y == x);
x = 12;
y = 16
console.log(x < y);
x = 12;
y = 12;
console.log(x < y);
x = 16;
y = 16;
console.log(x < y);
x = 16;
y = 12;
console.log(x < y);
console.log(x < y < x);
x = 12;
y = 16;
console.log(x > y);
x = 12;
y = 12;
console.log(x > y);
x = 16;
y = 16;
console.log(x > y);
x = 16;
y = 12;
console.log(x > y);
console.log(x > y > x);
// alert() აჩვენებს გაფრთხილების ფანჯარას
// confirm() აჩვენებს დიალოგურ ფანჯარას
// prompt()	მომხმარებლისგან იღებს შეტანილ ტექსტს 
let p = document.getElementById("po");
let text = "Are you an adult?";
if (confirm(text) == true) {
  p.textContent = "You are an adult";
} else {
  p.textContent = "You are a kid";
}