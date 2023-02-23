import { auth_Actions } from "@/Store/AuthSlice"
import { useState } from "react"
import { useDispatch } from "react-redux"
import Link from "next/link"

export default function SignIn(){
    const dispatch = useDispatch()
    const [sign, setSign] = useState({
        firstName : "",
        lastName : "",
        email : "",
        newPassword : ""
    })
        
    const SubmitSignUp = (events)=>{
          events.preventDefault()
          dispatch(auth_Actions.SignUp([sign.firstName, sign.lastName, sign.email, sign.newPassword]))
    }
    
    return(
        <>
        <form>
            <div>
                <label htmlFor="firstName">
                    first Name
                </label>
                <input 
                onChange={(events)=>{
                    const {value} = events.target
                    setSign((item)=>{
                        return{
                            ...item,
                            firstName : value
                        }
                    })
                }
                } 
                type="text"
                name="firstName" 
                value={sign.firstName}
                placeholder="Enter your firstName"
                id="firstName"/>
            </div>
            
            <div>
                <label htmlFor="lastName">
                    lastName
                </label>
                <input 
                onChange={(events)=>{
                    const {value} = events.target
                    setSign((item)=>{
                        return{
                            ...item,
                            lastName : value
                        }
                    })
                }
                } 
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
                onChange={(events)=>{
                    const {value} = events.target
                    setSign((item)=>{
                        return{
                            ...item,
                            email : value
                        }
                    })
                }
                } 
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
                    onChange={(events)=>{
                        const {value} = events.target
                        setSign((item)=>{
                            return{
                                ...item,
                                newPassword : value
                            }
                        })
                    }}
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