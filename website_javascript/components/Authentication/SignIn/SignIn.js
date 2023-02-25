import { auth_Actions } from "@/Store/AuthSlice"
import { useState } from "react"
import { useDispatch } from "react-redux"
import Link from "next/link"

function SignInValidation(data){
    const values = Object.values(data)
    if(values.every(values => values)){
        return true
    }else{
        return false
    }
}

function CompareSign(info, emailData){
  return info.some(obj => obj["email"] === emailData);
}

export default function SignIn({data}){
    console.log(data)
    const dispatch = useDispatch()
    const [sign, setSign] = useState({
        firstName : "",
        lastName : "",
        email : "",
        newPassword : ""
    })
    
    const [message, setMessage] = useState({
        message : ""
    })
        
    const SubmitSignUp = (events)=>{
          events.preventDefault()
          const validation = SignInValidation(sign)
          const comparison = CompareSign(data, sign.email)
          console.log(comparison)
          if(validation && comparison){
                setMessage(()=>{
                    return{
                        message : "welcome"
                    }
                })
                dispatch(auth_Actions.SignUp([sign.firstName, sign.lastName, sign.email, sign.newPassword, true]))
          }else{
            if(!validation){
                setMessage(()=>{
                    return{
                        message : "please fill in all the fields"
                    }
                })
            }else if(!comparison){
                setMessage(()=>{
                    return{message : "email already in use"}})
            }
          }
    }
    
    function ChangeSign(event){
        const {value, name} = event.target
        setSign((item)=>{
            return{
                ...item,
                [name] : value
            }
        })
    }
    
    return(
        <>
        <form>
            <h2>{message.message}</h2>
            <div>
                <label htmlFor="firstName">
                    first Name
                </label>
                <input 
                type="text"
                name="firstName" 
                value={sign.firstName}
                placeholder="Enter your firstName"
                onChange={ChangeSign} 
                id="firstName"/>
            </div>
            
            <div>
                <label htmlFor="lastName">
                    lastName
                </label>
                <input 
                onChange={ChangeSign}  
                type="text"
                name="lastName" 
                value={sign.lastName}
                placeholder="Enter your lastName"
                id="lastName"/>
            </div>
            
            <div>
                <label htmlFor="email">
                    email
                </label>
                <input 
                onChange={ChangeSign} 
                type="text"
                name="email" 
                value={sign.email}
                placeholder="Enter your email"
                id="email"/>
            </div>

            <div>
                <label htmlFor="password">
                    Password
                </label>
                <input 
                    onChange={ChangeSign}
                    type="password"
                    name="newPassword"
                    value={sign.newPassword}
                    id="password"
                    placeholder="enter your password"
                />
            </div>
            
        </form>
        <div>
           <Link href=""><button type="submit" onClick={SubmitSignUp}>Sign Up</button></Link>
        </div>
        </>
    )
}