import Link from "next/link"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { auth_Actions } from "@/Store/AuthSlice"

export default function Login(){
    
    const dispatch = useDispatch()
    
    const [loginInfo, useLoginInfo] = useState({
        userName : "",
        password : ""
    })
        
    const SubmitLoginInfo = (events)=>{
          events.preventDefault()
          dispatch(auth_Actions.Login([loginInfo.userName, loginInfo.password]))
    }
    return(
        <>
        <form>
            <div>
                <label htmlFor="UserName">
                    UserName
                </label>
                <input 
                onChange={(events)=>{
                    const {value} = events.target
                    useLoginInfo((item)=>{
                        return{
                            ...item,
                            userName : value
                        }
                    })
                }
                } 
                type="text"
                name="userName" 
                value={loginInfo.userName}
                placeholder="Enter your userName"
                id="UserName"/>
            </div>

            <div>
                <label htmlFor="password">
                    Password
                </label>
                <input 
                    onChange={(events)=>{
                        const {value} = events.target
                        useLoginInfo((item)=>{
                            return{
                                ...item,
                                password : value
                            }
                        })
                    }}
                    type="password"
                    name="password"
                    value={loginInfo.password}
                    id="password"
                    placeholder="enter your password"
                />
            </div>
            
        </form>
        <div>
           <Link href=""><button type="submit" onClick={SubmitLoginInfo}>Login</button></Link>
        </div>
        </>
    )
}