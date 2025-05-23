const root = document.getElementById("root")
const search = document.getElementById("sea")
const form = document.querySelector("form")
// fetch("https://fakestoreapi.com/products/1")
//     .then((response) => response.json())
//     .then((res) => root.innerHTML += `<p>${res.title}</p>`)

// fetch("https://fakestoreapi.com/products")
//     .then((response) => response.json())
//     .then((res) => res.forEach((el) => {
//       root.innerHTML += `<p>${el.title}</p>`
//     }))

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    root = ""
    fetch(`https://www.googleapis.com/books/v1/volumes?q={${search.value}}`)
    .then((response) => response.json())
    .then((res) => res.items.forEach((el) => {
      root.innerHTML += `<p>${el.volumeInfo.title}</p>`
    }))
})
