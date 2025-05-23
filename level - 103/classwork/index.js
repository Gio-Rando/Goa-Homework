// Promise-ი ელოდება რაიმე პროცესის დასრულებას, შემდეგ კი აგრძელბს მოქმედებას შედეგის მიხედვით
x = 4
const promise1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
     if(x>4){
        resolve(x)
     }
     else(
        reject(4)
     )   
    }, 500);
})

promise1
    .then((response)=>{ console.log(response)})
    .catch((response)=>{ console.log(response)})