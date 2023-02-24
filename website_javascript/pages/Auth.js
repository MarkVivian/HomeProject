import AuthReact from "@/components/Authentication/AuthReact"

const Auth = ({data})=>{
    return(
        <>
             <AuthReact data = {data} />  
        </>
    )
}


export default Auth


export async function getServerSideProps(){
    const Resp = await fetch("http://localhost:3000/Login")
    const Login = await Resp.json()
    return{
        props : {
            data : Login
        }
    }
}