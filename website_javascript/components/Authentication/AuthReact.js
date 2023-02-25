import { useSelector } from "react-redux"
import Login from "./Login/Login"
import SignIn from "./SignIn/SignIn"


export default function AuthReact({data}){
    const content = useSelector(state => state.Auth.signUp)
    const state = useSelector(state => state.Auth.state)
    if(state === true){
        Send(content)
    }
    return(
        <div>
            <Login data={data}/>
            <SignIn data={data}/>
        </div>
    )
}

function Send(data){
    const options = {
        method : 'POST',
        headers : {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(data)
    }
    
    fetch("http://localhost:3000/newUsers", options)
    .then(response => {
        if(response.ok){
            console.log("the response is ok")
            return response.json()
        }else{
            throw new Error("the response is not ok")
        }})
    .then(reponse => console.log(reponse))
    .catch(err=>{
        console.log("an error occured while parsing data: ", err)
    })
}