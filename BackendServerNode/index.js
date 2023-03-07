const Express = require("express")
const Cors = require("cors")
// * this will connect to the slider images
const slider_images = require("./Database/slider_images.json")
// * this is connecting to the database.
const Database = require("./Database/Database")

const App = Express()
App.use(Cors())
App.use(Express.json())


                //FOR FETCH REQUESTS
App.get("/slider_images", (req, res)=>{
    res.send(slider_images)
    console.log("the slider_images has been sent")
})


                // USER AND OWNER API
App.get("/AuthenticateMe", (req, res)=>{
    const body = req.body
    const Auth = new Database()
    Auth.DatabaseConnection()
    .then(()=>{
        Auth.ReadSpecificDatabase("userDetails", ["userName", "userPassword"])
        .then(()=>{
            if(Authenticate(Auth.rows, body)){
                res.status(200).send({"message": "user logged in successfully", "status" : true})
            }else{
                res.status(200).send({"message": "invalid user details", "status" : false})
            }
        })
    })
    /*
   if(Auth(body)){
        res.status(200).send({
            message : "user approved",
            status : true
    })
    }else{
        res.status(200).send({
            message : "user rejected",
            status : false
        })
    }
 */
})


function Authenticate(rows, body){
    try{
        var state = null
        rows.map((item)=>{
            if(item.userName === body.userName && item.userPassword === body.userPassword){
               console.log("user allowed")
               state = true
               return
            }else{
                console.log("user not allowed")
                state = false
            }
        })
        return state
    }catch(err){
        console.log("an error occured while authenticating the user: ", err)
    }
}
                
      
                
                
                
App.listen(3003, ()=>{
    console.log("the port is running")
})

