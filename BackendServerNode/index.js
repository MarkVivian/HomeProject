const Express = require("express")
const Cors = require("cors")
// * this will connect to the slider images
const slider_images = require("./Database/slider_images.json")
// * this is connecting to the database.
const Database = require("./Database/Database")
// * this will deal with the sign in and Authentication logic
const { Auth, Sign } = require("./Authenticate")

const App = Express()
App.use(Cors())
App.use(Express.json())


                //FOR FETCH REQUESTS
App.get("/slider_images", (req, res)=>{
    res.send(slider_images)
    console.log("the slider_images has been sent")
})

App.get("/AuthenticateMe", (req, res)=>{
    const body = req.body
    const Authenticate = new Database()
    Authenticate.DatabaseConnection()
    .then(()=>{
        Authenticate.ReadSpecificDatabase("userDetails", ["userName", "userPassword"])
        .then(()=>{
            const {state, control} = Auth(Authenticate.rows, body)
            if(state){
                if(control){
                    res.status(200).send({"message": "Admin has logged in successfully", "status" : true, "control" : true})
                }else{
                res.status(200).send({"message": "user logged in successfully", "status" : true, "control" : false})
                }
            }else{
                res.status(200).send({"message": "invalid user details", "status" : false, "control": false})
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

App.get("/AddMe", (req, res)=>{
    const body = JSON.parse(JSON.stringify(req.body))
    const signIn = new Database()
    signIn.DatabaseConnection()
    .then(()=>{
        signIn.ReadSpecificDatabase("userDetails", ["userEmail", "userNumber"])
        .then(()=>{
            if(Sign(signIn.rows, body)){
                signIn.WriteDatabase("userDetails", ["firstName","lastName", "userName","userPassword","userEmail", "userNumber"], [body.firstName, body.lastName, body.userName, body.userPassword, body.userEmail, body.userNumber])
                res.status(200).send({"message" : "you have been signed in successfully", "status" : true})
            }else{
                res.status(200).send({"message" : "your email or phone number is in use.", "status" : false})
            }
        })
    })
})
               
                
                
App.listen(3003, ()=>{
    console.log("the port is running")
})

