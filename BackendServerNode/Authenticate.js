function Authenticate(rows, body){
    try{
        var state = null
        var control = null
        rows.map((item)=>{
            if(item.userName === body.userName && item.userPassword === body.userPassword){
               console.log("user allowed")
               state = true
               return true
            }
        })
        if(state && body.userName === "Admin"){
            control = true
        }
        return {
            state,
            control
        }
    }catch(err){
        console.log("an error occured while authenticating the user: ", err)
    }
}

function SignIn(rows, body){
    try{
        var state = true
        rows.map((item)=>{
            if(item.userEmail === body.userEmail || item.userNumber === body.userNumber){
               console.log("user allowed")
               state = false
               return false
            }
        })
        return state
    }catch(err){
        console.log("an error occured while authenticating the user: ", err)
    }
}

module.exports = {
    Auth : Authenticate,
    Sign : SignIn
}