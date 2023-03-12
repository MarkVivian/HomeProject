import Store from "@/Store/Store"
import AuthReact from "@/components/Authentication/AuthReact"
import { useSelector } from "react-redux"

export default function Auth(){
    const SignUp = useSelector(state => state.Auth.signUp)
    const Login = useSelector(state => state.Auth.login)
    if(SignUp.state){
        console.log("this is working")
        SendData(SignUp)
    }
    if(Login.state){
        console.log("this is working")
        SendData(Login)
    }
    return(
        <>
             <AuthReact />  
        </>
    )
}

async function SendData(data){
    const response = await fetch("./api/Auth", {
        method: "POST",
        headers : {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(data)
    })
    const info = await response.json()
    console.log(info)
}