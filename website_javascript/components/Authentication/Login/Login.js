import { auth_Actions } from "@/Store/AuthSlice"
import Link from "next/link"
import { useState } from "react"
import { useDispatch } from "react-redux"

function CheckValidation(data, input){
    // FIX THIS BUG NOT WORKING
    console.log(data.length)
    for(var i = 0; i < data.length; i++){
        const dataUserName = data[i].firstName.toLowerCase()
        const dataPassword = data[i].password
        const userName = input.userName.toLowerCase()
        const userPassword = input.password
        
        if(userName === dataUserName && userPassword === dataPassword){
            return true
        }else{
            return false
        }
    }
}

export default function Login({data}){    
    const dispatch = useDispatch()
    
    const [loginInfo, useLoginInfo] = useState({
        userName : "",
        password : "", 
        message : ""
    })
        
    function SubmitLoginInfo(events){
          events.preventDefault()
          if(CheckValidation(data, loginInfo)){
            if(loginInfo.userName.toLowerCase() === "mark"){
                dispatch(auth_Actions.Position("admin"))
            }else{
                dispatch(auth_Actions.Position("user"))
            }
            useLoginInfo((item)=>{
                return{
                    ...item,
                    message : "Logged in successfully"
                }
            })
          }else{
            useLoginInfo((item)=>{
                return{
                    ...item,
                    message : "incorrect userName or password"
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
             <h2>{loginInfo.message}</h2>  
            <div>
                <label htmlFor="UserName">
                    UserName
                </label>
                <input 
                onChange={ChangeLogin} 
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
                    onChange={ChangeLogin}
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


