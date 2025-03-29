let forms = document.getElementsByTagName("form")
let users = []
function accs(name,email,password){
    return {name,email,password}
}
forms[0].addEventListener("submit" , (e)=>{
    e.preventDefault()
    let name = forms[0].name.value
    let email = forms[0].email.value      
    let password = forms[0].password.value
    for(let i of users){
        if (i.email === email){
            alert("Account is successfully  in")
            return e.target.reset()
        }
    }
    users.push(new accs(name,email,password))
    alert("registration is successful")
    console.log(users)
    e.target.reset()      
})

forms[1].addEventListener("submit",(e)=>{
    e.preventDefault()
    let email = forms[1].email.value      
    let password = forms[1].password.value
            
    for(let i of users){
        if (i.email === email && i.password === password){
            alert("Account has successfully logged in")
            return 
        }
    }
    alert("Account has unsuccessfully logged in")
    console.log(users)
})