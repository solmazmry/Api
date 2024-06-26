const BASE_URL= 'https://api.newtimes.az/api/login'


const email =document.querySelector("#Email")
const password =document.querySelector("#Password")
const form =document.querySelector("form")

form.addEventListener("submit" ,e=>{
    e.preventDefault()
    fetch(`${BASE_URL}`,{
        method: "post",
        body: JSON.stringify({
            email:email.value,
            password:password.value
        }),
        headers:{
            'Content-Type': 'application/json'
    
        }

    })
})
