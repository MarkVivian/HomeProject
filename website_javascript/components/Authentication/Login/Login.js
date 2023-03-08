import { auth_Actions } from "@/Store/AuthSlice"
import Link from "next/link"
import { useState } from "react"
import { useDispatch } from "react-redux"
import IsEmpty from "../IsEmpty"

export default function Login({data}){    
    const dispatch = useDispatch()
    
    const [loginInfo, useLoginInfo] = useState({
        firstName : "",
        userPassword : ""
     })
        
    function SubmitLoginInfo(){
          if(IsEmpty(loginInfo)){
            console.log(loginInfo)
            dispatch(auth_Actions.loginFunction([loginInfo.firstName, loginInfo.userPassword]))
            useLoginInfo((item)=>{
                return{
                    firstName : item.firstName,
                    userPassword : item.userPassword
                }
            })
          }else{
            useLoginInfo((item)=>{
                return{
                    ...item,
                    message : "Please fill in all the fields"
                }
            })
          }
    }
    
    function ChangeLogin(events){
        const {name, value} = events.target
        useLoginInfo((item)=>{
            return{
                ...item,
                [name] : value
            }
        })
    }
    
    return(
        <>
        <form>
            <h1>{loginInfo.message}</h1>
            <div>
                <label htmlFor="firstName">
                    firstName
                </label>
                <input 
                onChange={ChangeLogin} 
                type="text"
                name="firstName" 
                value={loginInfo.firstName}
                placeholder="Enter your firstName"
                id="firstName"/>
            </div>

            <div>
                <label htmlFor="password">
                    Password
                </label>
                <input 
                    onChange={ChangeLogin}
                    type="password"
                    name="userPassword"
                    value={loginInfo.userPassword}
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


