//Bubbling-ის დროს პირველად მოქმედება კეთდება child element-ზე
//Capturing-ის დროს პირველად მოქმედება კეთდება parent element-ზე
parent1 = document.getElementById("parent")
child1 = document.getElementById("child")

parent1.addEventListener("click",function(){
   console.log("Parent")
},true)
child1.addEventListener("click",function(){
   console.log("Child")
},false)