import AuthReact from "@/components/Authentication/AuthReact"
import { useSelector } from "react-redux"

const Auth = ()=>{
    const file = useSelector((state) => state.Auth.userName)
    console.log(file)
    return(
        <>
             <AuthReact />  
        </>
    )
}

export default Auth