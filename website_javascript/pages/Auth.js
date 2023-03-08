import { auth_Actions } from "@/Store/AuthSlice"
import Store from "@/Store/Store"
import AuthReact from "@/components/Authentication/AuthReact"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";

export default function Auth(){
    const dispatch = useDispatch()
    const loginInfo = useSelector(state => state.Auth.login)
    const signInfo = useSelector(state => state.Auth.login)
    /* 
    const loginInfo = Store.getState().Auth.login
    const signInfo = Store.getState().Auth.signUp
    */
    console.log(loginInfo)
    useEffect(async()=>{
      const detal = await Send(loginInfo, signInfo)
      console.log(detal)
    },[loginInfo.state, signInfo.state])
    

    return(
        <>
             <AuthReact />  
        </>
    )
}


async function Send(loginInfo, signInfo){
    var url = null
    var data = null
    if(loginInfo.state == true){
        data = loginInfo
        url = "http://localhost:3000/testMe"
    }
    if(signInfo.state == false){
        data = signInfo
        url = "http://localhost:3000/testMwa"
    }
    const login = await fetch(url, {
        method : 'POST',
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    const value = await login.json()
    return value
}

// ! this will send the data to the server since this only loads once.
/* 

export async function getServerSideProps(){
    console.log("this has been called")
    // ? this will get the data from the store
    const loginInfo = Store.getState().Auth.login
    const signInfo = Store.getState().Auth.signUp
    console.log(loginInfo)
    // this will get the response.
    const test = loginInfo.state ? await Send(loginInfo, 1) : signInfo.state ? await Send(signInfo, 2) : null
    return{
        props : {
            test
        }
    }
}*/
