import { auth_Actions } from "@/Store/AuthSlice"
import { useState } from "react"
import { useDispatch } from "react-redux"
import Link from "next/link"

export default function SignIn(){
    const dispatch = useDispatch()
    const [sign, setSign] = useState({
        firstName : "",
        lastName : "",
        userEmail : "",
        userPassword : "",
        userNumber : ""
    })
    
        
    const SubmitSignUp = (events)=>{
          events.preventDefault()
          
    }
    
    function ChangeSign(event){
        const {value, name} = event.target
        setSign((item)=>{
            return{
                ...item,
                [name] : value
            }
            DEFAU
        })
    }
    
    return(
        <>
        <form>
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
                name="userEmail" 
                value={sign.userEmail}
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
                    name="userPassword"
                    value={sign.userPassword}
                    id="password"
                    placeholder="enter your password"
                />
            </div>
            
            <div>
                <label htmlFor="Number">
                    Number
                </label>
                <input 
                    onChange={ChangeSign}
                    type="text"
                    name="userNumber"
                    value={sign.userNumber}
                    id="Number"
                    placeholder="enter your Number"
                />
            </div>
            
        </form>
        <div>
           <Link href=""><button type="submit" onClick={SubmitSignUp}>Sign Up</button></Link>
        </div>
        </>
    )
}