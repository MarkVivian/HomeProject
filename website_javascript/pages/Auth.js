import AuthReact from "@/components/Authentication/AuthReact"
import { useSelector } from "react-redux"

const Auth = ()=>{
    const sign = useSelector((state)=> state.Auth.signUp)
    console.log(sign)
    const info = [{
        firstName : sign.firstName,
        lastName : sign.lastName
    }]
    console.log(info)
    SendName(sign)
    return(
        <>
             <AuthReact />  
        </>
    )
}

async function SendName(data){
    const options = {
        method : "POST",
        headers :{
            "Content-Type": "application/json"
        },
        body : JSON.stringify(data)
    }
    fetch("http://localhost:3000/api/sign", options)
    .then(response => response.json())
    .then(response =>{
        console.log("the response is " + JSON.stringify(response))
    })
    .catch((err) => console.log("an error occured"))
    
}


export default Auth
