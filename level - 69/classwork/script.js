let date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

p = document.getElementById("myp");
setInterval(() => {
    date = new Date();
    p.textContent = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() ;
}, 1000);