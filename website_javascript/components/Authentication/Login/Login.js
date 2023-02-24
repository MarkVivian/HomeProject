import Link from "next/link"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { auth_Actions } from "@/Store/AuthSlice"

function CheckValidation(data, input){
    console.log(data.length)
    for(var i = 0; i < data.length; i++){
        const dataUserName = data[i].userName.toLowerCase()
        const dataPassword = parseInt(data[i].password)
        const userName = input.userName.toLowerCase()
        const userPassword = parseInt(input.password)
        if(userName === dataUserName){
            if(password === dataPassword){
                console.log("welcome")
                return true
            }else{
                console.log(`incorrect password. data password is ${dataPassword} of type ${typeof dataPassword} and your password is ${userPassword} of type ${typeof userPassword} `)
                return false
            }   
        }else{
            return false
        }
    }
    
    /*data.map((item)=>{
        const dataUserName = item.userName.toLowerCase()
        const dataPassword = item.password
        const userName = input.userName.toLowerCase()
        const userPassword = input.password
        
        if(userName === dataUserName){
            if(password === dataPassword){
                console.log("welcome")
                return true
            }else{
                console.log(`incorrect password. data password is ${dataPassword} of type ${typeof dataPassword} and your password is ${userPassword} of type ${typeof userPassword} `)
                return false
            }   
        }else{
            return false
        }
    })*/
}

export default function Login({data}){
    
    const dispatch = useDispatch()
    
    const [loginInfo, useLoginInfo] = useState({
        userName : "",
        password : "", 
        message : ""
    })
        
    const SubmitLoginInfo = (events)=>{
          events.preventDefault()
          if(CheckValidation(data, loginInfo)){
            dispatch(auth_Actions.Login([loginInfo.userName, loginInfo.password])) 
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
               {loginInfo.message}
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


