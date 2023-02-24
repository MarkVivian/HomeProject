import Login from "./Login/Login"
import SignIn from "./SignIn/SignIn"


export default function AuthReact({data}){

    return(
        <div>
            <Login data={data}/>
            <SignIn data={data}/>
        </div>
    )
}
